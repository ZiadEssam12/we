import { auth } from "@/app/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  // Auth is handled by the middleware

  try {
    const NumberOfMajorCabinets = await prisma.majorCabinet.count({
      where: {
        status: "PENDING",
      },
    });

    const NumberOfSecondaryCabinets = await prisma.secondaryCabinet.count({
      where: {
        status: "PENDING",
      },
    });

    const NumberOfMobileTowers = await prisma.mobileTower.count({
      where: {
        status: "PENDING",
      },
    });

    const NumberOfRequests = await prisma.copperLine.count({
      where: {
        status: "PENDING",
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          NumberOfMajorCabinets,
          NumberOfSecondaryCabinets,
          NumberOfMobileTowers,
          NumberOfRequests,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching requests:", error);
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء استرجاع بيانات الطلبات",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
