import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { updateSecondaryCabinetSchema } from "@/schemas/secondaryCabinet";
import { auth } from "@/app/auth";
import { applyMiddlewareHeaders } from "@/lib/middleware-utils";

// GET a single SecondaryCabinet by ID
export async function GET(request, { params }) {
  const { secondaryCabinetId } = await params;

  if (!secondaryCabinetId) {
    return NextResponse.json(
      { success: false, message: "معرف الكبينة الثانوية مطلوب" },
      { status: 400 }
    );
  }

  try {
    const secondaryCabinet = await prisma.secondaryCabinet.findUnique({
      where: { id: secondaryCabinetId },
    });

    if (!secondaryCabinet) {
      return NextResponse.json(
        { success: false, message: "الكبينة الثانوية غير موجودة" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: secondaryCabinet },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      `Error fetching secondary cabinet ${secondaryCabinetId}:`,
      error
    );
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء استرجاع بيانات الكبينة الثانوية",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// PUT (Update) a SecondaryCabinet by ID
export async function PUT(request, { params }) {
  const { secondaryCabinetId } = await params;

  if (!secondaryCabinetId) {
    return NextResponse.json(
      { success: false, message: "معرف الكبينة الثانوية مطلوب" },
      { status: 400 }
    );
  }

  try {
    const body = await request.json();
    let validatedData;

    try {
      validatedData = await updateSecondaryCabinetSchema.validate(body, {
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

    // Check if status header is set by the middleware
    validatedData = applyMiddlewareHeaders(validatedData, request);

    const updatedSecondaryCabinet = await prisma.secondaryCabinet.update({
      where: { id: secondaryCabinetId },
      data: validatedData,
    });

    return NextResponse.json(
      {
        success: true,
        message: "تم تحديث الكبينة الثانوية بنجاح",
        data: updatedSecondaryCabinet,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      `Error updating secondary cabinet ${secondaryCabinetId}:`,
      error
    );
    // Check for specific Prisma error for record not found
    if (error.code === "P2025") {
      return NextResponse.json(
        { success: false, message: "الكبينة الثانوية غير موجودة" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء تحديث بيانات الكبينة الثانوية",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// DELETE a SecondaryCabinet by ID
export async function DELETE(request, { params }) {
  const { secondaryCabinetId } = await params;

  if (!secondaryCabinetId) {
    return NextResponse.json(
      { success: false, message: "معرف الكبينة الثانوية مطلوب" },
      { status: 400 }
    );
  }

  try {
    await prisma.secondaryCabinet.delete({
      where: { id: secondaryCabinetId },
    });

    return NextResponse.json(
      { success: true, message: "تم حذف الكبينة الثانوية بنجاح" },
      { status: 200 } // Or 204 No Content
    );
  } catch (error) {
    console.error(
      `Error deleting secondary cabinet ${secondaryCabinetId}:`,
      error
    );
    // Check for specific Prisma error for record not found
    if (error.code === "P2025") {
      return NextResponse.json(
        { success: false, message: "الكبينة الثانوية غير موجودة" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء حذف الكبينة الثانوية",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
