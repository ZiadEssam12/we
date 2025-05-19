import dynamic from "next/dynamic";

// Define the loading component first with proper capitalization
const LoadingDataTable = () => {
  return <div className="w-screen h-2/3 bg-gray-300 animate-pulse"></div>;
};

export const DataTable = dynamic(() => import("./DataTable"), {
  ssr: true,
  loading: () => <LoadingDataTable />,
});
