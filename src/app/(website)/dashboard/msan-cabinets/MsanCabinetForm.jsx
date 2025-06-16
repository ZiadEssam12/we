"use client";
import React from "react";
import { useFormik } from "formik";
import ButtonWithLoading from "@/components/buttonWithLoading/ButtonWithLoading";
import { Label, TextInput, Textarea } from "flowbite-react";

import { msanCabinetSchema } from "@/schemas/msanCabinet";

export default function MsanCabinetForm({
  initialData,
  onSubmit,
  isProcessing,
  formStyle = "flex flex-col  gap-3 overflow-y-auto max-h-[70vh] p-4",
  hideSubmitButton = false,
  renderCustomButtons,
  readOnly = false,
}) {
  const formik = useFormik({
    initialValues: {
      cabinet_name: initialData?.cabinet_name || "",
      cable_number: initialData?.cable_number || "",
      cable_capacity: initialData?.cable_capacity || "",
      distance_from_central: initialData?.distance_from_central || "",
      odf_name: initialData?.odf_name || "",
      cassette_number: initialData?.cassette_number || "",
      branches: initialData?.branches || "",
      spares: initialData?.spares || "",
      cabinet_location: initialData?.cabinet_location || "",
      responsible: initialData?.responsible || "",
      notes: initialData?.notes || "",
    },
    validationSchema: msanCabinetSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
    enableReinitialize: true, // Important for pre-filling form in update mode
  });

  // Helper to generate form fields
  const renderTextInput = (id, label, placeholder = "", type = "text") => (
    <div key={id}>
      <Label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </Label>
      <TextInput
        id={id}
        name={id}
        type={type}
        placeholder={placeholder || label}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[id]}
        disabled={readOnly}
      />
      {formik.touched[id] && formik.errors[id] && (
        <div className="text-red-500 text-sm mt-1">{formik.errors[id]}</div>
      )}
    </div>
  );

  return (
    <form onSubmit={formik.handleSubmit} className={formStyle}>
      {renderTextInput("cabinet_name", "اسم الكابينة")}
      {renderTextInput("cable_number", "رقم الكابل")}
      {renderTextInput("cable_capacity", "سعة الكابل")}
      {renderTextInput("distance_from_central", "المسافة من السنترال")}
      {renderTextInput("odf_name", "اسم ODF")}
      {renderTextInput("cassette_number", "رقم الكاست")}
      {renderTextInput("branches", "الفروع")}
      {renderTextInput("spares", "الاحتياط")}
      {renderTextInput("cabinet_location", "موقع الكابينة (lat,lng)")}
      {renderTextInput("responsible", "المسؤول")}
      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <Label
          htmlFor="notes"
          className="block text-sm font-medium text-gray-700"
        >
          ملاحظات
        </Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="ملاحظات"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.notes}
          rows={3}
          disabled={readOnly}
          className="w-full"
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
