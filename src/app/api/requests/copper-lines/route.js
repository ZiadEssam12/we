import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const data = await prisma.copperLine.findMany({
      where: {
        status: {
          in: ["PENDING_ADD", "PENDING_UPDATE"],
        },
      },
      select: {
        id: true,
        landline_number: true,
        cabinet_number: true,
        port_number: true,
        status: true,
        createdAt: true,
        // Add any other fields needed for list view
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
    console.error("Error fetching copper line requests:", error);
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
