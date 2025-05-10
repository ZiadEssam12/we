import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { place } = await params;

  const formattedPlace = place.replace(/-/g, " ");

  // Get pagination parameters from URL query params
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const limit = parseInt(url.searchParams.get("limit") || "10");

  // Calculate skip value for pagination
  const skip = (page - 1) * limit;

  try {
    // Query to get paginated data
    const data = await prisma.tour.findMany({
      skip,
      take: limit,
      where: {
        destinations: {
          some: {
            destination: {
              title: {
                contains: formattedPlace,
                mode: "insensitive",
              },
            },
          },
        },
      },
      select: {
        id: true,
        title: true,
        slug: true,
        overview_text: true,
        start_from: true,
        gallery: true,
      },
    });

    // Query to get total count for pagination
    const totalCount = await prisma.tour.count({
      where: {
        destinations: {
          some: {
            destination: {
              title: {
                contains: formattedPlace,
                mode: "insensitive",
              },
            },
          },
        },
      },
    });

    return NextResponse.json(
      {
        success: true,
        data,
        pagination: {
          total: totalCount,
          page,
          limit,
          pages: Math.ceil(totalCount / limit),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching tours:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error fetching tours",
      },
      { status: 500 }
    );
  }
}
