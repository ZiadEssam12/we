"use client";
import React from "react";
import { useFormik } from "formik";
import ButtonWithLoading from "@/components/buttonWithLoading/ButtonWithLoading";
import { Label, TextInput, Textarea } from "flowbite-react"; // Assuming Textarea is available or similar

import { majorCabinetSchema } from "@/schemas/majorCabinet";

export default function MajorCabinetForm({
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
      // id: initialData.id || "",
      central: initialData?.central || "",
      village: initialData?.village || "",
      cabinet: initialData?.cabinet || "",
      central_to_cabinet_distance:
        initialData?.central_to_cabinet_distance || "",
      number_of_joints: initialData?.number_of_joints || 0,
      joint_location: initialData?.joint_location || "",
      rooms: initialData?.rooms || "",
      room_location: initialData?.room_location || "",
      entitlement: initialData?.entitlement || "",
      distance: initialData?.distance || "",
      responsible: initialData?.responsible || "",
      notes: initialData?.notes || "",
    },
    validationSchema: majorCabinetSchema,
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
        // required={majorCabinetSchema.fields[id]?.isRequired()}
      />
      {formik.touched[id] && formik.errors[id] && (
        <div className="text-red-500 text-sm mt-1">{formik.errors[id]}</div>
      )}
    </div>
  );

  return (
    <form onSubmit={formik.handleSubmit} className={formStyle}>
      {/* Added padding-right for scrollbar */}
      {renderTextInput("central", "السنترال")}
      {renderTextInput("village", "القرية")}
      {renderTextInput("cabinet", "رقم الكبينة")}
      {renderTextInput(
        "central_to_cabinet_distance",
        "المسافة من السنترال للكبينة"
      )}
      {renderTextInput("number_of_joints", "عدد اللحامات", "0")}
      {renderTextInput("joint_location", "موقع اللحام (lat,lng)")}
      {renderTextInput("rooms", "الغرف")}
      {renderTextInput("room_location", "موقع الغرف (lat,lng)")}
      {renderTextInput("entitlement", "الاستحقاق")}
      {renderTextInput("distance", "المسافة")}
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
          // required={majorCabinetSchema.fields.notes?.isRequired()}
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
