import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@/app/auth";

// Secure the API endpoint with authentication
export const GET = auth(async function GET(req) {
  try {
    const session = req.auth;

    // Check if the user is authenticated
    if (!session || !session.user) {
      return NextResponse.json(
        {
          success: false,
          message: "يجب تسجيل الدخول للوصول إلى هذه الصفحة",
        },
        { status: 401 }
      );
    }

    // Only allow ADMIN users to export CSV data
    if (session?.user?.role !== "ADMIN") {
      return NextResponse.json(
        {
          success: false,
          message: "لا تملك الصلاحيات اللازمة لتصدير البيانات",
        },
        { status: 403 }
      );
    }

    // Get the module parameter from query string
    const { searchParams } = new URL(req.url);
    const table = searchParams.get("module");

    // Validate module parameter
    if (!table) {
      return NextResponse.json(
        {
          success: false,
          message: "يجب تحديد نوع البيانات المراد تصديرها",
        },
        { status: 400 }
      );
    }

    let data = [];

    // Get data based on the specified module
    switch (table) {
      case "major-cabinets":
        data = await prisma.majorCabinet.findMany({
          orderBy: {
            createdAt: "desc",
          },
        });
        break;
      case "secondary-cabinets":
        data = await prisma.secondaryCabinet.findMany({
          orderBy: {
            createdAt: "desc",
          },
        });
        break;
      case "mobile-towers":
        data = await prisma.mobileTower.findMany({
          orderBy: {
            createdAt: "desc",
          },
        });
        break;
      case "copper-lines":
        data = await prisma.copperLine.findMany({
          orderBy: {
            createdAt: "desc",
          },
        });
        break;
      case "msan-cabinets":
        data = await prisma.msanCabinet.findMany({
          orderBy: {
            createdAt: "desc",
          },
        });
        break;
      case "users":
        // For users, only return necessary fields (exclude passwords)
        data = await prisma.user.findMany({
          select: {
            id: true,
            userName: true,
            name: true,
            role: true,
            createdAt: true,
            updatedAt: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        });
        break;
      default:
        return NextResponse.json(
          {
            success: false,
            message: "نوع البيانات غير صالح",
          },
          { status: 400 }
        );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Error exporting CSV data:", error);
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء تصدير البيانات",
        error: error.message,
      },
      { status: 500 }
    );
  }
});
