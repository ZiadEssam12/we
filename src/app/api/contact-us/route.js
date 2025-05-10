import { ContactUsValidationSchema } from "@/components/UI/Forms/ContactUsForm/schema";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// route > > POST /api/contact-us/
export async function POST(req) {
  try {
    const body = await req.json();

    // Validate request body
    try {
      await ContactUsValidationSchema.validate(body);
    } catch (error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }

    // Map form field names to database field names
    const mappedData = {
      firstName: body.contact_fname,
      lastName: body.contact_lname,
      email: body.contact_email,
      phoneNumber: body.contact_phone,
      message: body.contact_message,
      // status will default to "PENDING" as defined in your schema
    };

    // Check for existing messages with same email or phone
    const userOldMessages = await prisma.contactUs.findFirst({
      where: {
        OR: [
          { email: mappedData.email },
          { phoneNumber: mappedData.phoneNumber },
        ],
      },
      orderBy: {
        created_at: "desc", // Gets the latest message first
      },
    });

    // Add null check before checking status
    if (userOldMessages && userOldMessages.status === "PENDING") {
      return NextResponse.json(
        {
          success: false,
          message: "Your message is already in the queue",
        },
        { status: 400 }
      );
    }

    if (userOldMessages && userOldMessages.status === "IN_PROGRESS") {
      return NextResponse.json(
        {
          success: false,
          message: "Your message is already in progress",
        },
        { status: 400 }
      );
    }

    // Create new message
    try {
      const data = await prisma.contactUs.create({
        data: mappedData,
      });

      return NextResponse.json(
        {
          success: true,
          message: "Message created successfully",
        },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error in contact us route:", error);
    return NextResponse.json(
      { success: false, message: "Error processing request" },
      { status: 500 }
    );
  }
}
