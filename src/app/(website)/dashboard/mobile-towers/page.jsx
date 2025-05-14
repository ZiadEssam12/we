import React from "react";
import { getAllMobileTowers } from "@/lib/api";
import MobileTowersDataTableWrapper from "./MobileTowersDataTableWrapper";
import DataTablePage from "@/components/DataTablePage/DataTablePage";
import { mobileTowerColumns } from "./columns";

// Using the reusable DataTablePage component for Mobile Towers
export default async function MobileTowersPageSSR() {
  return (
    <DataTablePage
      fetchData={getAllMobileTowers}
      DataTableWrapper={MobileTowersDataTableWrapper}
      columns={mobileTowerColumns}
      title="أبراج التليفون"
      errorTitle="خطأ في تحميل بيانات أبراج التليفون"
    />
  );
}
