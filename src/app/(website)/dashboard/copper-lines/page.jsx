import React from "react";
import { getAllCopperLines } from "@/lib/api";
import CopperLinesDataTableWrapper from "./CopperLinesDataTableWrapper";
import DataTablePage from "@/components/DataTablePage/DataTablePage";
import { copperLineColumns } from "./columns";

// Using the reusable DataTablePage component for Copper Lines
export default async function CopperLinesPageSSR() {
  return (
    <DataTablePage
      fetchData={getAllCopperLines}
      DataTableWrapper={CopperLinesDataTableWrapper}
      columns={copperLineColumns}
      title="خطوط النحاس"
      errorTitle="خطأ في تحميل بيانات خطوط النحاس"
      apiEndpoint="/api/copper-lines"
    />
  );
}
