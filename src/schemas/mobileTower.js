import * as yup from "yup";

export const initialMobileTowerValues = {
  central: "",
  cable_name: "",
  tower_code: "",
  company: "",
  entitlement: "",
  distance: "",
  address: "",
  location: "", // Expected "lat,lng"
  responsible: "",
  notes: "",
};

export const mobileTowerSchema = yup.object().shape({
  central: yup.string().required("السنترال مطلوب"),
  cable_name: yup.string().required("اسم الكابل مطلوب"),
  tower_code: yup.string().required("كود البرج مطلوب"),
  company: yup.string().required("الشركة مطلوبة"),
  entitlement: yup.string().required("الاستحقاق مطلوب"),
  distance: yup.string().required("المسافة مطلوبة"),
  address: yup.string().required("العنوان مطلوب"),
  location: yup.string().required("الموقع مطلوب"), // Assuming "lat,lng" string
  responsible: yup.string().required("المسؤول مطلوب"),
  notes: yup.string().nullable(),
});

export const updateMobileTowerSchema = yup.object().shape({
  central: yup.string(),
  cable_name: yup.string(),
  tower_code: yup.string(),
  company: yup.string(),
  entitlement: yup.string(),
  distance: yup.string(),
  address: yup.string(),
  location: yup.string(),
  responsible: yup.string(),  
  notes: yup.string().nullable(),
});
