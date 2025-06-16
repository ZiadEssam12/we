"use client";
import DataTableWrapper from "@/components/DataTableWrapper/DataTableWrapper";
import {
  createMsanCabinet,
  updateMsanCabinet,
  deleteMsanCabinet,
  getAllMsanCabinets,
} from "@/lib/client-api";
import { useCallback } from "react";
import { msanFormDynamic } from "./MsanCabinetDynamicForm";

export default function MsanCabinetsDataTableWrapper({ initialData, columns }) {
  // Define the fetch function that will be used for client-side data refresh
  const fetchData = useCallback(async ({ query }) => {
    return await getAllMsanCabinets({ query });
  }, []);

  // Create object of API functions to pass to DataTableWrapper
  const apiHandlers = {
    fetchData,
    createItem: createMsanCabinet,
    updateItem: updateMsanCabinet,
    deleteItem: deleteMsanCabinet,
  };

  return (
    <DataTableWrapper
      initialData={initialData}
      columns={columns}
      apiHandlers={apiHandlers}
      FormComponent={msanFormDynamic}
      entityName="كابينة MSAN"
      modalTexts={{
        addButton: "إضافة كابينة MSAN",
        editTitle: "تعديل كابينة MSAN",
        addTitle: "إضافة كابينة MSAN جديدة",
        deleteTitle: "حذف كابينة MSAN",
        deleteConfirmation: "هل أنت متأكد من حذف هذه الكابينة؟",
      }}
    />
  );
}
