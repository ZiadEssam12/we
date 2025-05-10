import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { loginSchema } from "@/schemas/auth";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Check if email and password are provided
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Validate request using your login schema
    try {
      await loginSchema.validate({ email, password });
    } catch (validationError) {
      return NextResponse.json(
        { success: false, message: validationError.message },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Important change: Return 200 with success:false instead of 401
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "No user found with this email",
        },
        {
          status: 400,
        }
      );
    }

    const isValid = await bcrypt.compare(password, user.password);

    // Important change: Return 200 with success:false instead of 401
    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid credentials",
        },
        {
          status: 400,
        }
      );
    }

    // Return sanitized user data (no password)
    const { password: _, ...safeUser } = user;

    return NextResponse.json(
      {
        success: true,
        user: {
          ...safeUser,
        },
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Authorization error:", error);
    return NextResponse.json(
      { success: false, message: "Authentication failed" },
      { status: 500 }
    );
  }
}
