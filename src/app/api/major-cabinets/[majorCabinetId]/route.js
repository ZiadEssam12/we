import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { updateMajorCabinetSchema } from "@/schemas/majorCabinet"; // Import the schema
import { auth } from "@/app/auth";
import {
  applyMiddlewareHeaders,
  getStatusFromHeader,
} from "@/lib/middleware-utils";

// GET a single MajorCabinet by ID
export async function GET(request, { params }) {

  const { majorCabinetId } = await params;

  if (!majorCabinetId) {
    return NextResponse.json(
      { success: false, message: "معرف الكبينة الرئيسية مطلوب" },
      { status: 400 }
    );
  }

  try {
    const majorCabinet = await prisma.majorCabinet.findUnique({
      where: { id: majorCabinetId },
    });

    if (!majorCabinet) {
      return NextResponse.json(
        { success: false, message: "الكبينة الرئيسية غير موجودة" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: majorCabinet },
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error fetching major cabinet ${majorCabinetId}:`, error);
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء استرجاع بيانات الكبينة الرئيسية",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// PUT (Update) a MajorCabinet by ID
export async function PUT(request, { params }) {
  const { majorCabinetId } = await params;

  if (!majorCabinetId) {
    return NextResponse.json(
      { success: false, message: "معرف الكبينة الرئيسية مطلوب" },
      { status: 400 }
    );
  }

  try {
    const body = await request.json();
    let validatedData; // Check if status header is set by the middleware
    const statusHeader = getStatusFromHeader(request);
    if (statusHeader === "ACTIVE") {
      body.status = "ACTIVE";
    }

    try {
      validatedData = await updateMajorCabinetSchema.validate(body, {
        abortEarly: false,
        stripUnknown: true, // Ensures only schema-defined fields are in validatedData
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
          errors,
        },
        { status: 400 }
      );
    }

    if (Object.keys(validatedData).length === 0) {
      return NextResponse.json(
        { success: false, message: "لا توجد بيانات لتحديثها" },
        { status: 400 }
      );
    }

    validatedData = applyMiddlewareHeaders(validatedData, request);

    const updatedMajorCabinet = await prisma.majorCabinet.update({
      where: { id: majorCabinetId },
      data: validatedData, // Use the validated and type-coerced data directly
    });

    return NextResponse.json(
      {
        success: true,
        message: "تم تحديث الكبينة الرئيسية بنجاح",
        data: updatedMajorCabinet,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error updating major cabinet ${majorCabinetId}:`, error);
    if (error.name === "ValidationError") {
      // Should be caught by the try-catch above
      return NextResponse.json(
        {
          success: false,
          message: "خطأ في التحقق من البيانات",
          errors: error.errors,
        },
        { status: 400 }
      );
    }
    if (error.code === "P2025") {
      return NextResponse.json(
        { success: false, message: "الكبينة الرئيسية غير موجودة للتحديث" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء تحديث الكبينة الرئيسية",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// DELETE a MajorCabinet by ID
export async function DELETE(request, { params }) {
  const session = await auth();

  if (!session || !session.user || session.user.role !== "ADMIN") {
    return NextResponse.json(
      { success: false, message: "غير مصرح به. يتطلب دور المسؤول." },
      { status: 403 }
    );
  }

  const { majorCabinetId } = await params;

  console.log("majorCabinetId", await params);

  if (!majorCabinetId) {
    return NextResponse.json(
      { success: false, message: "معرف الكبينة الرئيسية مطلوب" },
      { status: 400 }
    );
  }

  try {
    await prisma.majorCabinet.delete({
      where: { id: majorCabinetId },
    });

    return NextResponse.json(
      { success: true, message: "تم حذف الكبينة الرئيسية بنجاح" },
      { status: 200 } // Or 204 No Content
    );
  } catch (error) {
    console.error(`Error deleting major cabinet ${majorCabinetId}:`, error);
    if (error.code === "P2025") {
      // Prisma error code for record not found
      return NextResponse.json(
        { success: false, message: "الكبينة الرئيسية غير موجودة للحذف" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء حذف الكبينة الرئيسية",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
