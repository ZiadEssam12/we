import dynamic from "next/dynamic";

export const NewUserForm = dynamic(() => import("./NewUser"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-end w-full">
      <div className="w-[200px] rounded-lg h-[40px] bg-gray-200 animate-pulse"></div>
    </div>
  ),
});
