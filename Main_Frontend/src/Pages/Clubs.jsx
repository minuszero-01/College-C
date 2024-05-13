import React from "react";
import Navbar from "../Components/Navbar";

export default function Clubs() {
  return (
    <div className="p-4 bg-gray-800">
      <div className="flex flex-row gap-4">
        <Navbar />
        <div className="w-full flex flex-col">
          <div className=" flex flex-row  py-2 items-center text-4xl  text-white font-semibold gap-2">
            <p className="mb-2">Clubs 🎭</p>
          </div>
        </div>
      </div>
    </div>
  );
}
