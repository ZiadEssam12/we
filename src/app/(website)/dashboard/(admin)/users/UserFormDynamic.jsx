import dynamic from "next/dynamic";

export const UserFormDynamic = dynamic(() => import("./UserForm"), {
  ssr: true,
  loading: () => (
    <div className="flex justify-end w-full p-4">
      <div className="w-full rounded-lg h-[200px] bg-gray-200 animate-pulse"></div>
    </div>
  ),
});
