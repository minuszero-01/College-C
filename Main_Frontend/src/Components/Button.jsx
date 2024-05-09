import React from "react";

export function Button({ label, onClick, onLoad }) {
  return (
    <>
      <button
        onLoad={onLoad}
        onClick={onClick}
        type="button"
        className=" text-white bg-gray-800 hover:bg-white hover:text-black border-2 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
      >
        {label}
      </button>
    </>
  );
}
