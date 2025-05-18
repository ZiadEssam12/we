// Secondary Cabinets Requests Page
import React from "react";
import ServerRequestPageFinal from "@/components/UI/CutomRequestPAge/ServerRequestPageFinal";
import { getSecondaryCabinetsRequests } from "@/lib/api";
import { SecondaryCabinetDynamicForm } from "../../secondary-cabinets/SecondaryCabinetDynamicForm";

export const dynamic = "force-dynamic";
// This is a server component
export default async function SecondaryCabinetsRequestsPage() {
  return (
    <ServerRequestPageFinal
      entityType="secondary-cabinets"
      title="طلبات الإضافة والتعديل المعلقة للكبائن الثانوية"
      backLinkUrl="/dashboard/requests"
      backLinkText="العودة للطلبات"
      fetchFn={getSecondaryCabinetsRequests}
      RequestForm={SecondaryCabinetDynamicForm}
      apiEndpoint="/api/requests/secondary-cabinets"
    />
  );
}
