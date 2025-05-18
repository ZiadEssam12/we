// Mobile Towers Requests Page
import React from "react";
import ServerRequestPageFinal from "@/components/UI/CutomRequestPAge/ServerRequestPageFinal";
import { getMobileTowersRequests } from "@/lib/api";
import { mobileTowersDyanamicForm } from "../../mobile-towers/MobileTowersDynamicForm";

export const dynamic = "force-dynamic";
// This is a server component
export default async function MobileTowersRequestsPage() {
  return (
    <ServerRequestPageFinal
      entityType="mobile-towers"
      title="طلبات الإضافة والتعديل المعلقة لأبراج المحمول"
      backLinkUrl="/dashboard/requests"
      backLinkText="العودة للطلبات"
      fetchFn={getMobileTowersRequests}
      RequestForm={mobileTowersDyanamicForm}
      apiEndpoint="/api/requests/mobile-towers"
    />
  );
}
