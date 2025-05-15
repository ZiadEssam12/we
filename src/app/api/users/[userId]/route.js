import { auth } from "@/app/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const DELETE = auth(async function DELETE(request, { params }) {
  try {
    const session = request.auth;

    // Check if the user is authenticated and has admin role
    if (!session || !session.user) {
      return NextResponse.json(
        {
          success: false,
          message: "يجب تسجيل الدخول للوصول إلى هذه الصفحة",
        },
        { status: 401 }
      );
    }

    // Check if the user has the required role
    if (session?.user?.role !== "ADMIN") {
      return NextResponse.json(
        {
          success: false,
          message: "ليس لديك صلاحيات للقيام بهذا الإجراء",
        },
        { status: 403 }
      );
    }

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
});

export const PUT = auth(async function PUT(request, { params }) {
  try {
    const session = request.auth;

    if (!session || !session.user) {
      return NextResponse.json(
        {
          success: false,
          message: "غير مصرح به",
        },
        { status: 401 }
      );
    }

    // Check if the user has the required role
    if (session?.user?.role !== "ADMIN") {
      return NextResponse.json(
        {
          success: false,
          message: "ليس لديك صلاحيات للقيام بهذا الإجراء",
        },
        { status: 403 }
      );
    }

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

    const body = await request.json();
    const { name, userName, phoneNumber, role } = body;

    // Ensure password is not updated through this route
    if (body.password || body.confirmPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "لا يمكن تحديث كلمة المرور من خلال هذا المسار",
        },
        { status: 400 }
      );
    }

    const updateData = {};
    if (name) updateData.name = name;
    if (userName) updateData.userName = userName;
    if (phoneNumber) updateData.phoneNumber = phoneNumber;

    // Only allow admin to update role
    if (role && session.user.role === "ADMIN") {
      updateData.role = role;
    }

    console.log("Searching for user with ID:", userId);
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    console.log("existingUser :> ", existingUser);

    if (!existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "المستخدم غير موجود",
        },
        { status: 404 }
      );
    }

    // Prevent updating userName to an existing userName (if it's being changed)
    if (userName && userName !== existingUser.userName) {
      const userWithSameUserName = await prisma.user.findUnique({
        where: { userName },
      });
      if (userWithSameUserName) {
        return NextResponse.json(
          {
            success: false,
            message: "اسم المستخدم هذا موجود مسبقًا",
          },
          { status: 409 } // Conflict
        );
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        name: true,
        userName: true,
        phoneNumber: true,
        role: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "تم تحديث بيانات المستخدم بنجاح",
        user: updatedUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء تحديث بيانات المستخدم",
        error: error.message,
      },
      { status: 500 }
    );
  }
});
