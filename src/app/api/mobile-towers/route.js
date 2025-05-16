import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@/app/auth";
import { mobileTowerSchema } from "@/schemas/mobileTower";
import { getStatusFromHeader } from "@/lib/middleware-utils";

// GET all MobileTowers
// api/mobile-towers
export async function GET(request) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json(
      { success: false, message: "غير مصرح به" },
      { status: 401 }
    );
  }

  try {
    const mobileTowers = await prisma.mobileTower.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(
      { success: true, data: mobileTowers },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching mobile towers:", error);
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء استرجاع بيانات أبراج الجوال",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// POST a new MobileTower
export async function POST(request) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json(
      { success: false, message: "غير مصرح به" },
      { status: 401 }
    );
  }
  // Optional: Add role-based access control if needed, e.g., only ADMIN can create
  // if (session.user.role !== "ADMIN") {
  //   return NextResponse.json(
  //     { success: false, message: "غير مصرح به. يتطلب دور المسؤول." },
  //     { status: 403 }
  //   );
  // }

  try {
    const body = await request.json();
    let validatedData;

    try {
      validatedData = await mobileTowerSchema.validate(body, {
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
    } // Check if status header is set by the middleware
    const statusHeader = getStatusFromHeader(request);
    if (statusHeader === "ACTIVE") {
      validatedData.status = "ACTIVE";
    }

    const newMobileTower = await prisma.mobileTower.create({
      data: validatedData,
    });

    return NextResponse.json(
      {
        success: true,
        message: "تم إنشاء برج الجوال بنجاح",
        data: newMobileTower,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating mobile tower:", error);
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء إنشاء برج الجوال",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
