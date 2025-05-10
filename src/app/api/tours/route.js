import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET /api/tours - get all tours with pagination and limit
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    // Pagination parameters
    const page = parseInt(searchParams.get("page") || "1");
    let limit = parseInt(searchParams.get("limit") || "20");

    if (limit > 20) limit = 20;

    const skip = (page - 1) * limit;

    // Optional filters
    const category = searchParams.get("category");
    const destination = searchParams.get("destination");

    // Build filter conditions
    const where = {};

    if (category) {
      where.categories = {
        some: {
          category: {
            slug: category,
          },
        },
      };
    }

    if (destination) {
      where.destinations = {
        some: {
          destination: {
            slug: destination,
          },
        },
      };
    }

    // Get total count for pagination info
    const totalCount = await prisma.tour.count({ where });

    // Get tours with pagination and include relationships
    const tours = await prisma.tour.findMany({
      where,
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
      include: {
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
        pricing_groups: true,
      },
    });

    // Format the response to match your frontend expectations
    const formattedTours = tours.map((tour) => {
      // Convert arrays to strings if they were stored as text
      let formattedTour = {
        ...tour,
        categories: tour.categories.map((tc) => tc.category),
        destinations: tour.destinations.map((td) => td.destination),
      };
      return formattedTour;
    });
    return NextResponse.json(
      {
        success: true,
        data: formattedTours,
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
        error: "Failed to fetch tours",
        
      },
      { status: 500 }
    );
  }
}

// POST /api/tours - create a new tour
export async function POST(request) {
  try {
    // Extract categories and find the IDs of the categories
    // if null create new categories
    const body = await request.json();
    const {
      title,
      slug,
      description,
      categories,
      destinations,
      pricing_groups,
      start_from,
      adult_price,
      child_price,
      infant_price,
      ...restOfTourData // Get all other fields not explicitly destructured
    } = body;

    const categoryIds = await Promise.all(
      categories.map(async ({ title, slug }) => {
        const existingCategory = await prisma.category.findUnique({
          where: { slug: slug },
        });
        if (existingCategory) {
          return existingCategory.id;
        } else {
          const newCategory = await prisma.category.create({
            data: {
              title,
              slug,
            },
          });
          return newCategory.id;
        }
      })
    );

    const destinationIds = await Promise.all(
      destinations.map(async ({ title, slug }) => {
        const existingDestination = await prisma.destination.findUnique({
          where: { slug: slug },
        });
        if (existingDestination) {
          return existingDestination.id;
        } else {
          const newDestination = await prisma.destination.create({
            data: { title, slug },
          });
          return newDestination.id;
        }
      })
    );

    // Create the new tour
    const newTour = await prisma.tour.create({
      data: {
        title,
        slug,
        description,
        start_from,
        adult_price,
        child_price,
        infant_price,
        ...restOfTourData, // Include all other tour fields
        categories: {
          create: categoryIds.map((id) => ({
            category: { connect: { id } },
          })),
        },
        destinations: {
          create: destinationIds.map((id) => ({
            destination: { connect: { id } },
          })),
        },
        pricing_groups: {
          create: pricing_groups.map((group) => ({
            from: group.from,
            to: group.to,
            price: group.price,
            child_price: group.child_price,
          })),
        },
      },
    });

    // Format the response to match your frontend expectations
    const formattedTour = {
      ...newTour,
      categories: newTour.categories
        ? newTour.categories.map((tc) => tc.category)
        : [],
      destinations: newTour.destinations
        ? newTour.destinations.map((td) => td.destination)
        : [],
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
        message: "Tour created successfully",
        data: formattedTour,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to create tour",
      },
      { status: 500 }
    );
  }
}
