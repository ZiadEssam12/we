// export async function GET(request) {

import { auth } from "@/app/auth";
import prisma from "@/lib/prisma";
import { registerNewUserSchema } from "@/schemas/registerNewUser";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

// get all users
export const GET = auth(async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    // Build where clause based on search query
    const where = {
      id: {
        not: session.user.id,
      },
    };

    // If query parameter exists, add search conditions
    if (query) {
      where.OR = [
        { userName: { contains: query, mode: "insensitive" } },
        { name: { contains: query, mode: "insensitive" } },
        { phoneNumber: { contains: query, mode: "insensitive" } },
      ];
    }

    const users = await prisma.user.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        userName: true,
        name: true,
        phoneNumber: true,
        role: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: users,
        message: "تم استرجاع المستخدمين بنجاح",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء استرجاع المستخدمين",
        error: error.message,
      },
      { status: 500 }
    );
  }
});

// Create a new user
export const POST = auth(async function POST(request) {
  try {
    const body = await request.json();
    const checkSchema = await registerNewUserSchema.isValid(body);
    if (!checkSchema) {
      return NextResponse.json(
        {
          success: false,
          message: "البيانات المدخلة غير صحيحة",
        },
        { status: 400 }
      );
    }
    //   check if user exists
    const userExists = await prisma.user.findUnique({
      where: {
        userName: body.userName,
      },
    });
    if (userExists) {
      return NextResponse.json(
        {
          success: false,
          message: "هذا المستخدم موجود بالفعل",
        },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    // Create a new user
    const user = await prisma.user.create({
      data: {
        userName: body.userName,
        name: body.name,
        password: hashedPassword,
        phoneNumber: body.phoneNumber,
        role: body.role,
      },
    });

    const safeUser = {
      id: user.id,
      userName: user.userName,
      name: user.name,
      phoneNumber: user.phoneNumber,
      role: user.role,
    };

    return NextResponse.json(
      {
        success: true,
        message: "تم إنشاء المستخدم بنجاح",
        user: safeUser,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء إنشاء المستخدم",
        error: error.message,
      },
      { status: 500 }
    );
  }
});
