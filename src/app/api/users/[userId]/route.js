import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  try {
    const { userId } = params;
    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: "معرف المستخدم مطلوب",
        },
        { status: 400 }
      );
    }

    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "المستخدم غير موجود",
        },
        { status: 404 }
      );
    }

    // Manually delete related sessions first
    await prisma.session.deleteMany({
      where: { userId },
    });

    // Then delete related accounts
    await prisma.account.deleteMany({
      where: { userId },
    });

    // Finally delete the user
    await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "تم حذف المستخدم بنجاح",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء حذف المستخدم",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
