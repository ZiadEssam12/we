import dynamic from "next/dynamic";

export const UserFormDynamic = dynamic(() => import("./UserForm"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-end w-full">
      <div className="w-full rounded-lg h-[200px] bg-gray-200 animate-pulse p-6"></div>
    </div>
  ),
});
