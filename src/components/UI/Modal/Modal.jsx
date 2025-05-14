export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const handleContentClick = (e) => {
    // Stop propagation to prevent the backdrop click handler from firing
    e.stopPropagation();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    >
      <div
        onClick={handleContentClick}
        className="bg-white rounded-lg shadow-lg p-6 min-w-1/3"
      >
        {children}
      </div>
    </div>
  );
}
