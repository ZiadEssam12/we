"use client";
import DataTableWrapper from "@/components/DataTableWrapper/DataTableWrapper";
import {
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
} from "@/lib/client-api";
import { useCallback } from "react";

// Import the dynamic form component
import { UserFormDynamic } from "./UserFormDynamic";

export default function UsersDataTableWrapper({ initialData, columns }) {
  // Define the fetch function that will be used for client-side data refresh
  const fetchData = useCallback(async ({ query }) => {
    return await getAllUsers({ query });
  }, []);

  // Create object of API functions to pass to DataTableWrapper
  const apiHandlers = {
    fetchData,
    createItem: createUser,
    updateItem: updateUser,
    deleteItem: deleteUser,
  };
  return (
    <DataTableWrapper
      initialData={initialData}
      columns={columns}
      apiHandlers={apiHandlers}
      FormComponent={UserFormDynamic}
      entityName="المستخدمين"
      modalTexts={{
        addButton: "إضافة مستخدم",
        editTitle: "تعديل المستخدم",
        addTitle: "إضافة مستخدم جديد",
        deleteTitle: "حذف المستخدم",
        deleteConfirmation: "هل أنت متأكد من حذف هذا المستخدم؟",
      }}
    />
  );
}
