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
} from "lucide-react";
import { useSession } from "next-auth/react";

// Define action buttons component
const ActionButtons = ({ row, onEdit, onDelete, userRole }) => {
  // Hide action buttons for MANAGER role
  if (userRole === "MANAGER") {
    return null;
  }

  return (
    <div className="flex items-center justify-end gap-1 flex-nowrap">
      <button
        onClick={() => onEdit(row.original)}
        className="p-1 text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
        title="تعديل"
      >
        <PencilIcon className="w-4 h-4" />
      </button>
      <button
        onClick={() => onDelete(row.original)}
        className="p-1 text-red-600 hover:text-red-800 transition-colors cursor-pointer"
        title="حذف"
      >
        <TrashIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default function DataTable({
  data = [],
  columns = [],
  onEdit = () => {},
  onDelete = () => {},
}) {
  const { data: session } = useSession();

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  // Add action column
  const columnsWithActions = [
    ...columns,
    {
      id: "actions",
      header: "الإجراءات",
      cell: ({ row }) => (
        <ActionButtons
          row={row}
          onEdit={onEdit}
          onDelete={onDelete}
          userRole={session?.user?.role}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
  ];

  const table = useReactTable({
    data,
    columns: columnsWithActions,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: false,
  });
  return (
    <div className="w-full">
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
                    className="border-b hover:bg-gray-50 transition-colors"
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
                    colSpan={columnsWithActions.length}
                    className="py-6 text-center text-gray-500"
                  >
                    لا توجد بيانات
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>{" "}
        {/* Pagination Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-t">
          <div className="text-sm text-gray-700 whitespace-nowrap">
            {`عرض ${
              pagination.pageSize * pagination.pageIndex + 1
            } إلى ${Math.min(
              (pagination.pageIndex + 1) * pagination.pageSize,
              data.length
            )} من ${data.length} عنصر`}
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
