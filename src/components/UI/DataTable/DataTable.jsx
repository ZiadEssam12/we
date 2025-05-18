"use client";

import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  PencilIcon,
  TrashIcon,
  Search,
  X,
} from "lucide-react";
import { LineMdLoadingLoop } from "@/app/icons/Icons";

export default function DataTable({
  data = [],
  columns = [],
  setOpenModal,
  handleSearch,
  isLoading = false,
}) {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [globalFilter, setGlobalFilter] = useState(""); // Use columns directly as provided by parent component
  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      // globalFilter,
    },
    onPaginationChange: setPagination,
    // onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    // getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: "includesString",
    manualPagination: false,
  });
  const handleSearchfn = (e) => {
    e.preventDefault(); // Prevent page reload
    handleSearch(globalFilter); // Pass only the search term
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="relative">
          {" "}
          <form className="flex items-center gap-3" onSubmit={handleSearchfn}>
            {" "}
            <div className="flex items-center">
              <input
                type="text"
                placeholder="بحث..."
                className="py-2 px-4 pr-10 w-[250px] border border-gray-300 rounded-lg focus:outline-none focus:ring-0 "
                value={globalFilter || ""}
                disabled={isLoading}
                onChange={(e) => setGlobalFilter(e.target.value)}
              />
              <div className="absolute right-3 inset-y-0 flex items-center">
                {globalFilter ? (
                  <button
                    type="reset"
                    onClick={() => setGlobalFilter("")}
                    className="text-gray-400 hover:text-gray-600 focus:outline-none"
                    title="مسح البحث"
                  >
                    <X className="h-4 w-4" />
                  </button>
                ) : (
                  <Search className="h-4 w-4 text-gray-400" />
                )}
              </div>
            </div>{" "}
            <button
              disabled={isLoading}
              type="submit"
              className={`flex cursor-pointer items-center gap-1 py-2 px-4 rounded-lg bg-gradient-to-br transition-colors duration-150 shadow-md 
    ${
      isLoading
        ? "from-blue-400 to-purple-400 opacity-70 cursor-not-allowed"
        : "from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
    } text-white`}
            >
              {isLoading ? (
                <LineMdLoadingLoop className="h-4 w-4 animate-spin" />
              ) : (
                <Search className="h-4 w-4" />
              )}
              <span>بحث</span>
            </button>
          </form>
        </div>
        <button
          onClick={() => setOpenModal(true)}
          className="py-2 px-4 cursor-pointer rounded-lg bg-black hover:bg-black/80 border border-black  text-white transition-colors duration-150 "
        >
          إضافة
        </button>
      </div>
      <div className="rounded-md border bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b max-w-7xl">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-3 text-right font-medium text-gray-700 whitespace-nowrap"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b hover:bg-gray-50 transition-colors relative"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-4 py-3 text-gray-700">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="py-6 text-center text-gray-500"
                  >
                    لا توجد بيانات لعرضها
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>{" "}
        {/* Pagination Controls */}{" "}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-t">
          <div className="text-sm text-gray-700 whitespace-nowrap">
            {`عرض ${
              table.getFilteredRowModel().rows.length > 0
                ? pagination.pageSize * pagination.pageIndex + 1
                : 0
            } إلى ${Math.min(
              (pagination.pageIndex + 1) * pagination.pageSize,
              table.getFilteredRowModel().rows.length
            )} من ${table.getFilteredRowModel().rows.length} عنصر`}
          </div>

          <div className="flex items-center space-x-2 space-x-reverse">
            <button
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
              className="p-1 rounded-md border disabled:opacity-50"
            >
              <ChevronsRightIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="p-1 rounded-md border disabled:opacity-50"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="p-1 rounded-md border disabled:opacity-50 cursor-pointer"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
              className="p-1 rounded-md border disabled:opacity-50 cursor-pointer"
            >
              <ChevronsLeftIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
