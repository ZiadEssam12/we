"use client";

import { Button } from "flowbite-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import {
  MdOutlineStorage,
  MdOutlineDevices,
  MdOutlineSettingsInputAntenna,
  MdOutlineCable,
  MdOutlineDashboard,
  MdOutlineSpaceDashboard,
} from "react-icons/md";

const links = [
  {
    name: "الكابينات الرئيسة",
    link: "/main-cabinets",
    icon: MdOutlineStorage,
  },
  {
    name: "الكابينات الفرعية",
    link: "/sub-cabinets",
    icon: MdOutlineDevices,
  },
  {
    name: "إدارة ابراج المحمول",
    link: "/mobile-towers",
    icon: MdOutlineSettingsInputAntenna,
  },
  {
    name: "كابينات النحاس",
    link: "/copper-cabinets",
    icon: MdOutlineCable,
  },
];

export default function Sidebar() {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };

  const { data: session } = useSession();

  return (
    <aside className="sticky top-0 h-screen border-l border-gray-200 bg-white shadow-sm p-5 z-10 flex flex-col">
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <MdOutlineDashboard size={24} />
          <span>لوحة التحكم</span>
        </h1>
      </div>

      <nav className="flex flex-col gap-2 flex-grow">
        {session?.user?.role === "ADMIN" && (
          <Link
            href="/dashboard/users"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              activeLink === "/users"
                ? "bg-blue-100 text-blue-600 font-medium"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveLink("/users")}
          >
            <MdOutlineSpaceDashboard size={20} className="flex-shrink-0" />
            <span>إدارة المستخدمين</span>
          </Link>
        )}
        {links.map((link) => {
          const isActive = activeLink === link.link;
          return (
            <Link
              key={link.name}
              href={link.link}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-100 text-blue-600 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveLink(link.link)}
            >
              <link.icon size={20} className="flex-shrink-0" />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout button at the bottom */}
      <div className="mt-auto py-4 border-t border-gray-200">
        <Button
          color="red"
          onClick={handleSignOut}
          className="w-full flex items-center gap-1 cursor-pointer"
        >
          <MdOutlineSpaceDashboard size={20} className="flex-shrink-0" />
          <span>تسجيل الخروج</span>
        </Button>
      </div>
    </aside>
  );
}
