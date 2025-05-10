import { auth } from "@/app/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  // Get the user session
  const session = await auth();

  // Check if the user is authenticated
  if (!session || !session.user) {
    return NextResponse.json(
      { error: "Authentication required" },
      { status: 401 }
    );
  }

  // Get tourId from the URL
  const { tourId } = await params;

  if (!tourId) {
    return NextResponse.json({ error: "Tour ID is required" }, { status: 400 });
  }

  try {
    // Delete the favorite
    await prisma.favorite.delete({
      where: {
        userId_tourId: {
          userId: session.user.id,
          tourId: parseInt(tourId),
        },
      },
    });

    return NextResponse.json(
      { success: true, message: "Favorite removed successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error removing favorite:", error);
    return NextResponse.json(
      { success: false, message: "Failed to remove favorite" },
      { status: 500 }
    );
  }
}
