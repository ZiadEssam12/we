import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { loginSchema } from "@/schemas/auth";
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const { userName, password } = await req.json();

    // Check if userName and password are provided
    if (!userName || !password) {
      return NextResponse.json(
        { success: false, message: "اسم المستخدم وكلمة المرور مطلوبان" },
        { status: 400 }
      );
    }

    // Validate request using your login schema
    try {
      await loginSchema.validate({ userName, password });
    } catch (validationError) {
      return NextResponse.json(
        { success: false, message: validationError.message },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { userName },
    });

    // Important change: Return 200 with success:false instead of 401
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "لا يوجد مستخدم بهذا الاسم",
        },
        {
          status: 400,
        }
      );
    }

    const isValid = await bcrypt.compare(password, user.password);

    console.log("User:", user);
    console.log("Is valid:", isValid);

    // Important change: Return 200 with success:false instead of 401
    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          message: "بيانات الاعتماد غير صحيحة",
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
      { success: false, message: "تعذر تسجيل الدخول" },
      { status: 500 }
    );
  }
}
