import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@/app/auth";
import { secondaryCabinetSchema } from "@/schemas/secondaryCabinet";
import { applyMiddlewareHeaders } from "@/lib/middleware-utils";

// GET all SecondaryCabinets
// api/secondary-cabinets
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");

    // Build where clause based on search query
    const where = { status: "ACTIVE" };

    // If query parameter exists, add search conditions
    if (query) {
      where.OR = [
        { central: { contains: query, mode: "insensitive" } },
        { village: { contains: query, mode: "insensitive" } },
        { cabinet: { contains: query, mode: "insensitive" } },
        { port_gbon: { contains: query, mode: "insensitive" } },
        { box_number: { contains: query, mode: "insensitive" } },
        { notes: { contains: query, mode: "insensitive" } },
      ];
    }

    const secondaryCabinets = await prisma.secondaryCabinet.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(
      {
        success: true,
        data: secondaryCabinets,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching secondary cabinets:", error);
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء استرجاع بيانات الكبائن الثانوية",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// POST a new SecondaryCabinet
export async function POST(request) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json(
      { success: false, message: "غير مصرح به" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    let validatedData;


    try {
      validatedData = await secondaryCabinetSchema.validate(body, {
        abortEarly: false,
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

    const newSecondaryCabinet = await prisma.secondaryCabinet.create({
      data: validatedData,
    });

    return NextResponse.json(
      {
        success: true,
        message: "تم إنشاء الكبينة الثانوية بنجاح",
        data: newSecondaryCabinet,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating secondary cabinet:", error);
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء إنشاء الكبينة الثانوية",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
