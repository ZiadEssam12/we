import ServerRequestPageFinal from "@/components/UI/CutomRequestPAge/ServerRequestPageFinal";
import MajorCabinetForm from "@/app/(website)/dashboard/main-cabinets/MajorCabinetForm";
import { getMajorCabinetsRequests } from "@/lib/api";

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
      RequestForm={MajorCabinetForm}
      apiEndpoint="/api/requests/major-cabinets"
    />
  );
}
