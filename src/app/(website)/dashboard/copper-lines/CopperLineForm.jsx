"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonWithLoading from "@/components/buttonWithLoading/ButtonWithLoading";

// Validation schema for Copper Line form - update error messages to match new labels
const CopperLineSchema = Yup.object().shape({
  landline_number: Yup.string().required("رقم الخط الارضي مطلوب"),
  central: Yup.string().required("السنترال مطلوب"),
  village: Yup.string().required("البلد مطلوب"),
  cabinet_number: Yup.string().required("رقم الكابينة مطلوب"),
  port_number: Yup.string().required("رقم البورت مطلوب"),
  terminal_number: Yup.string().required("رقم الترمنال مطلوب"),
  cabinet_location: Yup.string().required("موقع الكابينة مطلوب"),
  box_number: Yup.string().required("رقم البوكس مطلوب"),
  box_entitlement: Yup.string().required("استحقاق البوكس مطلوب"),
  box_location: Yup.string().required("موقع البوكس مطلوب"),
  joint_location: Yup.string().required("موقع اللحامات مطلوب"),
  joint_entitlement: Yup.string().required("استحقاق اللحامات مطلوب"),
  joint_depth: Yup.string().required("عمق المسافة اللحامة مطلوب"),
  room_location: Yup.string().required("موقع الغرفة مطلوب"),
  insulation_level: Yup.string().required("مستوي العزل مطلوب"),
  responsible: Yup.string().nullable(),
  notes: Yup.string().nullable(),
});

