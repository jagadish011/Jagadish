import React, { useEffect, useState } from "react";

const Modal = ({ product, closeModal }) => {
  const [modalStyle, setModalStyle] = useState({});

  useEffect(() => {
    const calculatePosition = () => {
      const modalWidth = 800; // max-w-4xl is roughly 896px, adjust as needed
      const modalHeight = 600; // Estimate, adjust based on your content

      // Get the current scroll position
      const scrollY = window.scrollY || window.pageYOffset;

      // Calculate the center of the current viewport
      const viewportCenterY = scrollY + window.innerHeight / 2;
      const viewportCenterX = window.innerWidth / 2;

      // Position the modal centered in the current viewport
      const top = viewportCenterY - modalHeight / 2;
      const left = viewportCenterX - modalWidth / 2;

      setModalStyle({
        position: "absolute",
        top: `${top}px`,
        left: `${left}px`,
        maxWidth: `${modalWidth}px`,
        maxHeight: `${modalHeight}px`,
        transform: "none", // Remove default centering
      });
    };

    calculatePosition();
    window.addEventListener("resize", calculatePosition);
    return () => window.removeEventListener("resize", calculatePosition);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-75 overflow-y-auto"
      onClick={closeModal}
    >
      <div
        style={modalStyle}
        className="bg-white p-4 relative mx-auto overflow-auto rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-0 text-black font-bold text-2xl"
          onClick={closeModal}
        >
          &times;
        </button>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-contain w-full h-auto"
        />
        <h2 className="mt-4 text-xl font-semibold">{product.title}</h2>
      </div>
    </div>
  );
};

export default Modal;
