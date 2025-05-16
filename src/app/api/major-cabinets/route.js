import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@/app/auth";
import { majorCabinetSchema } from "@/schemas/majorCabinet"; // Ensure this import is present
import {
  getStatusFromHeader,
  applyMiddlewareHeaders,
} from "@/lib/middleware-utils";

// GET all MajorCabinets

// api/major-cabinets
export async function GET(request) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json(
      { success: false, message: "غير مصرح به" },
      { status: 401 }
    );
  }

  try {
    const majorCabinets = await prisma.majorCabinet.findMany({
      where: {
        status: "ACTIVE",
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(
      { success: true, data: majorCabinets },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching major cabinets:", error);
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء استرجاع بيانات الكبائن الرئيسية",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// POST a new MajorCabinet
export async function POST(request) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json(
      { success: false, message: "غير مصرح به" },
      { status: 401 }
    );
  }

  try {
    const cabinetData = await request.json();

    console.log("cabinetData", cabinetData);

    let validatedData;

    // Validate the request body against the schema
    try {
      // stripUnknown: true will remove any properties not defined in the schema
      // Yup's .number().integer() should coerce the string to an integer if valid
      validatedData = await majorCabinetSchema.validate(cabinetData, {
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
    } // Apply middleware headers
    validatedData = applyMiddlewareHeaders(validatedData, request);

    const newMajorCabinet = await prisma.majorCabinet.create({
      data: validatedData, // Use the validated and typed data directly
    });

    return NextResponse.json(
      {
        success: true,
        message: "تم إنشاء الكبينة الرئيسية بنجاح",
        data: newMajorCabinet,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating major cabinet:", error);
    // This catch block will handle other errors, like Prisma errors
    // or issues not caught by the Yup validation's try-catch.
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء إنشاء الكبينة الرئيسية",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
