// Secondary Cabinets Requests Page
import React from "react";
import ServerRequestPageFinal from "@/components/UI/CutomRequestPAge/ServerRequestPageFinal";
import SecondaryCabinetForm from "@/app/(website)/dashboard/secondary-cabinets/SecondaryCabinetForm";
import prisma from "@/lib/prisma";

// This is a server component
export default async function SecondaryCabinetsRequestsPage() {
  // Define server-side fetch function - uses database directly
  const fetchSecondaryCabinetRequests = async () => {
    "use server";
    try {
      return await prisma.secondaryCabinet.findMany({
        where: {
          status: {
            in: ["PENDING_ADD", "PENDING_UPDATE"],
          },
        },
        select: {
          id: true,
          cabinetId: true,
          description: true,
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
      console.error("Error fetching secondary cabinet requests:", error);
      return [];
    }
  };

  return (
    <ServerRequestPageFinal
      entityType="secondary-cabinets"
      title="طلبات الإضافة والتعديل المعلقة للكبائن الثانوية"
      backLinkUrl="/dashboard/requests"
      backLinkText="العودة للطلبات"
      fetchFn={fetchSecondaryCabinetRequests}
      RequestForm={SecondaryCabinetForm}
      apiEndpoint="/api/requests/secondary-cabinets"
    />
  );
}
