import React from "react";
import { getAllSecondaryCabinets } from "@/lib/api";
import SecondaryCabinetsDataTableWrapper from "./SecondaryCabinetsDataTableWrapper";
import DataTablePage from "@/components/DataTablePage/DataTablePage";
import { secondaryCabinetColumns } from "./columns";

// Using the reusable DataTablePage component for Secondary Cabinets
export default async function SecondaryCabinetsPageSSR() {
  return (
    <DataTablePage
      fetchData={getAllSecondaryCabinets}
      DataTableWrapper={SecondaryCabinetsDataTableWrapper}
      columns={secondaryCabinetColumns}
      title="الكبينة الثانوية"
      errorTitle="خطأ في تحميل بيانات الكبائن الثانوية"
    />
  );
}
