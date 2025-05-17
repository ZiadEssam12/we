import { auth } from "@/app/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  // Get the request ID from the route
  const requestId = (await params).majorCabinetId;

  // Check if user is authenticated (handled by middleware)
  try {
    const pendingRequest = await prisma.majorCabinet.findUnique({
      where: {
        id: requestId,
        status: {
          in: ["PENDING_ADD", "PENDING_UPDATE"],
        },
      },
    });

    if (!pendingRequest) {
      return NextResponse.json(
        {
          success: false,
          message: "الطلب غير موجود أو تم معالجته بالفعل",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: pendingRequest,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching request details:", error);
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء استرجاع بيانات الطلب",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// Handle approval request
export async function POST(request, { params }) {
  const requestId = (await params).majorCabinetId;
  const { action, formData } = await request.json();

  try {
    const existingRequest = await prisma.majorCabinet.findUnique({
      where: { id: requestId },
    });

    if (!existingRequest) {
      return NextResponse.json(
        {
          success: false,
          message: "الطلب غير موجود",
        },
        { status: 404 }
      );
    }

    if (action === "approve") {
      // Prepare update data
      const updateData = {
        status: "ACTIVE",
      };

      // If form data is provided, merge it with the update data
      if (formData) {
        // Remove any properties that shouldn't be directly updated
        const { id, createdAt, updatedAt, ...cleanFormData } = formData;

        // Merge the cleaned form data with the update data
        Object.assign(updateData, cleanFormData);
      }

      // Approve the request by changing its status to ACTIVE and updating any form data
      await prisma.majorCabinet.update({
        where: { id: requestId },
        data: updateData,
      });

      return NextResponse.json(
        {
          success: true,
          message: "تمت الموافقة على الطلب بنجاح",
        },
        { status: 200 }
      );
    } else if (action === "reject") {
      // Delete the request
      await prisma.majorCabinet.delete({
        where: { id: requestId },
      });

      return NextResponse.json(
        {
          success: true,
          message: "تم رفض الطلب بنجاح",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "إجراء غير صالح",
      },
      { status: 400 }
    );
  } catch (error) {
    console.error(`Error processing ${action} request:`, error);
    return NextResponse.json(
      {
        success: false,
        message: `حدث خطأ أثناء معالجة الطلب`,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
