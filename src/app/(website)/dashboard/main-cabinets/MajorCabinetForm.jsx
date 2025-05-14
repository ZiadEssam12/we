"use client";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import Modal from "@/components/UI/Modal/Modal";
import LoadingButton from "@/components/buttonWithLoading/ButtonWithLoading";
import { Label, TextInput, Textarea } from "flowbite-react"; // Assuming Textarea is available or similar
import { MaterialSymbolsLightClose } from "@/app/icons/Icons";

import { createMajorCabinet, updateMajorCabinet } from "@/lib/api";
import {
  initialMajorCabinetValues,
  majorCabinetSchema,
} from "@/schemas/majorCabinet";

export default function MajorCabinetForm({
  isOpen, // Changed from openModal to isOpen
  isUpdate,
  currentCabinet, // Changed from currentCabinetData to currentCabinet
  setMajorCabinetsData,
  onClose,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (values) => {
    setIsLoading(true);
    try {
      let result;
      if (isUpdate) {
        result = await updateMajorCabinet(currentCabinet.id, values);
      } else {
        result = await createMajorCabinet(values);
      }

      if (result.success) {
        toast.success(result.message);
        if (isUpdate) {
          setMajorCabinetsData((prev) =>
            prev.map((cabinet) =>
              cabinet.id === currentCabinet.id ? result.data : cabinet
            )
          );
        } else {
          setMajorCabinetsData((prev) => [result.data, ...prev]);
        }
        formik.resetForm();
        onClose(); // Use onClose to close the modal
      }
      if (!result.success) {
        // Optionally display field-specific errors
        console.error("Validation errors:", result.error);
        toast.error(result.message || "An error occurred.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
      console.error("Form submission error:", error);
    }
    setIsLoading(false);
  };

  const formik = useFormik({
    initialValues: initialMajorCabinetValues,
    validationSchema: majorCabinetSchema,
    onSubmit: handleFormSubmit,
    enableReinitialize: true, // Important for pre-filling form in update mode
  });

  useEffect(() => {
    if (isUpdate && currentCabinet) {
      formik.setValues({
        id: currentCabinet.id || "",
        central: currentCabinet.central || "",
        village: currentCabinet.village || "",
        cabinet: currentCabinet.cabinet || "",
        central_to_cabinet_distance:
          currentCabinet.central_to_cabinet_distance || "",
        number_of_joints: currentCabinet.number_of_joints || 0,
        joint_location: currentCabinet.joint_location || "",
        rooms: currentCabinet.rooms || "",
        room_location: currentCabinet.room_location || "",
        entitlement: currentCabinet.entitlement || "",
        distance: currentCabinet.distance || "",
        responsible: currentCabinet.responsible || "",
        notes: currentCabinet.notes || "",
      });
    } else {
      formik.setValues(initialMajorCabinetValues);
    }
  }, [isUpdate, currentCabinet, isOpen]); // Changed openModal to isOpen

  const handleClose = () => {
    formik.resetForm(); // Reset form on close
    if (onClose) {
      onClose();
    }
    // Removed else block with setOpenModal as onClose should handle it
  };

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
        // required={majorCabinetSchema.fields[id]?.isRequired()}
      />
      {formik.touched[id] && formik.errors[id] && (
        <div className="text-red-500 text-sm mt-1">{formik.errors[id]}</div>
      )}
    </div>
  );

  return (
    <Modal open={isOpen} onClose={handleClose}>
      {" "}
      {/* Changed openModal to isOpen */}
      <div className="flex flex-col gap-4 text-sm p-1">
        {" "}
        {/* Reduced padding for scrollbar visibility */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl text-blue-700 font-bold">
            {isUpdate ? "تعديل كبينة رئيسية" : "إضافة كبينة رئيسية"}
          </h2>
          <button
            onClick={handleClose}
            title="إغلاق"
            className="p-2 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <MaterialSymbolsLightClose width={24} height={24} />
          </button>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-3 overflow-y-auto max-h-[70vh] pr-2"
        >
          {" "}
          {/* Added padding-right for scrollbar */}
          {renderTextInput("central", "السنترال")}
          {renderTextInput("village", "القرية")}
          {renderTextInput("cabinet", "رقم الكبينة")}
          {renderTextInput(
            "central_to_cabinet_distance",
            "المسافة من السنترال للكبينة"
          )}
          {renderTextInput("number_of_joints", "عدد اللحامات", "", "number")}
          {renderTextInput("joint_location", "موقع اللحام (lat,lng)")}
          {renderTextInput("rooms", "الغرف")}
          {renderTextInput("room_location", "موقع الغرف (lat,lng)")}
          {renderTextInput("entitlement", "الاستحقاق")}
          {renderTextInput("distance", "المسافة")}
          {renderTextInput("responsible", "المسؤول (اختياري)")}
          <div>
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
              // required={majorCabinetSchema.fields.notes?.isRequired()}
            />
            {formik.touched.notes && formik.errors.notes && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.notes}
              </div>
            )}
          </div>
          <LoadingButton
            text={isUpdate ? "تعديل" : "إضافة"}
            areaLabel={isUpdate ? "تعديل كبينة" : "إضافة كبينة"}
            valid={formik.isValid && formik.dirty}
            loading={isLoading}
            type="submit"
          />
        </form>
      </div>
    </Modal>
  );
}
