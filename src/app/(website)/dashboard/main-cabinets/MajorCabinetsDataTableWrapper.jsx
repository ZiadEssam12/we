"use client";
import DataTableWrapper from "@/components/DataTableWrapper/DataTableWrapper";
import {
  createMajorCabinet,
  updateMajorCabinet,
  deleteMajorCabinet,
  getAllMajorCabinets,
} from "@/lib/client-api";
import { useCallback } from "react";
import { majorFormDynamic } from "./MajorCabinetDynamicForm";

export default function MajorCabinetsDataTableWrapper({
  initialData,
  columns,
}) {
  // Define the fetch function that will be used for client-side data refresh
  const fetchData = useCallback(async ({ query }) => {
    return await getAllMajorCabinets({ query });
  }, []);

  // Create object of API functions to pass to DataTableWrapper
  const apiHandlers = {
    fetchData,
    createItem: createMajorCabinet,
    updateItem: updateMajorCabinet,
    deleteItem: deleteMajorCabinet,
  };
  return (
    <DataTableWrapper
      initialData={initialData}
      columns={columns}
      apiHandlers={apiHandlers}
      FormComponent={majorFormDynamic}
      entityName="الكبينة الرئيسية"
      modalTexts={{
        addButton: "إضافة كبينة رئيسية",
        editTitle: "تعديل الكبينة الرئيسية",
        addTitle: "إضافة كبينة رئيسية جديدة",
        deleteTitle: "حذف الكبينة الرئيسية",
        deleteConfirmation: "هل أنت متأكد من حذف هذه الكبينة الرئيسية؟",
      }}
    />
  );
}
