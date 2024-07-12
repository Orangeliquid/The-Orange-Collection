// src/components/ImageModal.jsx
import React from "react";
import GlowingWrapper from "../components/GlowingWrapper";

function ImageModal({ isOpen, onClose, imgSrc, imgAlt }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
        <GlowingWrapper className="relative rounded from-orange-600 to-orange-600">
          <div className="relative rounded max-w-full max-h-full">
            <button
              className="absolute z-51 top-0 right-0 m-2 p-10 text-white text-3xl leading-none"
              onClick={onClose}
            >
              &times;
            </button>
            <img
              src={imgSrc}
              alt={imgAlt}
              className="max-w-full max-h-full rounded-md cursor-pointer"
              onClick={onClose}
            />
          </div>
        </GlowingWrapper>
      </div>
    </>
  );
}

export default ImageModal;
