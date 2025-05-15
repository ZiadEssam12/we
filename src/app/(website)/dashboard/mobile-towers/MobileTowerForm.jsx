"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonWithLoading from "@/components/buttonWithLoading/ButtonWithLoading";

// Validation schema for Mobile Tower form
const MobileTowerSchema = Yup.object().shape({
  central: Yup.string().required("السنترال مطلوب"),
  cable_name: Yup.string().required("اسم الكابل مطلوب"),
  tower_code: Yup.string().required("كود البرج مطلوب"),
  company: Yup.string().required("الشركة مطلوبة"),
  entitlement: Yup.string().required("الاستحقاق مطلوب"),
  distance: Yup.string().required("المسافة مطلوبة"),
  address: Yup.string().required("العنوان مطلوب"),
  location: Yup.string().required("الموقع مطلوب"),
  responsible: Yup.string().nullable(),
  notes: Yup.string().nullable(),
});

// Form component for Mobile Towers using useFormik hook
export default function MobileTowerForm({
  initialData,
  onSubmit,
  isProcessing,
}) {
  // Initialize formik hook
  const formik = useFormik({
    initialValues: {
      central: initialData?.central || "",
      cable_name: initialData?.cable_name || "",
      tower_code: initialData?.tower_code || "",
      company: initialData?.company || "",
      entitlement: initialData?.entitlement || "",
      distance: initialData?.distance || "",
      address: initialData?.address || "",
      location: initialData?.location || "",
      responsible: initialData?.responsible || "",
      notes: initialData?.notes || "",
    },
    validationSchema: MobileTowerSchema,
    onSubmit: (values) => {
      onSubmit(values);
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
            htmlFor="central"
            className="block text-sm font-medium text-gray-700"
          >
            السنترال
          </label>
          <input
            id="central"
            name="central"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.central}
            className={getInputClassName("central")}
          />
          {formik.touched.central && formik.errors.central && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.central}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="cable_name"
            className="block text-sm font-medium text-gray-700"
          >
            اسم الكابل
          </label>
          <input
            id="cable_name"
            name="cable_name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cable_name}
            className={getInputClassName("cable_name")}
          />
          {formik.touched.cable_name && formik.errors.cable_name && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.cable_name}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="tower_code"
            className="block text-sm font-medium text-gray-700"
          >
            كود البرج
          </label>
          <input
            id="tower_code"
            name="tower_code"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tower_code}
            className={getInputClassName("tower_code")}
          />
          {formik.touched.tower_code && formik.errors.tower_code && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.tower_code}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700"
          >
            الشركة
          </label>
          <input
            id="company"
            name="company"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.company}
            className={getInputClassName("company")}
          />
          {formik.touched.company && formik.errors.company && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.company}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="entitlement"
            className="block text-sm font-medium text-gray-700"
          >
            الاستحقاق
          </label>
          <input
            id="entitlement"
            name="entitlement"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.entitlement}
            className={getInputClassName("entitlement")}
          />
          {formik.touched.entitlement && formik.errors.entitlement && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.entitlement}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="distance"
            className="block text-sm font-medium text-gray-700"
          >
            المسافة
          </label>
          <input
            id="distance"
            name="distance"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.distance}
            className={getInputClassName("distance")}
          />
          {formik.touched.distance && formik.errors.distance && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.distance}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            العنوان
          </label>
          <input
            id="address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            className={getInputClassName("address")}
          />
          {formik.touched.address && formik.errors.address && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.address}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            الموقع
          </label>
          <input
            id="location"
            name="location"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location}
            className={getInputClassName("location")}
            placeholder="latitude,longitude"
          />
          {formik.touched.location && formik.errors.location && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.location}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="responsible"
            className="block text-sm font-medium text-gray-700"
          >
            المسؤول
          </label>{" "}
          <input
            id="responsible"
            name="responsible"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.responsible}
            className={getInputClassName("responsible")}
          />
          {formik.touched.responsible && formik.errors.responsible && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.responsible}
            </div>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-medium text-gray-700"
        >
          ملاحظات
        </label>{" "}
        <textarea
          id="notes"
          name="notes"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.notes}
          className={getInputClassName("notes")}
          rows={3}
        />
        {formik.touched.notes && formik.errors.notes && (
          <div className="text-red-500 text-sm mt-1">{formik.errors.notes}</div>
        )}
      </div>

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
