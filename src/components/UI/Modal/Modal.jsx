import { MaterialSymbolsLightClose } from "@/app/icons/Icons";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  const handleContentClick = (e) => {
    // Stop propagation to prevent the backdrop click handler from firing
    e.stopPropagation();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0  z-50 flex items-center justify-center bg-black/40"
    >
      <div
        onClick={handleContentClick}
        className="bg-white rounded-lg shadow-lg min-w-2/4"
      >
        <div className="flex items-center justify-between py-4 p-6">
          <h3 className="font-semibold text-2xl">{title}</h3>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 bg-gray-200 p-2 rounded-full hover:bg-gray-100 transition-colors duration-150 focus:outline-none cursor-pointer"
            title="Close Modal"
          >
            <MaterialSymbolsLightClose />
          </button>
        </div>
        <div className="pt-4 border-t-2 pb-4 border-gray-200">{children}</div>
      </div>
    </div>
  );
}
