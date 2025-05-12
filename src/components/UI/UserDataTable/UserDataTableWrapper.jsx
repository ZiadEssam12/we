"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { DataTable } from "../DataTable/DynamicDataTable";
import { NewUserForm } from "@/app/(website)/dashboard/(admin)/users/NewUserForm";

export default function UserDataTableWrapper({ data, columns }) {
  const [usersData, setUsersData] = useState(data);

  const { data: session } = useSession();

  const onDelete = (row) => {
    console.log(row);
    // Handle delete logic here
  };

  const onEdit = (row) => {
    console.log(row);
    // Handle edit logic here
  };
  return (
    <>
      <div className="w-full mb-4">
        {session?.user?.role === "ADMIN" && (
          <NewUserForm setUsersData={setUsersData} />
        )}
      </div>
      <div className="overflow-auto w-full">
        <DataTable
          data={usersData}
          columns={columns}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </div>
    </>
  );
}
