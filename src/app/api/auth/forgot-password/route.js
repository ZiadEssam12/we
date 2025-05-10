import { NextResponse } from "next/server";
import * as Yup from "yup";
import { randomBytes } from "crypto";
import prisma from "@/lib/prisma";
import sendEmail from "@/lib/email";
import ResetPassword from "@/lib/EmailTemplates/ResetPassword";

// Schema for request validation
const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate request body
    try {
      await forgotPasswordSchema.validate(body);
    } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    const { email } = body;

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Always return success even if user doesn't exist (security best practice)
    if (!user) {
      return NextResponse.json(
        {
          message:
            "If your email is registered, you will receive a password reset link",
        },
        { status: 200 }
      );
    }

    // Generate a random token
    const token = randomBytes(32).toString("hex");

    // Set expiration time (10 minutes from now)
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 10);

    try {
      // Check if passwordResetToken model exists in prisma client
      // Save token in the database (upsert to handle existing tokens)

      await prisma.passwordResetToken.upsert({
        where: { userId: user.id },
        update: {
          token,
          expires,
        },
        create: {
          userId: user.id,
          token,
          expires,
        },
      });
    } catch (error) {
      console.error("Error with password reset token:", error.message);
      // Continue execution to return a success response to the user
    }

    const resetURL = `${process.env.NEXT_PUBLIC_APP_URL}/resetPassword?token=${token}`;
    const RestTemplate = ResetPassword(resetURL);

    try {
      await sendEmail(
        user.email,
        "Reset Your Password At SafariHub",
        RestTemplate
      );
    } catch (error) {
      console.log("Error in sending email :", error);

      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        message:
          "If your email is registered, you will receive a password reset link",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
