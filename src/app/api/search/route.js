import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { auth } from "@/app/auth";

/**
 * Unified search endpoint for all entity types
 * Supports searching across users, major cabinets, secondary cabinets, copper lines, and mobile towers
 *
 * Query parameters:
 * - table: The entity type to search (users, majorCabinet, secondaryCabinet, copperLine, mobileTower)
 * - query: The search term
 * - fields: Optional comma-separated list of fields to search in
 *
 * Example: /api/search?table=majorCabinet&query=village1&fields=village,central
 */
export const GET = auth(async function GET(request) {
  try {
    const session = request.auth;
    const { searchParams } = new URL(request.url);

    // Check if the user is authenticated
    if (!session || !session.user) {
      return NextResponse.json(
        { success: false, message: "غير مصرح به" },
        { status: 401 }
      );
    } // Get query parameters
    const table = searchParams.get("table");
    const query = searchParams.get("query") || "";
    const fieldsParam = searchParams.get("fields");

    // Validate required parameters
    if (!table) {
      return NextResponse.json(
        { success: false, message: "حقل 'table' مطلوب" },
        { status: 400 }
      );
    }

    // Define allowed tables and their searchable fields
    const tableConfig = {
      users: ["userName", "name", "phoneNumber"],
      majorCabinet: ["central", "village", "cabinet", "notes"],
      secondaryCabinet: [
        "central",
        "village",
        "cabinet",
        "port_gbon",
        "box_number",
        "notes",
      ],
      copperLine: [
        "landline_number",
        "central",
        "village",
        "cabinet_number",
        "box_number",
        "notes",
      ],
      mobileTower: ["central", "tower_code", "company", "address", "notes"],
    };

    // Check if the requested table is valid
    if (!Object.keys(tableConfig).includes(table)) {
      return NextResponse.json(
        { success: false, message: "نوع الجدول غير صالح" },
        { status: 400 }
      );
    }

    // Determine which fields to search in
    let searchFields = tableConfig[table];
    if (fieldsParam) {
      const requestedFields = fieldsParam.split(",");
      // Only use fields that are both requested and allowed
      searchFields = searchFields.filter((field) =>
        requestedFields.includes(field)
      );

      // If no valid fields are specified, use all allowed fields
      if (searchFields.length === 0) {
        searchFields = tableConfig[table];
      }
    }

    // Build search query
    const searchQuery = {
      OR: searchFields.map((field) => ({
        [field]: {
          contains: query,
          mode: "insensitive", // Case-insensitive search
        },
      })),
    };

    // Add status filter for all tables except users
    const whereClause =
      table === "users"
        ? searchQuery
        : {
            AND: [searchQuery, { status: "ACTIVE" }],
          }; // Execute the query
    const results = await prisma[table].findMany({
      where: whereClause,
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: results,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      `Error searching ${searchParams?.get("table") || "entities"}:`,
      error
    );
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء البحث",
        error: error.message,
      },
      { status: 500 }
    );
  }
});
