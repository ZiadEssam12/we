import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/tours/categories/[slug] - get tours by category slug
export async function GET(request, { params }) {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          error: "Tour slug is required",
        },
        { status: 400 }
      );
    }

    let tours;
    const includeRelations = {
      categories: {
        include: {
          category: true,
        },
      },
      destinations: {
        include: {
          destination: true,
        },
      },
    };

    // If ID is not numeric, treat it as a slug
    tours = await prisma.tour.findMany({
      where: {
        categories: {
          some: {
            category: {
              slug: {
                contains: slug,
                mode: "insensitive", // This makes it case insensitive
              },
            },
          },
        },
      },
      include: includeRelations,
    });

    // Return 404 if tour not found
    if (!tours) {
      return NextResponse.json(
        {
          success: false,
          error: "Tours not found",
        },
        { status: 404 }
      );
    }

    // Format the response to match your frontend expectations
    const formattedTours = tours.map((tour) => ({
      ...tour,
      categories: tour.categories.map((tc) => tc.category),
      destinations: tour.destinations.map((td) => td.destination),
    }));

    return NextResponse.json(formattedTours, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
