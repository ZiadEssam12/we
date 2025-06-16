import React from "react";
import { getAllMsanCabinets } from "@/lib/api";
import MsanCabinetsDataTableWrapper from "./MsanCabinetsDataTableWrapper";
import DataTablePage from "@/components/DataTablePage/DataTablePage";
import { msanCabinetColumns } from "./columns";

// Using the reusable DataTablePage component for MSAN Cabinets
export default async function MsanCabinetsPageSSR() {
  return (
    <DataTablePage
      fetchData={getAllMsanCabinets}
      DataTableWrapper={MsanCabinetsDataTableWrapper}
      columns={msanCabinetColumns}
      title="كابينة MSAN"
      errorTitle="خطأ في تحميل بيانات كابينات MSAN"
      apiEndpoint="/api/msan-cabinets"
    />
  );
}
