import { auth } from "@/app/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = auth(async function GET(req) {
  // Get the user session
  const session = req.auth;

  // Check if the user is authenticated
  if (!session || !session.user) {
    return NextResponse.json(
      { error: "Authentication required" },
      { status: 401 }
    );
  }

  try {
    // Get the user's favorites
    const favorites = await prisma.favorite.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        tour: {
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
        },
      },
    });

    return NextResponse.json({ favorites }, { status: 200 });
  } catch (error) {
    console.error("Error fetching favorites:", error);
    return NextResponse.json(
      { error: "Failed to fetch favorites" },
      { status: 500 }
    );
  }
});

export const POST = auth(async function POST(request) {
  // Get the user session
  const session = request.auth;

  // Check if the user is authenticated
  if (!session || !session.user) {
    return NextResponse.json(
      { error: "Authentication required" },
      { status: 401 }
    );
  }

  try {
    const { tourId } = await request.json();

    if (!tourId || isNaN(tourId)) {
      return NextResponse.json(
        { message: "Tour ID is required" },
        { status: 400 }
      );
    }

    const existingFavorite = await prisma.favorite.findUnique({
      where: {
        userId_tourId: {
          userId: session.user.id,
          tourId: parseInt(tourId),
        },
      },
    });

    if (existingFavorite) {
      console.log("Tour is already in favorites");
      // Return a 409 Conflict status if the favorite already exists
      return NextResponse.json(
        { message: "Tour is already in favorites" },
        { status: 409 }
      );
    }

    // Create a new favorite - Use lowercase 'favorite' to match your schema
    const favorite = await prisma.favorite.create({
      data: {
        userId: session.user.id,
        tourId: parseInt(tourId),
      },
    });

    return NextResponse.json({ favorite }, { status: 201 });
  } catch (error) {
    console.error("Error adding favorite:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
});
