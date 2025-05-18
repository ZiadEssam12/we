"use client";

import dynamic from "next/dynamic";

export const mobileTowersDyanamicForm = dynamic(
  () => import("./MobileTowerForm"),
  {
    ssr: true,
    loading: () => (
      <div className="flex justify-end w-full p-4">
        <div className="w-full rounded-lg h-[400px] bg-gray-200 animate-pulse"></div>
      </div>
    ),
  }
);
