"use client";
import { MaterialSymbolsLightClose } from "@/app/icons/Icons";
import LoadingButton from "@/components/buttonWithLoading/ButtonWithLoading";
import Modal from "@/components/UI/Modal/Modal";
import { createUser, updateUser } from "@/lib/api";
import {
  initalRegisterNewUserValues,
  registerNewUserSchema,
  updateUserSchema,
} from "@/schemas/registerNewUser";
import { Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function NewUser({
  setUsersData,
  openModal,
  setOpenModal,
  handleCloseModal,
  updatUserData,
  isUpdate,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (user) => {
    setIsLoading(true);

    const result = await createUser({
      user,
    });

    if (!result.success) {
      toast.error(result.message);
    }
    if (result.success) {
      toast.success(result.message);
      setUsersData((prev) => [result.user, ...prev]);
      formik.resetForm();
      setOpenModal(false);
    }
    setIsLoading(false);
  };

  const handleUpdateSubmit = async (user) => {
    setIsLoading(true);

    const result = await updateUser({ user });
    if (!result.success) {
      toast.error(result.message);
    }
    if (result.success) {
      toast.success(result.message);
      setUsersData(
        (prev) => prev.map((u) => (u.id === user.id ? result.user : u)) // Use user.id from form values
      );

      handleCloseModal();
    }
    setIsLoading(false);
  };

  const formik = useFormik({
    initialValues: isUpdate
      ? {
          id: updatUserData?.id || "", // Add the id here
          userName: updatUserData?.userName || "",
          name: updatUserData?.name || "",
          phoneNumber: updatUserData?.phoneNumber || "",
          role: updatUserData?.role || "USER",
        }
      : initalRegisterNewUserValues,
    validationSchema: isUpdate ? updateUserSchema : registerNewUserSchema,
    onSubmit: isUpdate ? handleUpdateSubmit : handleSubmit,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <>
      <Modal open={openModal} onClose={handleCloseModal}>
        <div className="flex flex-col gap-4 text-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl text-blue-700 font-bold">
              {isUpdate ? "تعديل مستخدم" : "إضافة مستخدم"}
            </h2>
            <button
              onClick={handleCloseModal}
              title="إغلاق"
              className="p-2 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <MaterialSymbolsLightClose width={24} height={24} />
            </button>
          </div>

          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                الاسم
              </Label>
              <TextInput
                id="name"
                name="name"
                type="text"
                placeholder="الاسم الكامل"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                required
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.name}
                </div>
              )}
            </div>

            <div>
              <Label
                htmlFor="userName"
                className="block text-sm font-medium text-gray-700"
              >
                اسم المستخدم
              </Label>
              <TextInput
                id="userName"
                name="userName"
                type="text"
                placeholder="اسم المستخدم"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
                required
              />
              {formik.touched.userName && formik.errors.userName && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.userName}
                </div>
              )}
            </div>

            <div>
              <Label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                رقم الهاتف
              </Label>
              <TextInput
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                className="flex justify-end"
                required
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.phoneNumber}
                </div>
              )}
            </div>

            {!isUpdate && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    كلمة المرور
                  </Label>
                  <TextInput
                    id="password"
                    name="password"
                    type="password"
                    placeholder="كلمة المرور"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    required
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.password}
                    </div>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    تأكيد كلمة المرور
                  </Label>
                  <TextInput
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="تأكيد كلمة المرور"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    required
                  />
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <div className="text-red-500 text-sm mt-1">
                        {formik.errors.confirmPassword}
                      </div>
                    )}
                </div>
              </div>
            )}

            <div>
              <Label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                الدور
              </Label>
              <select
                id="role"
                name="role"
                className="mt-1 block w-full border-gray-300 border-[2px] py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.role}
                required
              >
                <option value="" disabled>
                  اختر دورًا
                </option>
                <option value="ADMIN">مدير</option>
                <option value="USER">مستخدم</option>
                <option value="MANAGER">مشرف</option>
              </select>
              {formik.touched.role && formik.errors.role && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.role}
                </div>
              )}
            </div>

            <LoadingButton
              text={isUpdate ? "تعديل مستخدم" : "إضافة مستخدم"}
              areaLabel={isUpdate ? "تعديل مستخدم" : "إضافة مستخدم"}
              valid={
                formik.isValid &&
                formik.dirty &&
                Object.keys(formik.errors).length === 0
              }
              loading={isLoading}
            />
          </form>
        </div>
      </Modal>
    </>
  );
}
