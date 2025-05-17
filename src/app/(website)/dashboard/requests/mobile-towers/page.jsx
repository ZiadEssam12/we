// Mobile Towers Requests Page
import React from "react";
import ServerRequestPageFinal from "@/components/UI/CutomRequestPAge/ServerRequestPageFinal";
import MobileTowerForm from "@/app/(website)/dashboard/mobile-towers/MobileTowerForm";
import prisma from "@/lib/prisma";

// This is a server component
export default async function MobileTowersRequestsPage() {
  // Define server-side fetch function - uses database directly
  const fetchMobileTowerRequests = async () => {
    "use server";
    try {
      return await prisma.mobileTower.findMany({
        where: {
          status: {
            in: ["PENDING_ADD", "PENDING_UPDATE"],
          },
        },
        select: {
          id: true,
          name: true,
          location: true,
          provider: true,
          status: true,
          createdAt: true,
          // Add any other fields needed for list view
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } catch (error) {
      console.error("Error fetching mobile tower requests:", error);
      return [];
    }
  };

  return (
    <ServerRequestPageFinal
      entityType="mobile-towers"
      title="طلبات الإضافة والتعديل المعلقة لأبراج المحمول"
      backLinkUrl="/dashboard/requests"
      backLinkText="العودة للطلبات"
      fetchFn={fetchMobileTowerRequests}
      RequestForm={MobileTowerForm}
      apiEndpoint="/api/requests/mobile-towers"
    />
  );
}
