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
import MobileTowerForm from "./MobileTowerForm";

export default function MobileTowersDataTableWrapper({ initialData, columns }) {
  // Define the fetch function that will be used for client-side data refresh
  const fetchData = useCallback(async () => {
    return await getAllMobileTowers();
  }, []);

  // Create object of API functions to pass to DataTableWrapper
  const apiHandlers = {
    fetchData,
    createItem: createMobileTower,
    updateItem: updateMobileTower,
    deleteItem: deleteMobileTower,
  };

  return (
    <DataTableWrapper
      initialData={initialData}
      columns={columns}
      apiHandlers={apiHandlers}
      FormComponent={MobileTowerForm}
      entityName="برج الجوال"
      modalTexts={{
        addButton: "إضافة برج جوال",
        editTitle: "تعديل برج الجوال",
        addTitle: "إضافة برج جوال جديد",
        deleteTitle: "حذف برج الجوال",
        deleteConfirmation: "هل أنت متأكد من حذف هذا البرج؟",
      }}
    />
  );
}
