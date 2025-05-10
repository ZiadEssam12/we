import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

import { registerSchema } from "@/schemas/auth";
// Import your existing login schema

// route /api/auth/authorize
export async function POST(req) {
  try {
    const { email, password, confirmPassword, phoneNumber } = await req.json();

    // Validate request using your login schema
    try {
      await registerSchema.validate({
        email,
        phoneNumber,
        password,
        confirmPassword,
      });
    } catch (validationError) {
      return NextResponse.json(
        { success: false, message: validationError.message },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      return NextResponse.json(
        {
          success: false,
          message: "User with this email already exists",
        },
        { status: 401 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        // phoneNumber,
      },
    });

    return NextResponse.json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.error("Error during authorization:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
