"use client";
import DataTableWrapper from "@/components/DataTableWrapper/DataTableWrapper";
import {
  createMobileTower,
  updateMobileTower,
  deleteMobileTower,
  getAllMobileTowers,
} from "@/lib/client-api";
import { useCallback } from "react";

// You would need to create this form component
// import MobileTowerForm from "./MobileTowerForm";
import { mobileTowersDyanamicForm } from "./MobileTowersDynamicForm";

export default function MobileTowersDataTableWrapper({ initialData, columns }) {
  // Define the fetch function that will be used for client-side data refresh
  const fetchData = useCallback(async ({ query }) => {
    return await getAllMobileTowers({ query });
  }, []);

  // Create object of API functions to pass to DataTableWrapper
  const apiHandlers = {
    fetchData: fetchData,
    createItem: createMobileTower,
    updateItem: updateMobileTower,
    deleteItem: deleteMobileTower,
  };

  return (
    <DataTableWrapper
      initialData={initialData}
      columns={columns}
      apiHandlers={apiHandlers}
      FormComponent={mobileTowersDyanamicForm}
      entityName="برج التليفون"
      modalTexts={{
        addButton: "إضافة ",
        editTitle: "تعديل برج التليفون",
        addTitle: "إضافة برج جوال جديد",
        deleteTitle: "حذف برج التليفون",
        deleteConfirmation: "هل أنت متأكد من حذف هذا البرج؟",
      }}
    />
  );
}
