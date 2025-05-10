// pages/login.js
"use client";

import { useFormik } from "formik";
import { Label } from "flowbite-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { loginSchema, SigninInitialValues } from "@/schemas/auth";
import LoadingButton from "@/components/buttonWithLoading/ButtonWithLoading";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: SigninInitialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null); // Clear previous errors
      try {
        const result = await signIn("credentials", {
          redirect: false, // Prevent redirect
          email: values.email,
          password: values.password,
        });

        if (result?.error) {
          setError(result.code);
        } else if (!result.ok) {
          setError("Authentication failed. Please try again.");
        } else {
          router.push("/"); // Redirect on success
        }
      } catch (error) {
        console.error("Unexpected error during signIn:", error);
        setError("An unexpected error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="flex h-screen flex-1 flex-col justify-center items-stretch md:items-center px-6 lg:px-8 dark:bg-darkBlue text-darkBlue">
      <div className="bg-white dark:bg-gray-800 text-darkBlue dark:text-white p-12 mt-10 mx-auto w-full sm:max-w-sm md:max-w-[640px] rounded-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
          <h1 className="mt-10 text-center text-2xl/9 font-bold tracking-tight dark:text-white capitalize">
            سجل دخولك
            <span className="text-blue-600">.</span>
          </h1>
        </div>
        <form className="space-y-6 mt-4" onSubmit={formik.handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium dark:text-white capitalize"
            >
              اسم المستخدم
            </label>
            <div className="mt-2">
              <input
                id="userName"
                name="userName"
                type="userName"
                autoComplete="userName"
                className="block w-full rounded-md border-0 py-1.5 pl-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.userName && formik.errors.userName && (
              <Label color="red" className="my-2 text-red-900">
                {formik.errors.userName}
              </Label>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium dark:text-white"
              >
                كلمة المرور
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <Label color="red" className="my-2 text-red-900">
                {formik.errors.password}
              </Label>
            )}
            {error && (
              <Label color="red" className="my-2 text-red-900">
                {error}
              </Label>
            )}
          </div>

          <div>
            <LoadingButton
              text="Sign in"
              areaLabel="sign in button"
              valid={formik.isValid && formik.dirty}
              loading={loading}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
