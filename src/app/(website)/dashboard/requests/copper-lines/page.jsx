import React from "react";
import ServerRequestPageFinal from "@/components/UI/CutomRequestPAge/ServerRequestPageFinal";
import CopperLineForm from "@/app/(website)/dashboard/copper-lines/CopperLineForm";
import prisma from "@/lib/prisma";

// This is a server component
export default async function CopperLinesRequestsPage() {
  // Define server-side fetch function - uses database directly
  const fetchCopperLineRequests = async () => {
    "use server";
    try {
      return await prisma.copperLine.findMany({
        where: {
          status: {
            in: ["PENDING_ADD", "PENDING_UPDATE"],
          },
        },
        select: {
          id: true,
          lineNumber: true,
          customer: true,
          location: true,
          status: true,
          createdAt: true,
          // Add any other fields needed for list view
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } catch (error) {
      console.error("Error fetching copper line requests:", error);
      return [];
    }
  };

  return (
    <ServerRequestPageFinal
      entityType="copper-lines"
      title="طلبات الإضافة والتعديل المعلقة لخطوط النحاس"
      backLinkUrl="/dashboard/requests"
      backLinkText="العودة للطلبات"
      fetchFn={fetchCopperLineRequests}
      RequestForm={CopperLineForm}
      apiEndpoint="/api/requests/copper-lines"
    />
  );
}
