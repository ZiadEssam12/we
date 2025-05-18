import dynamic from "next/dynamic";

// Define the loading component first with proper capitalization
const LoadingDataTable = () => {
  return <div className="w-full h-2/3 bg-gray-100 animate-pulse"></div>;
};

export const DataTable = dynamic(() => import("./DataTable"), {
  ssr: false,
  loading: () => <LoadingDataTable />,
});
