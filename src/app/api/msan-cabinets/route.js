import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@/app/auth";
import { msanCabinetSchema } from "@/schemas/msanCabinet";
import {
  getStatusFromHeader,
  applyMiddlewareHeaders,
} from "@/lib/middleware-utils";

// GET all MsanCabinets

// api/msan-cabinets
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    // get the query and trim it to remove any leading or trailing spaces
    const query = searchParams.get("query")?.trim();

    // Build where clause based on search query
    const where = { status: "ACTIVE" };

    // If query parameter exists, add search conditions
    if (query) {
      where.OR = [
        { cabinet_name: { contains: query, mode: "insensitive" } },
        { cable_number: { contains: query, mode: "insensitive" } },
        { odf_name: { contains: query, mode: "insensitive" } },
        { responsible: { contains: query, mode: "insensitive" } },
        { notes: { contains: query, mode: "insensitive" } },
      ];
    }

    const msanCabinets = await prisma.msanCabinet.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(
      {
        success: true,
        data: msanCabinets,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching MSAN cabinets:", error);
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء استرجاع بيانات كابينات MSAN",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// POST a new MsanCabinet
export async function POST(request) {
  const session = await auth();
  try {
    const cabinetData = await request.json();

    let validatedData;

    // Validate the request body against the schema
    try {
      // stripUnknown: true will remove any properties not defined in the schema
      validatedData = await msanCabinetSchema.validate(cabinetData, {
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

    const newMsanCabinet = await prisma.msanCabinet.create({
      data: validatedData, // Use the validated and typed data directly
    });

    return NextResponse.json(
      {
        success: true,
        message: "تم إنشاء كابينة MSAN بنجاح",
        data: newMsanCabinet,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating MSAN cabinet:", error);
    // This catch block will handle other errors, like Prisma errors
    // or issues not caught by the Yup validation's try-catch.
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء إنشاء كابينة MSAN",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
