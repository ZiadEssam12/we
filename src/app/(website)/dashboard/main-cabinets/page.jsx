import React from "react";
import { getAllMajorCabinets } from "@/lib/api";
import MajorCabinetsDataTableWrapper from "./MajorCabinetsDataTableWrapper";
import DataTablePage from "@/components/DataTablePage/DataTablePage";
import { majorCabinetColumns } from "./columns";

// Using the reusable DataTablePage component for Major Cabinets
export default async function MajorCabinetsPageSSR() {
  return (
    <DataTablePage
      fetchData={getAllMajorCabinets}
      DataTableWrapper={MajorCabinetsDataTableWrapper}
      columns={majorCabinetColumns}
      title="الكبينة الرئيسية"
      errorTitle="خطأ في تحميل بيانات الكبائن الرئيسية"
      apiEndpoint="/api/major-cabinets"
    />
  );
}
