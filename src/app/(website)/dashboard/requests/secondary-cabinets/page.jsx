// Secondary Cabinets Requests Page
import React from "react";
import ServerRequestPageFinal from "@/components/UI/CutomRequestPAge/ServerRequestPageFinal";
import SecondaryCabinetForm from "@/app/(website)/dashboard/secondary-cabinets/SecondaryCabinetForm";
import { getSecondaryCabinetsRequests } from "@/lib/api";

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
      RequestForm={SecondaryCabinetForm}
      apiEndpoint="/api/requests/secondary-cabinets"
    />
  );
}
