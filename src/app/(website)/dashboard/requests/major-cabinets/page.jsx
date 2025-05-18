import ServerRequestPageFinal from "@/components/UI/CutomRequestPAge/ServerRequestPageFinal";
import { getMajorCabinetsRequests } from "@/lib/api";
import { majorFormDynamic } from "../../main-cabinets/MajorCabinetDynamicForm";

export const dynamic = "force-dynamic";
// This is a server component
export default async function MajorCabinetRequestsPage() {
  // Define server-side fetch function - uses database directly

  return (
    <ServerRequestPageFinal
      entityType="major-cabinets"
      title="طلبات الإضافة والتعديل المعلقة للكبائن الرئيسية"
      backLinkUrl="/dashboard/requests"
      backLinkText="العودة للطلبات"
      fetchFn={getMajorCabinetsRequests}
      RequestForm={majorFormDynamic}
      apiEndpoint="/api/requests/major-cabinets"
    />
  );
}
