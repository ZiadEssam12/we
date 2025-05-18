"use client";
import DataTableWrapper from "@/components/DataTableWrapper/DataTableWrapper";
import {
  createSecondaryCabinet,
  updateSecondaryCabinet,
  deleteSecondaryCabinet,
  getAllSecondaryCabinets,
} from "@/lib/client-api";
import { useCallback } from "react";

// You would need to create this form component similar to MajorCabinetForm
import { SecondaryCabinetDynamicForm } from "./SecondaryCabinetDynamicForm";

export default function SecondaryCabinetsDataTableWrapper({
  initialData,
  columns,
}) {
  // Define the fetch function that will be used for client-side data refresh
  const fetchData = useCallback(async ({ query }) => {
    return await getAllSecondaryCabinets({ query });
  }, []);

  // Create object of API functions to pass to DataTableWrapper
  const apiHandlers = {
    fetchData,
    createItem: createSecondaryCabinet,
    updateItem: updateSecondaryCabinet,
    deleteItem: deleteSecondaryCabinet,
  };

  return (
    <DataTableWrapper
      initialData={initialData}
      columns={columns}
      apiHandlers={apiHandlers}
      FormComponent={SecondaryCabinetDynamicForm}
      entityName="الكبينة الثانوية"
      modalTexts={{
        addButton: "إضافة كبينة ثانوية",
        editTitle: "تعديل الكبينة الثانوية",
        addTitle: "إضافة كبينة ثانوية جديدة",
        deleteTitle: "حذف الكبينة الثانوية",
        deleteConfirmation: "هل أنت متأكد من حذف هذه الكبينة الثانوية؟",
      }}
    />
  );
}
