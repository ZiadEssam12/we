import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/tours/featured - get a small set of tours with minimal data
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    let limit = parseInt(searchParams.get("limit") || "10");
    if (limit > 20) limit = 20; // Limit to a maximum of 20

    const featuredTours = await prisma.tour.findMany({
      take: limit,
      orderBy: {
        rate: "desc", // Order by rating to get the best tours
      },
      include: {
        destinations: {
          include: {
            destination: {
              select: {
                title: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      data: featuredTours,
    });
  } catch (error) {
    console.error("Error fetching featured tours:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch featured tours" },
      { status: 500 }
    );
  }
}
