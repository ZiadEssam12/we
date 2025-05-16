"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonWithLoading from "@/components/buttonWithLoading/ButtonWithLoading";

// Validation schema for Secondary Cabinet form
const SecondaryCabinetSchema = Yup.object().shape({
  central: Yup.string().required("السنترال مطلوب"),
  village: Yup.string().required("القرية مطلوبة"),
  port_gbon: Yup.string().required("Port GBON مطلوب"),
  cabinet: Yup.string().required("الكبينة مطلوبة"),
  splitter_number: Yup.string().required("رقم السبليتر مطلوب"),
  splitter_port: Yup.string().required("منفذ السبليتر مطلوب"),
  distance: Yup.string().required("المسافة مطلوبة"),
  box_number: Yup.string().required("رقم البوكس مطلوب"),
  cabinet_location: Yup.string().required("موقع الكبينة مطلوب"),
  box_location: Yup.string().required("موقع البوكس مطلوب"),
  cabinet_to_box_distance: Yup.string().required(
    "المسافة من الكبينة للصندوق مطلوبة"
  ),
  responsible: Yup.string().nullable(),
  notes: Yup.string().nullable(),
});

// Form component for Secondary Cabinets using useFormik hook
export default function SecondaryCabinetForm({
  initialData,
  onSubmit,
  isProcessing,
}) {
  // Initialize formik hook
  const formik = useFormik({
    initialValues: {
      central: initialData?.central || "",
      village: initialData?.village || "",
      port_gbon: initialData?.port_gbon || "",
      cabinet: initialData?.cabinet || "",
      splitter_number: initialData?.splitter_number || "",
      splitter_port: initialData?.splitter_port || "",
      distance: initialData?.distance || "",
      box_number: initialData?.box_number || "",
      cabinet_location: initialData?.cabinet_location || "",
      box_location: initialData?.box_location || "",
      cabinet_to_box_distance: initialData?.cabinet_to_box_distance || "",
      responsible: initialData?.responsible || "",
      notes: initialData?.notes || "",
    },
    validationSchema: SecondaryCabinetSchema,
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
            htmlFor="village"
            className="block text-sm font-medium text-gray-700"
          >
            القرية
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
            htmlFor="port_gbon"
            className="block text-sm font-medium text-gray-700"
          >
            Port GBON
          </label>
          <input
            id="port_gbon"
            name="port_gbon"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.port_gbon}
            className={getInputClassName("port_gbon")}
          />
          {formik.touched.port_gbon && formik.errors.port_gbon && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.port_gbon}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="cabinet"
            className="block text-sm font-medium text-gray-700"
          >
            الكبينة
          </label>
          <input
            id="cabinet"
            name="cabinet"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cabinet}
            className={getInputClassName("cabinet")}
          />
          {formik.touched.cabinet && formik.errors.cabinet && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.cabinet}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="splitter_number"
            className="block text-sm font-medium text-gray-700"
          >
            رقم السبليتر
          </label>
          <input
            id="splitter_number"
            name="splitter_number"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.splitter_number}
            className={getInputClassName("splitter_number")}
          />
          {formik.touched.splitter_number && formik.errors.splitter_number && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.splitter_number}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="splitter_port"
            className="block text-sm font-medium text-gray-700"
          >
            منفذ السبليتر
          </label>
          <input
            id="splitter_port"
            name="splitter_port"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.splitter_port}
            className={getInputClassName("splitter_port")}
          />
          {formik.touched.splitter_port && formik.errors.splitter_port && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.splitter_port}
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
            htmlFor="cabinet_location"
            className="block text-sm font-medium text-gray-700"
          >
            موقع الكبينة
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
          {formik.touched.cabinet_location &&
            formik.errors.cabinet_location && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.cabinet_location}
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
            htmlFor="cabinet_to_box_distance"
            className="block text-sm font-medium text-gray-700"
          >
            المسافة من الكبينة للصندوق
          </label>
          <input
            id="cabinet_to_box_distance"
            name="cabinet_to_box_distance"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cabinet_to_box_distance}
            className={getInputClassName("cabinet_to_box_distance")}
          />
          {formik.touched.cabinet_to_box_distance &&
            formik.errors.cabinet_to_box_distance && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.cabinet_to_box_distance}
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
      </div>

      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-medium text-gray-700"
        >
          ملاحظات
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

      <div className="flex justify-end space-x-3">
        <ButtonWithLoading
          loading={isProcessing}
          valid={formik.isValid && formik.dirty}
          text={initialData ? "تعديل الكبينة" : "إضافة كبينة جديدة"}
          areaLabel={initialData ? "تعديل الكبينة" : "إضافة كبينة جديدة"}
        />
      </div>
    </form>
  );
}
