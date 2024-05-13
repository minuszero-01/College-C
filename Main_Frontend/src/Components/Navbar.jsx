import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  function handleDashboard() {
    navigate("/dashboard");
  }

  function handleTeachers() {
    navigate("/teachers");
  }

  function handleCourse() {
    navigate("/courses");
  }

  function handleClubs() {
    navigate("/clubs");
  }

  function handleNews() {
    navigate("/events");
  }

  return (
    <div
      className="flex flex-col  translate   rounded-lg   bg-sky-950  text-white items-center gap-6 font-medium text-lg"
      style={{ width: "300px", height: "860px" }}
    >
      <div className=" text-2xl mt-6  font-normal ">College Compass</div>
      <div className="ml-4">
        <button
          onClick={handleDashboard}
          className="mt-4 text-xl text-left font-light hover:bg-lime-300 hover:text-black w-52 pl-5 p-2 rounded-2xl"
        >
          Dashboard
        </button>
        <button
          onClick={handleTeachers}
          className="mt-4 text-left font-light text-xl hover:bg-lime-300 hover:text-black w-52 pl-5 p-2 rounded-2xl"
        >
          My Teachers
        </button>
        <button
          onClick={handleCourse}
          className="mt-4  text-xl text-left font-light  hover:bg-lime-300 hover:text-black w-52 pl-5 p-2 rounded-2xl"
        >
          My Courses
        </button>
        <button
          onClick={handleClubs}
          className="mt-4 text-left font-light text-xl hover:bg-lime-300 hover:text-black w-52 pl-5 p-2 rounded-2xl"
        >
          My Clubs
        </button>
        <button
          onClick={handleNews}
          className="mt-4 text-left font-light text-xl hover:bg-lime-300 hover:text-black w-52 pl-5 p-2 rounded-2xl"
        >
          Events
        </button>
      </div>
    </div>
  );
}
