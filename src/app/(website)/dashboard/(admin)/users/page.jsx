import { auth } from "@/app/auth";
import UserDataTableWrapper from "@/components/UI/UserDataTable/UserDataTableWrapper";
import { getAllUsers } from "@/lib/api";
import { getSessionCookieName, setCookiesHeader } from "@/lib/utils";
import { cookies } from "next/headers";
import React from "react";
import NewUser from "./NewUser";

export default async function page() {
  const session = await auth();

  const cookieStore = await cookies();
  const sessionCookieName = getSessionCookieName(); // Use the utility function
  const sessionTokenCookie = cookieStore.get(sessionCookieName);
  const headers = await setCookiesHeader({ sessionTokenCookie });

  if (session?.user?.role !== "ADMIN" && session?.user?.role !== "MANAGER") {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-l from-blue-600 to-purple-600 text-transparent bg-clip-text animate-gradient-text leading-tight">
            ليس لديك صلاحيات للدخول إلى هذه الصفحة
          </h1>
        </div>
      </div>
    );
  }

  let data = await getAllUsers({ headers });
  const columns = [
    {
      accessorKey: "userName",
      header: "اسم المستخدم",
    },
    {
      accessorKey: "name",
      header: "الاسم",
    },
    {
      accessorKey: "phoneNumber",
      header: "رقم الهاتف",
    },
    {
      accessorKey: "role",
      header: "الدور",
    },
  ];

  data = data.map((user) => {
    user.role =
      user.role === "ADMIN"
        ? "مشرف"
        : user.role === "MANAGER"
        ? "مدير"
        : "مستخدم";
    return user;
  });
  return (
    <div className="flex flex-col text-black py-8">
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-l from-blue-600 to-purple-600 text-transparent bg-clip-text animate-gradient-text leading-tight text-center mb-6">
        المستخدمين
      </h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="pt-8 pb-3 w-full">
          <UserDataTableWrapper data={data} columns={columns} />
        </div>
      </div>
    </div>
  );
}
