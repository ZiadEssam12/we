import React from "react";
import { getAllUsers } from "@/lib/api";
import UsersDataTableWrapper from "./UsersDataTableWrapper";
import DataTablePage from "@/components/DataTablePage/DataTablePage";
import { userColumns } from "./columns";

// Using the reusable DataTablePage component for Users
export default async function UsersPageSSR() {
  return (
    <DataTablePage
      fetchData={getAllUsers}
      DataTableWrapper={UsersDataTableWrapper}
      columns={userColumns}
      title="المستخدمين"
      errorTitle="خطأ في تحميل بيانات المستخدمين"
      apiEndpoint="/api/users"
    />
  );
}
