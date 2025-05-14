import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@/app/auth";
import { copperLineSchema } from "@/schemas/copperLine";

// GET all CopperLines
// api/copper-lines
export async function GET(request) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json(
      { success: false, message: "غير مصرح به" },
      { status: 401 }
    );
  }

  try {
    const copperLines = await prisma.copperLine.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(
      { success: true, data: copperLines },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching copper lines:", error);
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء استرجاع بيانات خطوط النحاس",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// POST a new CopperLine
export async function POST(request) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json(
      { success: false, message: "غير مصرح به" },
      { status: 401 }
    );
  }
  // Optional: Add role-based access control if needed
  // if (session.user.role !== "ADMIN" && session.user.role !== "MANAGER") {
  //   return NextResponse.json(
  //     { success: false, message: "غير مصرح به. يتطلب دور المسؤول أو المدير." },
  //     { status: 403 }
  //   );
  // }

  try {
    const body = await request.json();
    let validatedData;

    try {
      validatedData = await copperLineSchema.validate(body, {
        abortEarly: false,
        stripUnknown: true,
      });
    } catch (validationError) {
      const errors = validationError.inner.reduce((acc, err) => {
        acc[err.path] = err.message;
        return acc;
      }, {});
      return NextResponse.json(
        {
          success: false,
          message: "خطأ في التحقق من البيانات",
          error: errors,
        },
        { status: 400 }
      );
    }

    const newCopperLine = await prisma.copperLine.create({
      data: validatedData,
    });

    return NextResponse.json(
      {
        success: true,
        message: "تم إنشاء خط النحاس بنجاح",
        data: newCopperLine,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating copper line:", error);
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء إنشاء خط النحاس",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
