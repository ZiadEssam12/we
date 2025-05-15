import Sidebar from "@/components/UI/Sidebar/Sidebar";
import React from "react";
import { Toaster } from "react-hot-toast";

export default function layout({ children }) {
  return (
    <div className="flex min-h-screen w-full" dir="rtl">
      {/* Sidebar container */}
      <div className="flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main content area */}
      <main className="flex-1 transition-all duration-[350ms] overflow-x-auto">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
