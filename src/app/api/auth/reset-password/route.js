import { NextResponse } from "next/server";
import * as Yup from "yup";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

// Schema for request validation
const resetPasswordSchema = Yup.object().shape({
  token: Yup.string().required("Token is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

// route -> get /api/auth/reset-password/
export async function GET(request) {
  try {
    // Get token from URL
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Token is required" },
        { status: 400 }
      );
    }

    // Find the token in the database
    const resetToken = await prisma.passwordResetToken.findUnique({
      where: { token },
    });

    // Check if token exists and is not expired
    if (!resetToken || resetToken.expires < new Date()) {

      return NextResponse.json(
        { success: false, message: "Invalid or expired token" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Token is valid" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Token validation error:", error);
    return NextResponse.json(
      { success: false, message: "Error validating token" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate request body
    try {
      await resetPasswordSchema.validate(body);
    } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    const { token, password } = body;

    // If the model exists, use it to find the token
    try {
      // Find the token in the database
      const resetToken = await prisma.passwordResetToken.findUnique({
        where: { token },
        include: { user: true },
      });

      // Check if token exists and is valid
      if (!resetToken) {
        return NextResponse.json(
          { success: false, message: "Invalid or expired token" },
          { status: 400 }
        );
      }

      // Check if token is expired
      if (resetToken.expires < new Date()) {
        // Delete expired token
        await prisma.passwordResetToken.delete({
          where: { id: resetToken.id },
        });

        return NextResponse.json(
          {
            success: false,
            message:
              "Token has expired. Please request a new password reset link.",
          },
          { status: 400 }
        );
      }

      // Hash the new password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Update user's password
      await prisma.user.update({
        where: { id: resetToken.userId },
        data: { password: hashedPassword },
      });

      // Delete the used token
      await prisma.passwordResetToken.delete({
        where: { id: resetToken.id },
      });

      return NextResponse.json(
        { message: "Password has been reset successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Token validation error:", error);
      return NextResponse.json(
        { message: "Error validating token" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Reset password error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
