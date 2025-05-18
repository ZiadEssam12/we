import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const data = await prisma.secondaryCabinet.findMany({
      where: {
        status: {
          in: ["PENDING_ADD", "PENDING_UPDATE"],
        },
      },
      select: {
        id: true,
        cabinet: true,
        cabinet_location: true,
        status: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching secondary cabinet requests:", error);
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
