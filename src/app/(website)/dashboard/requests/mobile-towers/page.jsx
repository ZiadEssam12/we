// Mobile Towers Requests Page
import React from "react";
import ServerRequestPageFinal from "@/components/UI/CutomRequestPAge/ServerRequestPageFinal";
import MobileTowerForm from "@/app/(website)/dashboard/mobile-towers/MobileTowerForm";
import { getMobileTowersRequests } from "@/lib/api";

// This is a server component
export default async function MobileTowersRequestsPage() {
  return (
    <ServerRequestPageFinal
      entityType="mobile-towers"
      title="طلبات الإضافة والتعديل المعلقة لأبراج المحمول"
      backLinkUrl="/dashboard/requests"
      backLinkText="العودة للطلبات"
      fetchFn={getMobileTowersRequests}
      RequestForm={MobileTowerForm}
      apiEndpoint="/api/requests/mobile-towers"
    />
  );
}
