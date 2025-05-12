import * as Yup from "yup";

export const registerNewUserSchema = Yup.object().shape({
  userName: Yup.string().min(
    3,
    "يجب أن يتكون اسم المستخدم من 3 أحرف على الأقل"
  ),
  name: Yup.string().required("الاسم مطلوب"),
  phoneNumber: Yup.string().required("رقم الهاتف مطلوب"),
  password: Yup.string()
    .min(8, "كلمة المرور يجب أن تتكون من 8 أحرف على الأقل")
    .required("كلمة المرور مطلوبة"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "كلمة المرور غير متطابقة")
    .required("تأكيد كلمة المرور مطلوب"),
  role: Yup.string().oneOf(
    ["ADMIN", "MANAGER", "USER"],
    "يجب أن يكون الدور إما مسؤول أو مستخدم أو مدير"
  ),
});

export const initalRegisterNewUserValues = {
  userName: "",
  password: "",
  name: "",
  phoneNumber: "",
  confirmPassword: "",
  role: "USER",
};
