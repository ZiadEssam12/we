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
  PlusCircle,
} from "lucide-react";
import { LineMdLoadingLoop } from "@/app/icons/Icons";
import { usePermission } from "@/app/hooks/RBAC";

export default function DataTable({
  data = [],
  columns = [],
  setOpenModal,
  handleSearch,
  isLoading = false,
  entityName = null,
}) {
  const { hasPermission } = usePermission();

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
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-2 lg:mb-4">
        <div className="relative w-full sm:w-auto flex-grow lg:max-w-[400px] xl:max-w-[600px]">
          <form
            className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full"
            onSubmit={handleSearchfn}
          >
            <div className="relative w-full lg:max-w-[250px]">
              <input
                type="text"
                placeholder="بحث..."
                className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-0"
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
                    <X
                      width={20}
                      height={20}
                      className="sm:width-25 sm:height-25"
                    />
                  </button>
                ) : (
                  <Search
                    width={20}
                    height={20}
                    className="text-gray-400 sm:width-25 sm:height-25"
                  />
                )}
              </div>
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className={`w-full sm:w-auto flex justify-center items-center gap-1 py-2 px-4 rounded-lg bg-gradient-to-br transition-colors duration-150 shadow-md 
              ${
                isLoading
                  ? "from-blue-400 to-purple-400 opacity-70 cursor-not-allowed"
                  : "from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
              } text-white`}
            >
              {isLoading ? (
                <LineMdLoadingLoop
                  width={20}
                  height={20}
                  className="sm:width-25 sm:height-25"
                />
              ) : (
                <Search
                  width={20}
                  height={20}
                  className="sm:width-25 sm:height-25"
                />
              )}
              <span className="inline">بحث</span>
            </button>
          </form>
        </div>

        {hasPermission(entityName, "create") && (
          <button
            onClick={() => setOpenModal(true)}
            className="w-full sm:w-auto mt-2 sm:mt-0 group flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 px-4 py-2 font-medium text-white hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <PlusCircle
              width={20}
              height={20}
              className="sm:width-25 sm:height-25"
            />
            <span className="inline">إضافة</span>
          </button>
        )}
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
                    className="border-b last:border-b-0 hover:bg-gray-50/80 transition-all duration-200 ease-in-out relative even:bg-gray-50/30 group"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-4 py-3.5 text-gray-700 group-hover:text-gray-900 transition-colors"
                      >
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
