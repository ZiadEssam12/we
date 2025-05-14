import * as Yup from "yup";

export const initialMajorCabinetValues = {
  central: "",
  village: "",
  cabinet: "",
  central_to_cabinet_distance: "",
  number_of_joints: 0,
  joint_location: "", // Expected "lat,lng"
  rooms: "",
  room_location: "", // Expected "lat,lng"
  entitlement: "",
  distance: "",
  responsible: "",
  notes: "",
};

// Schema for creating and updating a MajorCabinet
export const majorCabinetSchema = Yup.object().shape({
  central: Yup.string().required("اسم السنترال مطلوب"),
  village: Yup.string().required("اسم القرية مطلوب"),
  cabinet: Yup.string().required("رقم الكبينة مطلوب"),
  central_to_cabinet_distance: Yup.string().required(
    "المسافة من السنترال إلى الكبينة مطلوبة"
  ),
  number_of_joints: Yup.number()
    .integer("عدد اللحامات يجب أن يكون رقمًا صحيحًا")
    .min(0, "عدد اللحامات لا يمكن أن يكون سالبًا")
    .required("عدد اللحامات مطلوب"),
  joint_location: Yup.string()
    // .matches(/^\\d+\\.\\d+,\\d+\\.\\d+$/, "تنسيق موقع اللحام غير صحيح (خط الطول,خط العرض)")
    .required("موقع اللحام مطلوب"),
  rooms: Yup.string().required("عدد الغرف مطلوب"),
  room_location: Yup.string()
    // .matches(/^\\d+\\.\\d+,\\d+\\.\\d+$/, "تنسيق موقع الغرفة غير صحيح (خط الطول,خط العرض)")
    .required("موقع الغرفة مطلوب"),
  entitlement: Yup.string().required("الاستحقاق مطلوب"),
  distance: Yup.string().required("المسافة مطلوبة"),
  responsible: Yup.string().nullable(), // Optional
  notes: Yup.string().required("الملاحظات مطلوبة"),
});

// Optional: A separate schema for updates if some fields have different rules
// For example, if some fields cannot be updated or are not required on update.
// For now, we'll use the same schema for create and update.
export const updateMajorCabinetSchema = majorCabinetSchema;
