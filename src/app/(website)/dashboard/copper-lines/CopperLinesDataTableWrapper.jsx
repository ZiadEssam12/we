"use client";
import DataTableWrapper from "@/components/DataTableWrapper/DataTableWrapper";
import {
  createCopperLine,
  updateCopperLine,
  deleteCopperLine,
  getAllCopperLines,
} from "@/lib/client-api";
import { useCallback } from "react";
import { CopperLinesFormDynamic } from "./CopperLinesFormDynamic";

// You would need to create this form component
// import CopperLineForm from "./CopperLineForm";

export default function CopperLinesDataTableWrapper({ initialData, columns }) {
  // Define the fetch function that will be used for client-side data refresh
  const fetchData = useCallback(async ({ query }) => {
    return await getAllCopperLines({ query });
  }, []);

  // Create object of API functions to pass to DataTableWrapper
  const apiHandlers = {
    fetchData,
    createItem: createCopperLine,
    updateItem: updateCopperLine,
    deleteItem: deleteCopperLine,
  };

  return (
    <DataTableWrapper
      initialData={initialData}
      columns={columns}
      apiHandlers={apiHandlers}
      FormComponent={CopperLinesFormDynamic}
      entityName="خط النحاس"
      modalTexts={{
        addButton: "إضافة خط نحاس",
        editTitle: "تعديل خط النحاس",
        addTitle: "إضافة خط نحاس جديد",
        deleteTitle: "حذف خط النحاس",
        deleteConfirmation: "هل أنت متأكد من حذف هذا الخط؟",
      }}
    />
  );
}
