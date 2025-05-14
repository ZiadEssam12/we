"use client";
import React, { useState, useEffect, useMemo } from "react";
import toast from "react-hot-toast";
import {
  getAllMajorCabinets, // This might be used for re-fetching on client if needed
  deleteMajorCabinet,
} from "@/lib/api";
import DynamicDataTable from "@/components/UI/DataTable/DynamicDataTable";
import MajorCabinetForm from "./MajorCabinetForm";
import {
  MaterialSymbolsDeleteOutline,
  MaterialSymbolsEditOutline,
} from "@/app/icons/Icons";

export default function MajorCabinetsClientPage({ initialMajorCabinetsData }) {
  const [majorCabinetsData, setMajorCabinetsData] = useState(
    initialMajorCabinetsData || []
  );
  const [isLoading, setIsLoading] = useState(false); // Initial loading is handled by SSR
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentCabinet, setCurrentCabinet] = useState(null);

  // Update state if initial data changes
  useEffect(() => {
    setMajorCabinetsData(initialMajorCabinetsData || []);
  }, [initialMajorCabinetsData]);

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

  const handleDelete = async (id) => {
    if (!confirm("هل أنت متأكد أنك تريد حذف هذه الكبينة الرئيسية؟")) return;

    // setIsLoading(true); // Or a more specific delete loading state
    try {
      const result = await deleteMajorCabinet(id);
      if (result.success) {
        toast.success(result.message);
        setMajorCabinetsData((prev) =>
          prev.filter((cabinet) => cabinet.id !== id)
        );
      } else {
        toast.error(result.message || "Failed to delete major cabinet.");
      }
    } catch (err) {
      toast.error("An unexpected error occurred during deletion.");
      console.error(err);
    }
    // setIsLoading(false);
  };

//   const columns = useMemo(
//     () => [
//       { Header: "السنترال", accessor: "central" },
//       { Header: "القرية", accessor: "village" },
//       { Header: "رقم الكبينة", accessor: "cabinet" },
//       {
//         Header: "المسافة من السنترال",
//         accessor: "central_to_cabinet_distance",
//       },
//       { Header: "عدد اللحامات", accessor: "number_of_joints" },
//       { Header: "موقع اللحام", accessor: "joint_location" },
//       { Header: "الغرف", accessor: "rooms" },
//       { Header: "موقع الغرف", accessor: "room_location" },
//       { Header: "الاستحقاق", accessor: "entitlement" },
//       { Header: "المسافة", accessor: "distance" },
//       {
//         Header: "المسؤول",
//         accessor: "responsible",
//         Cell: ({ value }) => value || "-",
//       },
//       {
//         Header: "ملاحظات",
//         accessor: "notes",
//         Cell: ({ value }) => (
//           <div title={value} className="truncate w-32">
//             {value || "-"}
//           </div>
//         ),
//       },
//       {
//         Header: "تاريخ الإنشاء",
//         accessor: "createdAt",
//         Cell: ({ value }) => new Date(value).toLocaleDateString(),
//       },
//       {
//         Header: "الإجراءات",
//         accessor: "actions",
//         Cell: ({ row }) => (
//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => handleOpenUpdateModal(row.original)}
//               className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
//               title="تعديل"
//             >
//               <MaterialSymbolsEditOutline width={20} height={20} />
//             </button>
//             <button
//               onClick={() => handleDelete(row.original.id)}
//               className="p-1 text-red-600 hover:text-red-800 transition-colors"
//               title="حذف"
//             >
//               <MaterialSymbolsDeleteOutline width={20} height={20} />
//             </button>
//           </div>
//         ),
//       },
//     ],
//     []
//   );

  // Initial loading state is handled by the Server Component
  // if (isLoading && majorCabinetsData.length === 0) {
  //   return <div className="p-4 text-center">جاري تحميل البيانات...</div>;
  // }

  // Error state for initial fetch is handled by Server Component
  // if (error && majorCabinetsData.length === 0) {
  //   return <div className="p-4 text-center text-red-500\">خطأ في تحميل البيانات: {error}</div>;
  // }

  return (
    <div className="p-2 sm:p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          إدارة الكبائن الرئيسية
        </h1>
        <button
          onClick={handleOpenAddModal}
          className="py-2 px-4 cursor-pointer rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-150 shadow-md"
        >
          إضافة كبينة رئيسية
        </button>
      </div>

      <MajorCabinetForm
        openModal={openModal}
        setOpenModal={setOpenModal}
        isUpdate={isUpdate}
        currentCabinetData={currentCabinet}
        setMajorCabinetsData={setMajorCabinetsData} // This function updates the client-side state
        onClose={handleCloseModal}
      />

      {isLoading && majorCabinetsData.length > 0 && (
        <div className="text-center my-4">تحديث البيانات...</div>
      )}
      {error && ( // Display error if client-side fetch fails
        <div className="p-4 text-center text-red-500">
          خطأ في تحديث البيانات: {error}
        </div>
      )}

      <DynamicDataTable columns={columns} data={majorCabinetsData} />
      {!isLoading && !error && majorCabinetsData.length === 0 && (
        <div className="text-center my-10 text-gray-500">
          لا توجد كبائن رئيسية لعرضها.
        </div>
      )}
    </div>
  );
}
