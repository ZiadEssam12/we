import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@/app/auth";
import { secondaryCabinetSchema } from "@/schemas/secondaryCabinet";
import { applyMiddlewareHeaders } from "@/lib/middleware-utils";

// GET all SecondaryCabinets
// api/secondary-cabinets
export async function GET(request) {
  try {
    const secondaryCabinets = await prisma.secondaryCabinet.findMany({
      where: {
        status: "ACTIVE",
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(
      { success: true, data: secondaryCabinets },
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

    console.log("Request body:", body);

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
