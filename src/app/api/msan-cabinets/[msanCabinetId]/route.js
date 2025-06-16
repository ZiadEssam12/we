import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { updateMsanCabinetSchema } from "@/schemas/msanCabinet";
import { auth } from "@/app/auth";
import {
  applyMiddlewareHeaders,
  getStatusFromHeader,
} from "@/lib/middleware-utils";

// GET a single MsanCabinet by ID
export async function GET(request, { params }) {
  const { msanCabinetId } = await params;

  if (!msanCabinetId) {
    return NextResponse.json(
      { success: false, message: "معرف كابينة MSAN مطلوب" },
      { status: 400 }
    );
  }

  try {
    const msanCabinet = await prisma.msanCabinet.findUnique({
      where: { id: msanCabinetId },
    });

    if (!msanCabinet) {
      return NextResponse.json(
        { success: false, message: "كابينة MSAN غير موجودة" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: msanCabinet },
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error fetching MSAN cabinet ${msanCabinetId}:`, error);
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء استرجاع بيانات كابينة MSAN",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// PUT (Update) a MsanCabinet by ID
export async function PUT(request, { params }) {
  const { msanCabinetId } = await params;

  if (!msanCabinetId) {
    return NextResponse.json(
      { success: false, message: "معرف كابينة MSAN مطلوب" },
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
      validatedData = await updateMsanCabinetSchema.validate(body, {
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

    const updatedMsanCabinet = await prisma.msanCabinet.update({
      where: { id: msanCabinetId },
      data: validatedData, // Use the validated and type-coerced data directly
    });

    return NextResponse.json(
      {
        success: true,
        message: "تم تحديث كابينة MSAN بنجاح",
        data: updatedMsanCabinet,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error updating MSAN cabinet ${msanCabinetId}:`, error);
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
        { success: false, message: "كابينة MSAN غير موجودة للتحديث" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء تحديث كابينة MSAN",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// DELETE a MsanCabinet by ID
export async function DELETE(request, { params }) {
  const session = await auth();
  const { msanCabinetId } = await params;

  if (!msanCabinetId) {
    return NextResponse.json(
      { success: false, message: "معرف كابينة MSAN مطلوب" },
      { status: 400 }
    );
  }

  try {
    await prisma.msanCabinet.delete({
      where: { id: msanCabinetId },
    });

    return NextResponse.json(
      { success: true, message: "تم حذف كابينة MSAN بنجاح" },
      { status: 200 } // Or 204 No Content
    );
  } catch (error) {
    console.error(`Error deleting MSAN cabinet ${msanCabinetId}:`, error);
    if (error.code === "P2025") {
      // Prisma error code for record not found
      return NextResponse.json(
        { success: false, message: "كابينة MSAN غير موجودة للحذف" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء حذف كابينة MSAN",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
