"use client";

import React, { useState, useEffect } from "react";
import { DataTable } from "@/components/UI/DataTable/DynamicDataTable";
import Modal from "@/components/UI/Modal/Modal";
import toast from "react-hot-toast";

/**
 * Generic data table wrapper component that can be extended for specific entity types
 * @param {Object} props - Component props
 * @param {Array} props.initialData - Initial data loaded from server
 * @param {Array} props.columns - Column definitions for the table
 * @param {Object} props.apiHandlers - Object containing API handler functions
 * @param {Function} props.apiHandlers.fetchData - Function to refetch data from client
 * @param {Function} props.apiHandlers.createItem - Function to create a new item
 * @param {Function} props.apiHandlers.updateItem - Function to update an existing item
 * @param {Function} props.apiHandlers.deleteItem - Function to delete an item
 * @param {React.ComponentType} props.FormComponent - Form component to create/edit items
 * @param {Object} props.formProps - Additional props to pass to the form component
 * @param {String} props.entityName - Name of the entity being managed (e.g., "major cabinet")
 * @param {Object} props.modalTexts - Custom texts for the modal
 * @returns {React.ReactElement} Rendered component
 */
export default function DataTableWrapper({
  initialData,
  columns,
  apiHandlers,
  FormComponent,
  formProps = {},
  entityName = "item",
  modalTexts = {},
}) {
  const { fetchData, createItem, updateItem, deleteItem } = apiHandlers;

  // State for data, loading, modal, selected item, etc.
  const [data, setData] = useState(initialData || []);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [isFormProcessing, setIsFormProcessing] = useState(false);

  useEffect(() => {
    console.log("modal status:", isModalOpen ? "open" : "closed");
  }, [isModalOpen]);

  // Default modal texts that can be overridden
  const texts = {
    addButton: `إضافة ${entityName}`,
    editTitle: `تعديل ${entityName}`,
    addTitle: `إضافة ${entityName} جديد`,
    deleteTitle: `حذف ${entityName}`,
    deleteConfirmation: `هل أنت متأكد من حذف ${entityName}؟`,
    deleteSuccess: `تم حذف ${entityName} بنجاح`,
    ...modalTexts,
  };

  // Fetch data on component mount or when refetch is triggered
  const refetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchData();
      if (result.success) {
        setData(result.data || []);
      } else {
        setError(result.message || `فشل في استرجاع بيانات ${entityName}`);
      }
    } catch (err) {
      console.error(`Error fetching ${entityName} data:`, err);
      setError(`حدث خطأ أثناء استرجاع البيانات`);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submission (create or update)
  const handleFormSubmit = async (formData) => {
    setIsFormProcessing(true);
    try {
      let result;
      if (selectedItem) {
        // Update existing item
        result = await updateItem({ id: selectedItem.id, ...formData });
      } else {
        // Create new item
        result = await createItem(formData);
      }
      if (result.success) {
        toast.success(
          result.message ||
            `تم ${selectedItem ? "تعديل" : "إضافة"} ${entityName} بنجاح`
        );
        setData((prevData) => {
          if (selectedItem) {
            return prevData.map((item) =>
              item.id === selectedItem.id ? result.data : item
            );
          } else {
            return [result.data, ...prevData];
          }
        });
        setIsModalOpen(false);
        await refetchData();
      } else {
        toast.error(
          result.message ||
            `فشل في ${selectedItem ? "تعديل" : "إضافة"} ${entityName}`
        );
        setError(
          result.message ||
            `فشل في ${selectedItem ? "تعديل" : "إضافة"} ${entityName}`
        );
      }
    } catch (err) {
      console.error(
        `Error ${selectedItem ? "updating" : "creating"} ${entityName}:`,
        err
      );
      setError(
        `حدث خطأ أثناء ${selectedItem ? "تعديل" : "إضافة"} ${entityName}`
      );
    } finally {
      setIsFormProcessing(false);
    }
  };

  // Handle item deletion
  const handleDelete = async () => {
    if (!selectedItem) return;

    setIsDeleteLoading(true);
    try {
      const result = await deleteItem({ id: selectedItem.id });
      if (result.success) {
        setIsDeleteModalOpen(false);
        setSelectedItem(null);
        await refetchData();
      } else {
        setError(result.message || `فشل في حذف ${entityName}`);
      }
    } catch (err) {
      console.error(`Error deleting ${entityName}:`, err);
      setError(`حدث خطأ أثناء حذف ${entityName}`);
    } finally {
      setIsDeleteLoading(false);
    }
  };

  // Add actions column to the table
  const columnsWithActions = [
    ...columns,
    {
      Header: "الإجراءات",
      id: "actions",
      Cell: ({ row }) => (
        <div className="flex space-x-2 justify-center">
          <button
            onClick={() => {
              setSelectedItem(row.original);
              setIsModalOpen(true);
            }}
            className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-700"
          >
            تعديل
          </button>
          <button
            onClick={() => {
              setSelectedItem(row.original);
              setIsDeleteModalOpen(true);
            }}
            className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-700"
          >
            حذف
          </button>
        </div>
      ),
    },
  ];

  // Format dates in the data
  const formattedData = data.map((item) => {
    const formattedItem = { ...item };
    // Format dates like createdAt and updatedAt
    if (formattedItem.createdAt) {
      formattedItem.createdAt = new Date(
        formattedItem.createdAt
      ).toLocaleDateString("ar-EG");
    }
    if (formattedItem.updatedAt) {
      formattedItem.updatedAt = new Date(
        formattedItem.updatedAt
      ).toLocaleDateString("ar-EG");
    }
    return formattedItem;
  });

  return (
    <div className="container mx-auto px-4">
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
          <p>{error}</p>
        </div>
      )}

      <DataTable
        columns={columnsWithActions}
        data={formattedData}
        isLoading={isLoading}
        ButtonTitle={texts.addButton}
        setOpenModal={setIsModalOpen}
      />
      {/* Form Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedItem ? texts.editTitle : texts.addTitle}
      >
        <FormComponent
          initialData={selectedItem}
          onSubmit={handleFormSubmit}
          isProcessing={isFormProcessing}
          {...formProps}
        />
      </Modal>
      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title={texts.deleteTitle}
      >
        <div className="p-4">
          <p className="mb-4 text-center">{texts.deleteConfirmation}</p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setIsDeleteModalOpen(false)}
              className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
              disabled={isDeleteLoading}
            >
              إلغاء
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              disabled={isDeleteLoading}
            >
              {isDeleteLoading ? "جاري الحذف..." : "تأكيد الحذف"}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
