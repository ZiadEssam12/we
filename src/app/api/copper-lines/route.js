import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { copperLineSchema } from "@/schemas/copperLine";
import { applyMiddlewareHeaders } from "@/lib/middleware-utils";

// GET all CopperLines
// api/copper-lines
export async function GET(request) {
  try {
    const copperLines = await prisma.copperLine.findMany({
      where: {
        status: "ACTIVE",
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(
      { success: true, data: copperLines },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching copper lines:", error);
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء استرجاع بيانات خطوط النحاس",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// POST a new CopperLine
export async function POST(request) {
  try {
    const body = await request.json();
    let validatedData;

    try {
      validatedData = await copperLineSchema.validate(body, {
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

    validatedData = applyMiddlewareHeaders(validatedData, request);

    const newCopperLine = await prisma.copperLine.create({
      data: validatedData,
    });

    return NextResponse.json(
      {
        success: true,
        message: "تم إنشاء خط النحاس بنجاح",
        data: newCopperLine,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating copper line:", error);
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء إنشاء خط النحاس",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
