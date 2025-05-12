import Sidebar from "@/components/UI/Sidebar/Sidebar";
import React from "react";
import { Toaster } from "react-hot-toast";

export default function layout({ children }) {
  return (
    <div className="flex min-h-screen w-full overflow-x-hidden">
      {/* Sidebar */}
      <div className="w-[250px] flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main content area */}
      <main className="flex-1 p-4">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
