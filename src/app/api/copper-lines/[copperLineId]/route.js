import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { updateCopperLineSchema } from "@/schemas/copperLine";
import { auth } from "@/app/auth";
import { getStatusFromHeader } from "@/lib/middleware-utils";

// GET a single CopperLine by ID
export async function GET(request, { params }) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json(
      { success: false, message: "غير مصرح به" },
      { status: 401 }
    );
  }

  const { copperLineId } = await params;

  if (!copperLineId) {
    return NextResponse.json(
      { success: false, message: "معرف خط النحاس مطلوب" },
      { status: 400 }
    );
  }

  try {
    const copperLine = await prisma.copperLine.findUnique({
      where: { id: copperLineId },
    });

    if (!copperLine) {
      return NextResponse.json(
        { success: false, message: "خط النحاس غير موجود" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: copperLine },
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error fetching copper line ${copperLineId}:`, error);
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء استرجاع بيانات خط النحاس",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// PUT (Update) a CopperLine by ID
export async function PUT(request, { params }) {
  const session = await auth();

  if (!session || !session.user || session.user.role !== "ADMIN") {
    // Assuming only ADMIN can update, adjust if MANAGER also has rights
    return NextResponse.json(
      { success: false, message: "غير مصرح به. يتطلب دور المسؤول." },
      { status: 403 }
    );
  }

  const { copperLineId } = await params;

  if (!copperLineId) {
    return NextResponse.json(
      { success: false, message: "معرف خط النحاس مطلوب" },
      { status: 400 }
    );
  }

  try {
    const body = await request.json();
    let validatedData;

    try {
      validatedData = await updateCopperLineSchema.validate(body, {
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
          errors,
        },
        { status: 400 }
      );
    } // Check if status header is set by the middleware
    const statusHeader = getStatusFromHeader(request);
    if (statusHeader === "ACTIVE") {
      validatedData.status = "ACTIVE";
    }

    const updatedCopperLine = await prisma.copperLine.update({
      where: { id: copperLineId },
      data: validatedData,
    });

    return NextResponse.json(
      {
        success: true,
        message: "تم تحديث خط النحاس بنجاح",
        data: updatedCopperLine,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error updating copper line ${copperLineId}:`, error);
    if (error.code === "P2025") {
      // Prisma error code for record not found
      return NextResponse.json(
        { success: false, message: "خط النحاس غير موجود" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء تحديث بيانات خط النحاس",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// DELETE a CopperLine by ID
export async function DELETE(request, { params }) {
  const session = await auth();

  if (!session || !session.user || session.user.role !== "ADMIN") {
    // Assuming only ADMIN can delete, adjust if MANAGER also has rights
    return NextResponse.json(
      { success: false, message: "غير مصرح به. يتطلب دور المسؤول." },
      { status: 403 }
    );
  }

  const { copperLineId } = await params;

  if (!copperLineId) {
    return NextResponse.json(
      { success: false, message: "معرف خط النحاس مطلوب" },
      { status: 400 }
    );
  }

  try {
    await prisma.copperLine.delete({
      where: { id: copperLineId },
    });

    return NextResponse.json(
      { success: true, message: "تم حذف خط النحاس بنجاح" },
      { status: 200 } // Or 204 No Content
    );
  } catch (error) {
    console.error(`Error deleting copper line ${copperLineId}:`, error);
    if (error.code === "P2025") {
      // Prisma error code for record not found
      return NextResponse.json(
        { success: false, message: "خط النحاس غير موجود" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء حذف خط النحاس",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
