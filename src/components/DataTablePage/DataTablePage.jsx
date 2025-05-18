import React from "react";
import { auth } from "@/app/auth";
import { cookies } from "next/headers";
import { getSessionCookieName, setCookiesHeader } from "@/lib/utils";
import DownloadCSVButton from "../ButtonDownloadCSV/ButtonDownloadCSV";

/**
 * Generic server component for data table pages
 * @param {Object} props - Component props
 * @param {Function} props.fetchData - Function to fetch data (e.g., getAllMajorCabinets)
 * @param {React.ComponentType} props.DataTableWrapper - Client component to render the data table
 * @param {Array} props.columns - Column definitions for the table
 * @param {string} props.title - Page title
 * @param {string} props.errorTitle - Title to display when there's an error
 * @param {string} props.apiEndpoint - API endpoint for downloading data (optional)
 * @returns {React.ReactElement} Rendered component
 */
export default async function DataTablePage({
  fetchData,
  DataTableWrapper,
  columns,
  title,
  errorTitle = "خطأ في تحميل البيانات",
  apiEndpoint,
}) {
  let initialData = [];
  let error = null;

  // Get authentication session
  const session = await auth();
  // You can add authorization checks here if needed
  // if (!session || session.user.role !== 'ADMIN') { /* redirect or show error */ }

  try {
    // Set up cookies for server-side API request
    const cookieStore = await cookies();
    const sessionCookieName = getSessionCookieName();
    const sessionTokenCookie = cookieStore.get(sessionCookieName);
    const headers = await setCookiesHeader({ sessionTokenCookie });

    // Fetch data using provided function
    const result = await fetchData({ headers });
    console.log(`SSR Fetch Result for ${title}:`, result);

    if (result.success) {
      initialData = result.data || [];
    } else {
      console.error(`SSR Fetch Error for ${title}:`, result.message);
      error = result.message || "Failed to fetch data on server.";
    }
  } catch (err) {
    console.error(`SSR Catch Error for ${title}:`, err);
    error = "An unexpected error occurred while fetching data on server.";
  }

  // Display error if no data could be fetched
  if (error && initialData.length === 0) {
    return (
      <div className="p-4 text-center text-red-500">
        <h1>{errorTitle}</h1>
        <p>{error}</p>
      </div>
    );
  }
  // Determine the module from fetchData function name or apiEndpoint
  const getModuleFromFetchData = (fetchDataFunc) => {
    const functionName = fetchDataFunc.name;
    if (functionName.includes("MajorCabinets")) return "major-cabinets";
    if (functionName.includes("SecondaryCabinets")) return "secondary-cabinets";
    if (functionName.includes("MobileTowers")) return "mobile-towers";
    if (functionName.includes("CopperLines")) return "copper-lines";
    if (functionName.includes("Users")) return "users";
    return null;
  };

  // Get module name for CSV export
  const moduleParam = getModuleFromFetchData(fetchData);

  // Format title for file name (remove spaces, make lowercase)
  const fileName = title.replace(/\s+/g, "-").toLowerCase();
  // Render the page with data table
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-l from-blue-600 to-purple-600 text-transparent bg-clip-text animate-gradient-text leading-tight text-center mb-6">
        {title}
      </h1>

      <DataTableWrapper initialData={initialData} columns={columns} />
      {session?.user?.role === "ADMIN" && moduleParam && (
        <DownloadCSVButton
          apiEndpoint={`/api/export-csv?module=${moduleParam}`}
          fileName={fileName}
        />
      )}
    </>
  );
}
