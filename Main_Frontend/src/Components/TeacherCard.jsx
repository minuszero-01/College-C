import React from "react";
import { Link } from "react-router-dom";

export default function TeacherCard({ id, teachername, subjectname }) {
  teachername = teachername.trim();
  return (
    <div
      className="border-2 rounded-lg p-4 bg-sky-700"
      style={{ width: "450px", height: "200px" }}
    >
      <div className="flex flex-row  mt-2 gap-4 justify-around  ">
        <div
          className=" flex flex-col gap-2 p-2  text-white"
          style={{ width: "250px" }}
        >
          <div className="text-2xl">Prof. {teachername} </div>
          <div className="text-lg">{subjectname}</div>
          <div>amankamble24@gmail.com</div>
          <div>9012345678</div>
        </div>

        <div
          className=" flex flex-col p-2  gap-2  text-white "
          style={{ width: "150px", height: "150px" }}
        >
          <div className="text-xl">Cabin no. 2</div>
          <div className="text-xl">Floor 2</div>
          <div key={id}>
            <Link to={`/teachers/${id}/${teachername}`}>
              <button
                className="border-2 rounded-full mt-5 bg-sky-900 hover:bg-lime-300 hover:text-black "
                style={{ width: "90px", height: "50px" }}
              >
                More Info
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
