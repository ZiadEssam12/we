import { MdWavingHand, MdArrowForward } from "react-icons/md";
import { auth } from "./auth";
import Link from "next/link";

export default async function Page() {
  const session = await auth();

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center p-6">
      <div className="text-center max-w-3xl">
        {/* Gradient heading */}{" "}
        <div className="flex items-center justify-center gap-3 mb-4">
          <h1 className="text-5xl font-bold bg-gradient-to-l from-blue-600 to-purple-600 text-transparent bg-clip-text animate-gradient-text">
            أهلا بك في لوحة التحكم
          </h1>
          <MdWavingHand className="text-amber-500 animate-pulse" size={36} />
        </div>
        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-8">
          نظام إدارة الكابينات والأبراج المتكامل لشركة الاتصالات المصرية
        </p>
        {/* Features section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-right">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              سهولة الإدارة
            </h3>
            <p className="text-gray-600">
              تحكم في جميع الكابينات والأبراج بواجهة سهلة الاستخدام ومصممة
              خصيصًا للغة العربية
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              تقارير متكاملة
            </h3>
            <p className="text-gray-600">
              احصل على تقارير مفصلة وإحصائيات دقيقة حول أداء الشبكة ومكوناتها
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              مراقبة مباشرة
            </h3>
            <p className="text-gray-600">
              راقب حالة الكابينات والأبراج في الوقت الفعلي واكتشف المشكلات قبل
              حدوثها
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              أمان متكامل
            </h3>
            <p className="text-gray-600">
              حماية البيانات بأحدث تقنيات الأمان وإدارة الصلاحيات المتطورة
            </p>
          </div>
        </div>
        {/* CTA Button */}
        <Link
          href={`${session?.user?.id ? "/dashboard" : "/login"}`}
          className="mt-10 cursor-pointer w-max inline-flex items-center gap-2 mx-auto bg-gradient-to-l from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          ابدأ الاستخدام الآن
          <MdArrowForward />
        </Link>
      </div>
    </div>
  );
}
