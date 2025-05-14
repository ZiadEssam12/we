import React from "react";
import { getAllMajorCabinets } from "@/lib/api";
import MajorCabinetsDataTableWrapper from "./MajorCabinetsDataTableWrapper";
import { auth } from "@/app/auth";
import { cookies } from "next/headers";
import { getSessionCookieName, setCookiesHeader } from "@/lib/utils";

// This is the Server Component for the Major Cabinets page.
// It fetches data on the server and passes it to the client component wrapper.
export default async function MajorCabinetsPageSSR() {
  let initialMajorCabinetsData = [];
  let error = null;

  // Optional: Session check if needed for authorization before fetching
  const session = await auth();
  // Example: if (!session || session.user.role !== 'ADMIN') { /* redirect or show error */ }

  try {
    const cookieStore = await cookies();
    const sessionCookieName = getSessionCookieName();
    const sessionTokenCookie = cookieStore.get(sessionCookieName);
    const headers = await setCookiesHeader({ sessionTokenCookie });

    const result = await getAllMajorCabinets({ headers }); // Fetch data on the server
    console.log("SSR Fetch Result (MajorCabinetsPageSSR):", result);
    if (result.success) {
      initialMajorCabinetsData = result.data || [];
    } else {
      console.error("SSR Fetch Error (MajorCabinetsPageSSR):", result.message);
      error = result.message || "Failed to fetch major cabinets on server.";
    }
  } catch (err) {
    console.error("SSR Catch Error (MajorCabinetsPageSSR):", err);
    error = "An unexpected error occurred while fetching data on server.";
  }

  // Define columns for the DataTable.
  // Only Headers and accessors/ids are defined here.
  // Cell rendering logic will be handled by MajorCabinetsDataTableWrapper.
  const columns = [
    { Header: "السنترال", accessorKey: "central" },
    { Header: "القرية", accessorKey: "village" },
    { Header: "رقم الكبينة", accessorKey: "cabinet" },
    {
      Header: "المسافة من السنترال",
      accessorKey: "central_to_cabinet_distance",
    },
    { Header: "عدد اللحامات", accessorKey: "number_of_joints" },
    { Header: "موقع اللحام", accessorKey: "joint_location" },
    // { Header: "الغرف", accessorKey: "rooms" },
    { Header: "موقع الغرف", accessorKey: "room_location" },
    { Header: "الاستحقاق", accessorKey: "entitlement" },
    { Header: "المسافة", accessorKey: "distance" },
    { Header: "المسؤول", accessorKey: "responsible" }, // Cell renderer to be added by client wrapper
    // { Header: "ملاحظات", accessorKey: "notes" }, // Cell renderer to be added by client wrapper
    { Header: "تاريخ الإنشاء", accessorKey: "createdAt" }, // Cell renderer to be added by client wrapper
  ];

  if (error && initialMajorCabinetsData.length === 0) {
    return (
      <div className="p-4 text-center text-red-500">
        <h1>خطأ في تحميل البيانات</h1>
        <p>{error}</p>
      </div>
    );
  }

  // Pass the server-fetched data and column definitions to the client component wrapper.
  return (
    <MajorCabinetsDataTableWrapper
      initialData={initialMajorCabinetsData}
      columns={columns}
    />
  );
}
