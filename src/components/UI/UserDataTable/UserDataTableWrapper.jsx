"use client";

import React, { useState } from "react";
import DataTable from "@/components/UI/DataTable/DataTable";
import { useSession } from "next-auth/react";
import NewUser from "@/app/(website)/dashboard/(admin)/users/NewUser";

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
      <DataTable
        data={usersData}
        columns={columns}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <div className="flex justify-end mt-4">
        {session?.user?.role === "ADMIN" && (
          <NewUser setUsersData={setUsersData} />
        )}
      </div>
    </>
  );
}
