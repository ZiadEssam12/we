"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { DataTable } from "../DataTable/DynamicDataTable";
import { NewUserForm } from "@/app/(website)/dashboard/(admin)/users/NewUserForm";

export default function UserDataTableWrapper({ data, columns }) {
  const [usersData, setUsersData] = useState(data);
  const [updatUserData, setUpdateUserData] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const { data: session } = useSession();
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    console.log("close modal");
    setOpenModal(false);
    setUpdateUserData(null);
    setIsUpdate(false);
  };

  const handleDelete = (row) => {
    console.log(row);
    // Handle delete logic here
  };

  const handleUpdate = (row) => {
    console.log(row);
    // Handle edit logic here
    setOpenModal(true);
    setIsUpdate(true);
    setUpdateUserData(row);
    // Open the edit modal or perform any other action
  };

  return (
    <>
      <div className="overflow-auto w-full">
        <DataTable
          data={usersData}
          columns={columns}
          onEdit={handleUpdate}
          onDelete={handleDelete}
          {...(session?.user?.role === "ADMIN" && {
            CustomModal: () => (
              <NewUserForm
                setUsersData={setUsersData}
                userData={usersData}
                setOpenModal={setOpenModal}
                openModal={openModal}
                updatUserData={updatUserData}
                handleCloseModal={handleCloseModal}
                isUpdate={isUpdate}
                handleUpdate={handleUpdate}
              />
            ),
          })}
        />
      </div>
    </>
  );
}
