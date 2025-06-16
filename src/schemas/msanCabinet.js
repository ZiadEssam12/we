import * as Yup from "yup";

export const initialMsanCabinetValues = {
  cabinet_name: "",
  cable_number: "",
  cable_capacity: "",
  distance_from_central: "",
  odf_name: "",
  cassette_number: "",
  branches: "",
  spares: "",
  cabinet_location: "", // Expected "lat,lng"
  responsible: "",
  notes: "",
};

export const msanCabinetSchema = Yup.object().shape({
  cabinet_name: Yup.string().required("اسم الكابينة مطلوب"),
  cable_number: Yup.string().required("رقم الكابل مطلوب"),
  cable_capacity: Yup.string().required("سعة الكابل مطلوبة"),
  distance_from_central: Yup.string().required("المسافة من السنترال مطلوبة"),
  odf_name: Yup.string().required("اسم ODF مطلوب"),
  cassette_number: Yup.string().required("رقم الكاست مطلوب"),
  branches: Yup.string().required("الفروع مطلوبة"),
  spares: Yup.string().required("الاحتياط مطلوب"),
  cabinet_location: Yup.string()
    // .matches(/^\d+\.\d+,\d+\.\d+$/, "تنسيق موقع الكابينة غير صحيح (خط الطول,خط العرض)")
    .required("موقع الكابينة مطلوب"),
  responsible: Yup.string().required("المسؤول مطلوب"),
  notes: Yup.string().optional(),
});

export const updateMsanCabinetSchema = msanCabinetSchema;
