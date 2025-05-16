import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { updateMobileTowerSchema } from "@/schemas/mobileTower";
import { auth } from "@/app/auth";
import { getStatusFromHeader } from "@/lib/middleware-utils";

// GET a single MobileTower by ID
export async function GET(request, { params }) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json(
      { success: false, message: "غير مصرح به" },
      { status: 401 }
    );
  }

  const { mobileTowerId } = await params;

  if (!mobileTowerId) {
    return NextResponse.json(
      { success: false, message: "معرف برج الجوال مطلوب" },
      { status: 400 }
    );
  }

  try {
    const mobileTower = await prisma.mobileTower.findUnique({
      where: { id: mobileTowerId },
    });

    if (!mobileTower) {
      return NextResponse.json(
        { success: false, message: "برج الجوال غير موجود" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: mobileTower },
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error fetching mobile tower ${mobileTowerId}:`, error);
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء استرجاع بيانات برج الجوال",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// PUT (Update) a MobileTower by ID
export async function PUT(request, { params }) {
  const session = await auth();

  if (!session || !session.user || session.user.role !== "ADMIN") {
    return NextResponse.json(
      { success: false, message: "غير مصرح به. يتطلب دور المسؤول." },
      { status: 403 }
    );
  }

  const { mobileTowerId } = await params;

  if (!mobileTowerId) {
    return NextResponse.json(
      { success: false, message: "معرف برج الجوال مطلوب" },
      { status: 400 }
    );
  }

  try {
    const body = await request.json();
    let validatedData;

    try {
      validatedData = await updateMobileTowerSchema.validate(body, {
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

    const updatedMobileTower = await prisma.mobileTower.update({
      where: { id: mobileTowerId },
      data: validatedData,
    });

    return NextResponse.json(
      {
        success: true,
        message: "تم تحديث برج الجوال بنجاح",
        data: updatedMobileTower,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error updating mobile tower ${mobileTowerId}:`, error);
    if (error.code === "P2025") {
      // Prisma error code for record not found
      return NextResponse.json(
        { success: false, message: "برج الجوال غير موجود" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء تحديث بيانات برج الجوال",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// DELETE a MobileTower by ID
export async function DELETE(request, { params }) {
  const session = await auth();

  if (!session || !session.user || session.user.role !== "ADMIN") {
    return NextResponse.json(
      { success: false, message: "غير مصرح به. يتطلب دور المسؤول." },
      { status: 403 }
    );
  }

  const { mobileTowerId } = await params;

  if (!mobileTowerId) {
    return NextResponse.json(
      { success: false, message: "معرف برج الجوال مطلوب" },
      { status: 400 }
    );
  }

  try {
    await prisma.mobileTower.delete({
      where: { id: mobileTowerId },
    });

    return NextResponse.json(
      { success: true, message: "تم حذف برج الجوال بنجاح" },
      { status: 200 } // Or 204 No Content
    );
  } catch (error) {
    console.error(`Error deleting mobile tower ${mobileTowerId}:`, error);
    if (error.code === "P2025") {
      // Prisma error code for record not found
      return NextResponse.json(
        { success: false, message: "برج الجوال غير موجود" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء حذف برج الجوال",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
