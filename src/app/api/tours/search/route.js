import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/tours/search/q={} - search tours by name or description
export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const searchQuery = searchParams.get("q");

  try {
    const tours = await prisma.tour.findMany({
      take: 5,
      where: {
        OR: [
          { title: { contains: searchQuery, mode: "insensitive" } },
          { overview_text: { contains: searchQuery, mode: "insensitive" } },
        ],
      },
      select: {
        title: true,
        slug: true,
      },
    });

    // Format the response to match your frontend expectations
    const formattedTours = tours.map((tour) => ({
      ...tour,
    }));

    return NextResponse.json({ success: true, data: formattedTours });
  } catch (error) {
    console.error("Error searching tours:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An error occurred while searching for tours",
      },
      { status: 500 }
    );
  }
}
