import { LineMdLoadingLoop } from "@/app/icons/Icons";

export default function LoadingButton({
  text,
  areaLabel,
  valid,
  loading,
  onClick = () => {},
}) {
  return (
    <button
      aria-label={areaLabel}
      type="submit"
      disabled={!valid || loading}
      className="w-full cursor-pointer flex justify-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus-visible:outline-gray-700 dark:disabled:opacity-50"
      onClick={onClick}
    >
      {loading ? (
        <LineMdLoadingLoop width={20} height={20} className="fill-white" />
      ) : (
        text
      )}
    </button>
  );
}
