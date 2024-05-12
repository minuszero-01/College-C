import React from "react";

export default function ImagePop({ isOpen, close, imageUrl }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center px-4 py-8"
      onClick={close}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt="Popup"
          className="max-w-full h-auto rounded-sm"
        />
        <button onClick={close} className="absolute top-4 right-4 text-lg">
          &times;
        </button>
      </div>
    </div>
  );
}