// Form component for Copper Lines using useFormik hook
export default function CopperLineForm({
  initialData,
  onSubmit,
  isProcessing,
  formStyle = null, 
  hideSubmitButton = false,
  renderCustomButtons,
  readOnly = false,
}) {
  // Initialize formik hook
  const formik = useFormik({
    initialValues: {
      landline_number: initialData?.landline_number || "",
      central: initialData?.central || "",
      village: initialData?.village || "",
      cabinet_number: initialData?.cabinet_number || "",
      port_number: initialData?.port_number || "",
      terminal_number: initialData?.terminal_number || "",
      cabinet_location: initialData?.cabinet_location || "",
      box_number: initialData?.box_number || "",
      box_entitlement: initialData?.box_entitlement || "",
      box_location: initialData?.box_location || "",
      joint_location: initialData?.joint_location || "",
      joint_entitlement: initialData?.joint_entitlement || "",
      joint_depth: initialData?.joint_depth || "",
      room_location: initialData?.room_location || "",
      insulation_level: initialData?.insulation_level || "",
      responsible: initialData?.responsible || "",
      notes: initialData?.notes || "",
    },
    validationSchema: CopperLineSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
    enableReinitialize: true, // Add this to update form when initialData changes
  });

  // Helper to determine field error classes
  const getInputClassName = (fieldName) => {
    const hasError = formik.touched[fieldName] && formik.errors[fieldName];
    return `mt-1 block w-full rounded-md shadow-sm p-2 border ${
      hasError ? "border-red-500" : "border-gray-300"
    }`;
  };

  return (
    <form onSubmit={formik.handleSubmit} className={formStyle}>
      <div>
        <label
          htmlFor="landline_number"
          className="block text-sm font-medium text-gray-700"
        >
          رقم الخط الارضي
        </label>
        <input
          id="landline_number"
          name="landline_number"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.landline_number}
          className={getInputClassName("landline_number")}
        />
        {formik.touched.landline_number && formik.errors.landline_number && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.landline_number}
          </div>
        )}
      </div>

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
          htmlFor="village"
          className="block text-sm font-medium text-gray-700"
        >
          البلد
        </label>
        <input
          id="village"
          name="village"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.village}
          className={getInputClassName("village")}
        />
        {formik.touched.village && formik.errors.village && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.village}
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="cabinet_number"
          className="block text-sm font-medium text-gray-700"
        >
          رقم الكابينة
        </label>
        <input
          id="cabinet_number"
          name="cabinet_number"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cabinet_number}
          className={getInputClassName("cabinet_number")}
        />
        {formik.touched.cabinet_number && formik.errors.cabinet_number && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.cabinet_number}
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="port_number"
          className="block text-sm font-medium text-gray-700"
        >
          رقم البورت
        </label>
        <input
          id="port_number"
          name="port_number"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.port_number}
          className={getInputClassName("port_number")}
        />
        {formik.touched.port_number && formik.errors.port_number && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.port_number}
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="terminal_number"
          className="block text-sm font-medium text-gray-700"
        >
          رقم الترمنال
        </label>
        <input
          id="terminal_number"
          name="terminal_number"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.terminal_number}
          className={getInputClassName("terminal_number")}
        />
        {formik.touched.terminal_number && formik.errors.terminal_number && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.terminal_number}
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="cabinet_location"
          className="block text-sm font-medium text-gray-700"
        >
          موقع الكابينة
        </label>
        <input
          id="cabinet_location"
          name="cabinet_location"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cabinet_location}
          className={getInputClassName("cabinet_location")}
        />
        {formik.touched.cabinet_location && formik.errors.cabinet_location && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.cabinet_location}
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="box_number"
          className="block text-sm font-medium text-gray-700"
        >
          رقم البوكس
        </label>
        <input
          id="box_number"
          name="box_number"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.box_number}
          className={getInputClassName("box_number")}
        />
        {formik.touched.box_number && formik.errors.box_number && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.box_number}
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="box_entitlement"
          className="block text-sm font-medium text-gray-700"
        >
          استحقاق البوكس
        </label>
        <input
          id="box_entitlement"
          name="box_entitlement"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.box_entitlement}
          className={getInputClassName("box_entitlement")}
        />
        {formik.touched.box_entitlement && formik.errors.box_entitlement && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.box_entitlement}
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="box_location"
          className="block text-sm font-medium text-gray-700"
        >
          موقع البوكس
        </label>
        <input
          id="box_location"
          name="box_location"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.box_location}
          className={getInputClassName("box_location")}
        />
        {formik.touched.box_location && formik.errors.box_location && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.box_location}
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="joint_location"
          className="block text-sm font-medium text-gray-700"
        >
          موقع اللحامات
        </label>
        <input
          id="joint_location"
          name="joint_location"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.joint_location}
          className={getInputClassName("joint_location")}
        />
        {formik.touched.joint_location && formik.errors.joint_location && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.joint_location}
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="joint_entitlement"
          className="block text-sm font-medium text-gray-700"
        >
          استحقاق اللحامات
        </label>
        <input
          id="joint_entitlement"
          name="joint_entitlement"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.joint_entitlement}
          className={getInputClassName("joint_entitlement")}
        />
        {formik.touched.joint_entitlement &&
          formik.errors.joint_entitlement && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.joint_entitlement}
            </div>
          )}
      </div>

      <div>
        <label
          htmlFor="joint_depth"
          className="block text-sm font-medium text-gray-700"
        >
          عمق المسافة اللحامة
        </label>
        <input
          id="joint_depth"
          name="joint_depth"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.joint_depth}
          className={getInputClassName("joint_depth")}
        />
        {formik.touched.joint_depth && formik.errors.joint_depth && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.joint_depth}
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="room_location"
          className="block text-sm font-medium text-gray-700"
        >
          موقع الغرفة
        </label>
        <input
          id="room_location"
          name="room_location"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.room_location}
          className={getInputClassName("room_location")}
        />
        {formik.touched.room_location && formik.errors.room_location && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.room_location}
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="insulation_level"
          className="block text-sm font-medium text-gray-700"
        >
          مستوي العزل
        </label>
        <input
          id="insulation_level"
          name="insulation_level"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.insulation_level}
          className={getInputClassName("insulation_level")}
        />
        {formik.touched.insulation_level && formik.errors.insulation_level && (
          <div className="text-red-500 text-sm mt-1">
            {formik.errors.insulation_level}
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="responsible"
          className="block text-sm font-medium text-gray-700"
        >
          المسؤول
        </label>
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

      <div className="col-span-1 md:col-span-2 lg:col-span-3 w-full">
        <label
          htmlFor="notes"
          className="block text-sm font-medium text-gray-700"
        >
          الملاحظات
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.notes}
          className={getInputClassName("notes")}
        />
        {formik.touched.notes && formik.errors.notes && (
          <div className="text-red-500 text-sm mt-1">{formik.errors.notes}</div>
        )}
      </div>

      {!hideSubmitButton && (
        <ButtonWithLoading
          loading={isProcessing}
          text={initialData ? "تحديث" : "إضافة"}
          areaLabel={initialData ? "تحديث" : "إضافة"}
          valid={formik.isValid && formik.dirty}
        />
      )}
      {renderCustomButtons && renderCustomButtons(formik)}
    </form>
  );
}
