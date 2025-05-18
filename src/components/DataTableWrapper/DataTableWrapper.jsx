"use client";

import React, { useState, useEffect, Suspense } from "react";
import { DataTable } from "@/components/UI/DataTable/DynamicDataTable";
import Modal from "@/components/UI/Modal/Modal";
import toast from "react-hot-toast";
import {
  IcomoonFreePencil,
  LineMdLoadingLoop,
  TrashIcon,
} from "@/app/icons/Icons";
import { useSession } from "next-auth/react";

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
  const { data: session } = useSession();
  const { fetchData, createItem, updateItem, deleteItem } = apiHandlers;
  // State for data, loading, modal, selected item, etc.

  // Initialize state variables
  // Use initialData if provided, otherwise default to an empty array
  const [data, setData] = useState(initialData || []);

  // State for loading, error, and modal management
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // State for modal management
  // only for add/upadte modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for selected item (for edit/delete)
  // This is used to track which item is currently selected for editing or deleting
  const [selectedItem, setSelectedItem] = useState(null);

  // State for delete confirmation modal
  // This is used to confirm deletion of an item
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // State for loading state during deletion
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  // State for form processing
  // This is used to indicate whether the form is currently being processed
  const [isFormProcessing, setIsFormProcessing] = useState(false);

  // State for custom modal
  // This is used to handle custom actions on selected items (update/delete)
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  // State for temporary row data
  // This is used to store the row data temporarily when opening the custom modal
  // This allows us to perform actions on the selected row without immediately setting it as selectedItem
  // This is useful for scenarios where we want to perform actions like edit or delete
  // without directly modifying the selectedItem state
  // This is particularly useful when we want to show a confirmation modal before proceeding
  // with the action
  const [tempRowData, setTempRowData] = useState(null);

  // Default modal texts that can be overridden
  const texts = {
    addButton: `إضافة ${entityName}`,
    editTitle: `تعديل ${entityName}`,
    addTitle: `إضافة ${entityName} جديد`,
    deleteTitle: `حذف ${entityName}`,
    deleteConfirmation: `هل أنت متأكد من حذف ${entityName}؟`,
    deleteSuccess: `تم حذف ${entityName} بنجاح`,
    customModalTitle: `إجراء مخصص`,
    customModalButtonText: `إجراء مخصص`,
    customModalConfirmation: `هل أنت متأكد من تنفيذ هذا الإجراء؟`,
    ...modalTexts,
  };

  // Effect to set initial data for a row when click on it the modal
  // is opened and then set the selected row to a temp variable
  // so if the user closed the modal the selected row will not be set
  // otherwise it will be set to the selected row
  const handleOpenCustomeModal = (rowData) => {
    // Store the row data temporarily in a local variable
    // but don't set it as selectedItem yet
    // Instead, we'll store it in a separate state variable
    setTempRowData(rowData);

    // Toggle the custom modal
    setIsCustomModalOpen(true);
  };

  // Function to close the custom modal
  // This function is called when the user clicks the close button
  const handleCloseCustomModal = () => {
    setIsCustomModalOpen(false);
    // Clear the temporary row data when closing
    setTempRowData(null);
  };

  // Fetch data on component mount or when refetch is triggered
  const refetchData = async () => {
    if (session?.user?.role === "USER") {
      return;
    }

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
        if (session?.user.role !== "USER") {
          setData((prevData) => {
            if (selectedItem) {
              return prevData.map((item) =>
                item.id === selectedItem.id ? result.data : item
              );
            } else {
              return [result.data, ...prevData];
            }
          });
        }

        console.log("user Role :", session?.user?.role);

        // Display different success messages based on user role
        const successMessage =
          session?.user?.role === "USER"
            ? `تم التحويل للمراجعة`
            : `تم ${selectedItem ? "تعديل" : "إضافة"} ${entityName} بنجاح`;

        toast.success(successMessage || result.message);

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

  // Check if a column is a location column
  // Format the key to lowercase and check if it contains "location" or its Arabic equivalent
  // and then return true if it does
  const isLocationColumn = (key) => {
    return (
      key.toLowerCase().includes("location") ||
      key.toLowerCase().includes("موقع") ||
      key.toLowerCase().includes("مكان")
    );
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
      // setError(`حدث خطأ أثناء حذف ${entityName}`);
      toast.error(`حدث خطأ أثناء حذف ${entityName} ${selectedItem.name}`);
    } finally {
      setIsDeleteLoading(false);
    }
  };
  // Enhance columns to transform location data
  const enhancedColumns = columns.map((column) => {
    // Check if this is a location column by its accessor key
    if (column.accessorKey && isLocationColumn(column.accessorKey)) {
      return {
        ...column,
        cell: ({ row }) => {
          const locationValue = row.original[column.accessorKey];

          // Check if the location value contains coordinates (simple check)
          if (
            locationValue &&
            typeof locationValue === "string" &&
            locationValue.includes(",")
          ) {
            // Try to extract coordinates from the string
            let latitude, longitude;

            // Handle different formats of coordinates
            if (locationValue.includes(",")) {
              const parts = locationValue.split(",");
              if (parts.length >= 2) {
                latitude = parseFloat(parts[0].trim());
                longitude = parseFloat(parts[1].trim());
              }
            }

            if (latitude && longitude) {
              return (
                <a
                  href={`https://www.google.com/maps?q=${latitude},${longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-xs"
                >
                  الموقع
                </a>
              );
            }
          }

          // Fallback to displaying the raw value if not coordinates
          return locationValue || "";
        },
      };
    }

    return column;
  });
  // The MapLink component has been replaced by our enhanced columns logic
  const columnsWithActions = [
    ...enhancedColumns,
    {
      header: "الإجراءات",
      id: "actions",
      cell: ({ row }) => (
        <div className="flex space-x-2 justify-center relative">
          <button
            onClick={() => handleOpenCustomeModal(row.original)}
            className="px-3 cursor-pointer py-1.5 bg-gray-200 text-gray-700 text-xs rounded-md hover:bg-gray-300 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
          >
            <span className="block leading-none">•••</span>
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

  const closeAddUpdateModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedItem(null);
  };

  const handleSearch = (searchTerm) => {
    // Implement search functionality here
    // For example, you can filter the data based on the search term
    console.log("Search Term :", searchTerm);
  };

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
        handleSearch={handleSearch}
      />
      {/* Form Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeAddUpdateModal}
        title={selectedItem ? texts.editTitle : texts.addTitle}
      >
        <Suspense
          fallback={
            <div className="h-[100px] rounded-lg bg-gray-100 animate-bounce"></div>
          }
        >
          <FormComponent
            initialData={selectedItem}
            onSubmit={handleFormSubmit}
            isProcessing={isFormProcessing}
            formStyle="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-[70vh] p-4"
            {...formProps}
          />
        </Suspense>
      </Modal>
      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        title={texts.deleteTitle}
      >
        <div className="p-4">
          <p className="mb-4 text-center">{texts.deleteConfirmation}</p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={closeDeleteModal}
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
              {isDeleteLoading ? <LineMdLoadingLoop /> : "تأكيد الحذف"}
            </button>
          </div>
        </div>
      </Modal>
      {/* Selected row update/delete modal */}
      <Modal
        isOpen={isCustomModalOpen}
        onClose={handleCloseCustomModal}
        title={session?.user?.role === "USER" ? "تعديل" : "تعديل/حذف"}
      >
        <div className="flex flex-col space-y-4 p-6 relative min-w-[260px]">
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => {
                // Only set selectedItem when update button is clicked
                setSelectedItem(tempRowData);
                setIsModalOpen(true);
                setIsCustomModalOpen(false);
              }}
              className="px-4 py-2 flex items-center gap-2 bg-blue-50 text-blue-600 text-xs rounded-md hover:bg-blue-100 focus:ring-2 focus:ring-blue-200 transition-colors group shadow-sm border border-blue-100"
            >
              <span className="bg-blue-100 p-1 rounded-full group-hover:bg-blue-200 transition-colors">
                <IcomoonFreePencil className="w-3.5 h-3.5" />
              </span>
              <span>تعديل</span>
            </button>
            {session?.user?.role !== "USER" && (
              <button
                onClick={() => {
                  // Only set selectedItem when delete button is clicked
                  setSelectedItem(tempRowData);
                  setIsDeleteModalOpen(true);
                  setIsCustomModalOpen(false);
                }}
                className="px-4 py-2 flex items-center gap-2 bg-red-50 text-red-600 text-xs rounded-md hover:bg-red-100 focus:ring-2 focus:ring-red-200 transition-colors group shadow-sm border border-red-100"
              >
                <span className="bg-red-100 p-1 rounded-full group-hover:bg-red-200 transition-colors">
                  <TrashIcon className="w-3.5 h-3.5" />
                </span>
                <span>حذف</span>
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
