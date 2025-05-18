"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineDocumentDownload } from "react-icons/hi";

function convertToCSVAndDownload(data, filename = "data.csv") {
  if (!data || data.length === 0) {
    console.error("No data provided for CSV conversion");
    return;
  }

  // Extract headers from the first object
  const headers = Object.keys(data[0]);

  // Create CSV rows
  const csvRows = [
    headers.join(","), // Header row
    ...data.map((obj) =>
      headers
        .map((header) => {
          const value = obj[header];
          // Handle null/undefined values
          if (value == null) return "";
          // Convert to string and escape special characters
          const stringValue = String(value);
          // Escape quotes and wrap in quotes if necessary (contains commas, quotes, newlines, or non-ASCII characters)
          if (
            stringValue.includes(",") ||
            stringValue.includes('"') ||
            stringValue.includes("\n") ||
            /[^\x00-\x7F]/.test(stringValue)
          ) {
            return `"${stringValue.replace(/"/g, '""')}"`;
          }
          return stringValue;
        })
        .join(",")
    ),
  ];

  // Add UTF-8 BOM to ensure proper encoding for Arabic text
  const BOM = "\uFEFF";
  const csvContent = BOM + csvRows.join("\n");

  // Create a Blob and trigger download
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export default function DownloadCSVButton({ apiEndpoint, fileName }) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      // Fetch data from the provided API endpoint
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || window.location.origin;
      const url = new URL(apiEndpoint, baseUrl);
      const response = await fetch(url);
      const result = await response.json();

      // Get the data array from the response
      const data = result.data;

      // Ensure data is an array
      if (!Array.isArray(data)) {
        toast.error("خطأ في البيانات المسترجعة");
        console.error("Fetched data is not an array:", data);
        return;
      }

      // Convert and download CSV
      convertToCSVAndDownload(data, `${fileName}.csv`);
    } catch (error) {
      console.error("Error fetching or converting data:", error);
      toast.error("خطأ في تحميل CSV");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-end mt-4 px-4">
      <button
        onClick={handleDownload}
        disabled={loading}
        className="group relative flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 px-4 py-2.5 text-sm font-medium text-white hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 transition-all duration-200 shadow-md hover:shadow-lg"
        aria-label="Download CSV"
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          <>
            <HiOutlineDocumentDownload className="h-5 w-5" />
            <span className="hidden sm:inline">Download CSV</span>
          </>
        )}
      </button>
    </div>
  );
}
