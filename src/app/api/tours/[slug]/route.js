import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/tours/[id] - get a single tour by ID or slug
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

    let tour;
    const includeRelations = {
      pricing_groups: true,
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
    tour = await prisma.tour.findUnique({
      where: { slug: slug },
      include: includeRelations,
    });

    // Return 404 if tour not found
    if (!tour) {
      return NextResponse.json(
        {
          success: false,
          error: "Tour not found",
        },
        { status: 404 }
      );
    }

    // Format the response to match your frontend expectations
    const formattedTour = {
      ...tour,
      categories: tour.categories.map((tc) => tc.category),
      destinations: tour.destinations.map((td) => td.destination),
    };

    // Calculate price range for convenience
    formattedTour.price_range = {
      min: formattedTour.start_from,
      adult: formattedTour.adult_price,
      child: formattedTour.child_price,
      infant: formattedTour.infant_price,
    };

    return NextResponse.json(
      {
        success: true,
        data: formattedTour,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching tour:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch tour",
      },
      { status: 500 }
    );
  }
}
