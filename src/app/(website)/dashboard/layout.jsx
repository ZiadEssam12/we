import Sidebar from "@/components/UI/Sidebar/Sidebar";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden">
      {/* Fixed sidebar */}
      <Sidebar />

      {/* Main content area that respects the sidebar width */}
      <main className="pr-[250px]">{children}</main>
    </div>
  );
}
