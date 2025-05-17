import React from "react";
import { prisma } from "@/lib/prisma";
import ServerRequestPageFinal from "@/components/UI/CutomRequestPAge/ServerRequestPageFinal";
import MajorCabinetForm from "@/app/(website)/dashboard/major-cabinets/MajorCabinetForm";

// This is a server component
export default async function MajorCabinetRequestsPage() {
  // Define server-side fetch function
  const fetchMajorCabinetRequests = async () => {
    "use server";
    try {
      // Fetch pending requests from database
      const pendingRequests = await prisma.majorCabinet.findMany({
        where: {
          status: {
            in: ["PENDING_ADD", "PENDING_UPDATE"],
          },
        },
        select: {
          id: true,
          central: true,
          village: true,
          cabinet: true,
          status: true,
          createdAt: true,
          // Add other fields you need for the list view
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return pendingRequests;
    } catch (error) {
      console.error("Error fetching major cabinet requests:", error);
      return [];
    }
  };

  return (
    <ServerRequestPageFinal
      entityType="major-cabinets"
      title="طلبات الإضافة والتعديل المعلقة للكبائن الرئيسية"
      backLinkUrl="/dashboard/requests"
      backLinkText="العودة للطلبات"
      fetchFn={fetchMajorCabinetRequests}
      RequestForm={MajorCabinetForm}
      apiEndpoint="/api/requests/major-cabinets"
    />
  );
}
