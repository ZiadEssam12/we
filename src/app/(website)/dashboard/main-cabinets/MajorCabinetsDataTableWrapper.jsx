"use client";
import React, { useState, useEffect, useMemo } from "react";
import toast from "react-hot-toast";
import { deleteMajorCabinet } from "@/lib/api";
import MajorCabinetForm from "./MajorCabinetForm";
import { DataTable } from "@/components/UI/DataTable/DynamicDataTable";

export default function MajorCabinetsDataTableWrapper({
  initialData,
  columns: serverColumns,
}) {
  const [majorCabinetsData, setMajorCabinetsData] = useState(initialData || []);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentCabinet, setCurrentCabinet] = useState(null);

  useEffect(() => {
    setMajorCabinetsData(initialData || []);
  }, [initialData]);

  const handleOpenAddModal = () => {
    setIsUpdate(false);
    setCurrentCabinet(null);
    setOpenModal(true);
  };

  const handleOpenUpdateModal = (cabinet) => {
    setIsUpdate(true);
    setCurrentCabinet(cabinet);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentCabinet(null);
  };

  const handleDelete = async (cabinet) => {
    if (!confirm("هل أنت متأكد أنك تريد حذف هذه الكبينة الرئيسية؟")) return;
    setIsLoading(true);
    setError(null);
    try {
      const result = await deleteMajorCabinet(cabinet.id);
      if (result.success) {
        toast.success(result.message || "Major Cabinet deleted successfully!");
        setMajorCabinetsData((prev) =>
          prev.filter((item) => item.id !== cabinet.id)
        );
      } else {
        toast.error(result.message || "Failed to delete Major Cabinet.");
        setError(result.message || "Failed to delete Major Cabinet.");
      }
    } catch (err) {
      toast.error("An error occurred while deleting the Major Cabinet.");
      setError("An error occurred while deleting the Major Cabinet.");
      console.error("Delete error:", err);
    }
    setIsLoading(false);
  };

  const columns = useMemo(() => {
    return serverColumns.map((col) => {
      const accessor = col.accessorKey || col.accessor || col.id;

      if (accessor === "responsible") {
        return {
          ...col,
          Cell: ({ row }) => row.original.responsible?.name || "-",
        };
      }
      if (accessor === "notes") {
        return {
          ...col,
          Cell: ({ value }) => (
            <div title={value} className="truncate w-32">
              {value || "-"}
            </div>
          ),
        };
      }
      if (accessor === "createdAt") {
        return {
          ...col,
          Cell: ({ value }) => new Date(value).toLocaleDateString(),
        };
      }
      return col;
    });
  }, [serverColumns]);

  return (
    <div className="container mx-auto p-4">
      {error && <p className="text-red-500">Error: {error}</p>}
      <div className="mb-4">
        <button
          onClick={handleOpenAddModal}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Add Major Cabinet"}
        </button>
      </div>
      {openModal && (
        <MajorCabinetForm
          isOpen={openModal}
          onClose={handleCloseModal}
          setMajorCabinetsData={setMajorCabinetsData}
          currentCabinet={currentCabinet}
          isUpdate={isUpdate}
          majorCabinetsData={majorCabinetsData}
        />
      )}
      <DataTable
        data={majorCabinetsData}
        columns={columns}
        isLoading={isLoading}
        onEdit={handleOpenUpdateModal}
        onDelete={handleDelete}
      />
    </div>
  );
}
