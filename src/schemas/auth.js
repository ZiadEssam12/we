import * as yup from "yup";

export const loginSchema = yup.object({
  userName: yup.string().required("اسم المستخدم مطلوب"),

  password: yup
    .string()
    .required("كلمة المرور مطلوبة")
    .min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
});

export const SigninInitialValues = {
  userName: "",
  password: "",
};

export const registerSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
  phoneNumber: yup.string().required("Phone number is required"),
});

export const RegisterInitialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
};
