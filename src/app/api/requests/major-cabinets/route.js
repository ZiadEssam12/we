import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const pendingRequests = await prisma.majorCabinet.findMany({
      where: {
        status: {
          in: ["PENDING_ADD", "PENDING_UPDATE"],
        },
      },
      select: {
        id: true,
        central: true,
        village: true,
        cabinet: true,
        status: true,
        createdAt: true,
        // Add other fields you need for the list view
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      { success: true, data: pendingRequests },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching major cabinet requests:", error);
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
