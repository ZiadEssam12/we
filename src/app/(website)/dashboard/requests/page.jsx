import React from "react";
import Link from "next/link";
import {
  MdOutlineStorage,
  MdOutlineDevices,
  MdOutlineSettingsInputAntenna,
  MdOutlineCable,
  MdArrowBack,
  MdTimeline,
} from "react-icons/md";
import { cookies } from "next/headers";
import { getSessionCookieName, setCookiesHeader } from "@/lib/utils";
import { getAllRequests } from "@/lib/api";

export default async function RequestsPage() {
  // Setting header
  const cookieStore = await cookies();
  const sessionCookieName = getSessionCookieName();
  const sessionTokenCookie = cookieStore.get(sessionCookieName);
  const headers = await setCookiesHeader({ sessionTokenCookie });

  //   getting data
  const { data } = await getAllRequests({ headers });

  console.log("data :", data);

  const {
    NumberOfMajorCabinets,
    NumberOfSecondaryCabinets,
    NumberOfMobileTowers,
    NumberOfRequests,
  } = data;

  const pendingRequests = {
    majorCabinets: NumberOfMajorCabinets,
    secondaryCabinets: NumberOfSecondaryCabinets,
    mobileTowers: NumberOfMobileTowers,
    copperLines: NumberOfRequests,
  };

  console.log("pendingRequests :", pendingRequests);

  return (
    <div className="container mx-auto p-6">
      {" "}
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-l from-blue-600 to-purple-600 text-transparent bg-clip-text mb-2">
          طلبات الإضافة والتعديل المعلقة
        </h1>
        <p className="text-gray-600">
          عرض جميع طلبات الإضافة والتعديل المعلقة التي تحتاج إلى موافقة
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Major Cabinets Card */}
        <Link
          href="/dashboard/requests/major-cabinets"
          className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden"
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                <MdOutlineStorage className="text-blue-600" size={28} />
              </div>
              <span className="bg-blue-100 text-blue-700 text-lg font-bold rounded-full h-8 w-8 flex items-center justify-center">
                {pendingRequests.majorCabinets}
              </span>
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-blue-600 transition-colors">
              الكبائن الرئيسية
            </h3>
            <p className="text-gray-600 text-sm">
              طلبات إضافة وتعديل بيانات الكبائن الرئيسية
            </p>
          </div>
          <div className="bg-gray-50 px-6 py-3 flex justify-between items-center border-t border-gray-100">
            <span className="text-blue-600 text-sm font-medium">
              عرض الطلبات
            </span>
            <MdArrowBack className="text-blue-600 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all" />
          </div>
        </Link>

        {/* Secondary Cabinets Card */}
        <Link
          href="/dashboard/requests/secondary-cabinets"
          className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden"
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                <MdOutlineDevices className="text-purple-600" size={28} />
              </div>
              <span className="bg-purple-100 text-purple-700 text-lg font-bold rounded-full h-8 w-8 flex items-center justify-center">
                {pendingRequests.secondaryCabinets}
              </span>
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-purple-600 transition-colors">
              الكبائن الفرعية
            </h3>{" "}
            <p className="text-gray-600 text-sm">
              طلبات إضافة وتعديل بيانات الكبائن الفرعية
            </p>
          </div>
          <div className="bg-gray-50 px-6 py-3 flex justify-between items-center border-t border-gray-100">
            <span className="text-purple-600 text-sm font-medium">
              عرض الطلبات
            </span>
            <MdArrowBack className="text-purple-600 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all" />
          </div>
        </Link>

        {/* Mobile Towers Card */}
        <Link
          href="/dashboard/requests/mobile-towers"
          className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden"
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors">
                <MdOutlineSettingsInputAntenna
                  className="text-green-600"
                  size={28}
                />
              </div>
              <span className="bg-green-100 text-green-700 text-lg font-bold rounded-full h-8 w-8 flex items-center justify-center">
                {pendingRequests.mobileTowers}
              </span>
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-green-600 transition-colors">
              أبراج المحمول
            </h3>
            <p className="text-gray-600 text-sm">
              طلبات إضافة وتعديل بيانات أبراج المحمول
            </p>
          </div>
          <div className="bg-gray-50 px-6 py-3 flex justify-between items-center border-t border-gray-100">
            <span className="text-green-600 text-sm font-medium">
              عرض الطلبات
            </span>
            <MdArrowBack className="text-green-600 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all" />
          </div>
        </Link>

        {/* Copper Lines Card */}
        <Link
          href="/dashboard/requests/copper-lines"
          className="group bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden"
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-amber-100 p-3 rounded-lg group-hover:bg-amber-200 transition-colors">
                <MdOutlineCable className="text-amber-600" size={28} />
              </div>
              <span className="bg-amber-100 text-amber-700 text-lg font-bold rounded-full h-8 w-8 flex items-center justify-center">
                {pendingRequests.copperLines}
              </span>
            </div>
            <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-amber-600 transition-colors">
              خطوط النحاس
            </h3>{" "}
            <p className="text-gray-600 text-sm">
              طلبات إضافة وتعديل بيانات خطوط النحاس
            </p>
          </div>
          <div className="bg-gray-50 px-6 py-3 flex justify-between items-center border-t border-gray-100">
            <span className="text-amber-600 text-sm font-medium">
              عرض الطلبات
            </span>
            <MdArrowBack className="text-amber-600 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all" />
          </div>
        </Link>
      </div>
      {/* Additional information section */}
      <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-start">
          <div className="bg-blue-100 p-3 rounded-lg mr-4">
            <MdTimeline className="text-blue-600" size={24} />
          </div>
          <div>
            {" "}
            <h3 className="font-bold text-gray-800 text-lg mb-2">
              عن صفحة الطلبات
            </h3>
            <p className="text-gray-600">
              تعرض هذه الصفحة جميع طلبات الإضافة والتعديل المعلقة على بيانات
              المنشآت المختلفة بالنظام. يمكنك الضغط على أي من البطاقات أعلاه
              للانتقال إلى قائمة الطلبات الخاصة بهذا النوع من المنشآت.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
