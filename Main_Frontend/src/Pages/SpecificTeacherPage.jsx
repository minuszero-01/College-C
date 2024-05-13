import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function SpecificTeacherPage() {
  const { id, teachername } = useParams();
  return (
    <div className="p-4 bg-gray-800">
      <div className="flex flex-row gap-4">
        <Navbar />
        <div className="w-full flex flex-col">
          <div className=" flex flex-row  py-2 items-center text-4xl  text-white font-semibold gap-2">
            <p className="mb-2">Prof. {teachername}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
