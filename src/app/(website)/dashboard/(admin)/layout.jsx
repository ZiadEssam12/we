import { auth } from "@/app/auth";
import Link from "next/link";

export default async function layout({ children }) {
  const session = await auth();

  if (session?.user?.role !== "ADMIN" && session?.user?.role !== "MANAGER") {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-l from-blue-600 to-purple-600 text-transparent bg-clip-text animate-gradient-text leading-tight">
            ليس لديك صلاحيات للدخول إلى هذه الصفحة
          </h1>

          <Link href="/login">
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              تسجيل الدخول
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return children;
}
