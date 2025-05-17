import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  // Auth is handled by the middleware

  //   PENDING_ADD
  // PENDING_UPDATE
  const query = {
    status: {
      in: ["PENDING_ADD", "PENDING_UPDATE"],
    },
  };

  try {
    const majorCabinets = await prisma.majorCabinet.count({
      where: query,
    });

    const secondaryCabinets = await prisma.secondaryCabinet.count({
      where: query,
    });
    const mobileTowers = await prisma.mobileTower.count({
      where: query,
    });

    const copperLines = await prisma.copperLine.count({
      where: query,
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          majorCabinets,
          secondaryCabinets,
          mobileTowers,
          copperLines,
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
