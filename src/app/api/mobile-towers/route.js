import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@/app/auth";
import { mobileTowerSchema } from "@/schemas/mobileTower";
import { applyMiddlewareHeaders } from "@/lib/middleware-utils";

// GET all MobileTowers
// api/mobile-towers
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query").trim();

    // Build where clause based on search query
    const where = { status: "ACTIVE" };

    // If query parameter exists, add search conditions
    if (query) {
      where.OR = [
        { central: { contains: query, mode: "insensitive" } },
        { tower_code: { contains: query, mode: "insensitive" } },
        { company: { contains: query, mode: "insensitive" } },
        { address: { contains: query, mode: "insensitive" } },
        { notes: { contains: query, mode: "insensitive" } },
      ];
    }

    const mobileTowers = await prisma.mobileTower.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(
      {
        success: true,
        data: mobileTowers,
      },
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
    validatedData = applyMiddlewareHeaders(validatedData, request);

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
