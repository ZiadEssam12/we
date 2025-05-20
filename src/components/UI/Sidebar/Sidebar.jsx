"use client";

import { Button } from "flowbite-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import {
  MdOutlineStorage,
  MdOutlineDevices,
  MdOutlineSettingsInputAntenna,
  MdOutlineCable,
  MdOutlineDashboard,
  MdOutlineSpaceDashboard,
  MdMenu,
  MdChevronRight,
  MdSchedule,
} from "react-icons/md";

const links = [
  {
    name: "لوحة التحكم",
    link: "/dashboard",
    icon: MdOutlineDashboard,
  },
  {
    name: "إدارة المستخدمين",
    link: "/dashboard/users",
    icon: MdOutlineSpaceDashboard,
    role: ["ADMIN"],
  },
  {
    name: "الطلبات المعلقة",
    link: "/dashboard/requests",
    icon: MdSchedule,
    role: ["ADMIN", "MANAGER"],
  },
  {
    name: "الكابينات الرئيسة",
    link: "/dashboard/main-cabinets",
    icon: MdOutlineStorage,
  },
  {
    name: "الكابينات الفرعية",
    link: "/dashboard/secondary-cabinets",
    icon: MdOutlineDevices,
  },
  {
    name: "إدارة ابراج المحمول",
    link: "/dashboard/mobile-towers",
    icon: MdOutlineSettingsInputAntenna,
  },
  {
    name: "كابينات النحاس",
    link: "/dashboard/copper-lines",
    icon: MdOutlineCable,
  },
];

export default function Sidebar() {
  const router = useRouter();
  const currentActiveLink = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (currentActiveLink === "/dashboard") {
      setIsOpen(true);
    }
  }, [currentActiveLink]);
  const toggleSidebar = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const newState = !isOpen;
    setIsOpen(newState);
  };

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };

  const handleClick = () => {
    setIsOpen(false);
  };

  const { data: session } = useSession();

  return (
    <>
      {/* Toggle Button */}
      <div
        className="h-screen w-0 lg:w-[20px] absolute top-0 right-0 z-20 flex items-center justify-center"
        onMouseEnter={() => setIsOpen(true)}
      >
        <button
          onClick={toggleSidebar}
          className="fixed top-4 right-4 z-20 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-[350ms] shadow-md"
          aria-label="Toggle Sidebar"
        >
          {isOpen ? <MdChevronRight size={24} /> : <MdMenu size={24} />}
        </button>
      </div>
      {/* Backdrop that covers the whole screen and closes sidebar when clicked */}{" "}
      {isOpen && (
        <div
          className="w-screen h-screen fixed top-0 right-0 z-5"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(false);
          }}
        />
      )}
      {/* Sidebar content */}
      <aside
        className={`fixed top-0 right-0 h-screen border-l border-gray-200 bg-white shadow-lg z-10 flex flex-col overflow-hidden transition-all duration-[350ms] w-[250px] transform ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        // onClick={(e) => e.stopPropagation()}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="flex items-center justify-center mb-8 mt-16">
          <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            <MdOutlineDashboard size={24} />
            <span>لوحة التحكم</span>
          </h1>
        </div>

        <nav className="flex flex-col gap-2 flex-grow px-5">
          {links.map((link) => {
            // Check if the user has the required role to access the link
            if (link.role && !link.role.includes(session?.user?.role)) {
              return null; // Skip rendering this link
            }
            const isActive = currentActiveLink === link.link;
            return (
              <Link
                key={link.name}
                href={link.link}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-blue-100 text-blue-600 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={handleClick}
                prefetch={true}
              >
                <link.icon size={20} className="flex-shrink-0" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout button at the bottom */}
        <div className="mt-auto py-4 border-t border-gray-200 px-5 mb-4">
          <Button
            color="red"
            onClick={handleSignOut}
            className="w-full flex items-center gap-1 cursor-pointer"
          >
            تسجيل الخروج
          </Button>
        </div>
      </aside>
    </>
  );
}
