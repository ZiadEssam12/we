"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonWithLoading from "@/components/buttonWithLoading/ButtonWithLoading";
import toast from "react-hot-toast";
import {
  registerNewUserSchema,
  updateUserSchema,
} from "@/schemas/registerNewUser";

// Validation schema for User form
const UserSchema = Yup.object().shape({
  userName: Yup.string().required("اسم المستخدم مطلوب"),
  name: Yup.string().required("الاسم مطلوب"),
  phoneNumber: Yup.string().required("رقم الهاتف مطلوب"),
  role: Yup.string().required("الدور مطلوب"),
  password: Yup.string().when("isNewUser", {
    is: true,
    then: () =>
      Yup.string()
        .min(6, "كلمة المرور يجب أن تكون على الأقل 6 أحرف")
        .required("كلمة المرور مطلوبة"),
  }),
  confirmPassword: Yup.string().when("password", {
    is: (val) => !!val,
    then: () =>
      Yup.string()
        .required("تأكيد كلمة المرور مطلوب")
        .oneOf([Yup.ref("password")], "كلمة المرور غير متطابقة"),
  }),
});

// Form component for Users using useFormik hook
export default function UserForm({ initialData, onSubmit, isProcessing }) {
  const isNewUser = !initialData;

  // Initialize formik hook
  const formik = useFormik({
    initialValues: {
      userName: initialData?.userName || "",
      name: initialData?.name || "",
      phoneNumber: initialData?.phoneNumber || "",
      role: initialData?.role || "USER",
      password: "",
      confirmPassword: "",
      isNewUser, // Used for conditional validation
    },
    validationSchema: UserSchema,
    onSubmit: (values) => {
      const submitData = { ...values };
      delete submitData.confirmPassword;
      delete submitData.isNewUser;

      // If editing and no password is provided, remove password field
      if (!isNewUser && !submitData.password) {
        delete submitData.password;
      }

      onSubmit(submitData);
    },
  });

  // Helper to determine field error classes
  const getInputClassName = (fieldName) => {
    const hasError = formik.touched[fieldName] && formik.errors[fieldName];
    return `mt-1 block w-full rounded-md shadow-sm p-2 border ${
      hasError ? "border-red-500" : "border-gray-300"
    }`;
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-4 overflow-y-auto max-h-[70vh] p-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="userName"
            className="block text-sm font-medium text-gray-700"
          >
            اسم المستخدم
          </label>
          <input
            id="userName"
            name="userName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
            className={getInputClassName("userName")}
          />
          {formik.touched.userName && formik.errors.userName && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.userName}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            الاسم
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={getInputClassName("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.name}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            رقم الهاتف
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            className={getInputClassName("phoneNumber")}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.phoneNumber}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            الدور
          </label>
          <select
            id="role"
            name="role"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.role}
            className={getInputClassName("role")}
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
      </div>

      {/* Show password fields only for new users or when editing */}
      {isNewUser && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              كلمة المرور
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={getInputClassName("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              تأكيد كلمة المرور
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              className={getInputClassName("confirmPassword")}
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

      {/* Optional - Show password change option for existing users */}
      {!isNewUser && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <div className="text-sm text-gray-600 mb-2">
            لتغيير كلمة المرور، يرجى تعبئة الحقول أدناه. اتركها فارغة إذا كنت لا
            تريد تغيير كلمة المرور.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                كلمة المرور الجديدة
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={getInputClassName("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                تأكيد كلمة المرور الجديدة
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className={getInputClassName("confirmPassword")}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.confirmPassword}
                  </div>
                )}
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <ButtonWithLoading
          loading={isProcessing}
          text={initialData ? "تحديث" : "إضافة"}
          areaLabel={initialData ? "تحديث" : "إضافة"}
          valid={formik.isValid && formik.dirty}
        />
      </div>
    </form>
  );
}
