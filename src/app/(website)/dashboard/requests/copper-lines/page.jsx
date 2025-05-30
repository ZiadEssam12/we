import React from "react";
import ServerRequestPageFinal from "@/components/UI/CutomRequestPAge/ServerRequestPageFinal";
import { getCopperLinesRequests } from "@/lib/api";
import { CopperLinesFormDynamic } from "../../copper-lines/CopperLinesFormDynamic";

export const dynamic = "force-dynamic";

// This is a server component
export default async function CopperLinesRequestsPage() {
  // Define server-side fetch function - uses database directly

  return (
    <ServerRequestPageFinal
      entityType="copper-lines"
      title="طلبات الإضافة والتعديل المعلقة لخطوط النحاس"
      backLinkUrl="/dashboard/requests"
      backLinkText="العودة للطلبات"
      fetchFn={getCopperLinesRequests}
      RequestForm={CopperLinesFormDynamic}
      apiEndpoint="/api/requests/copper-lines"
    />
  );
}
