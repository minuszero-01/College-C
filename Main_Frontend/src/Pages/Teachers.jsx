import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import TeacherCard from "../Components/TeacherCard";
import axios from "axios";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/user/dashboard/subjects",
          {
            token: token,
          }
        );
        setTeachers(response.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        // Optionally set an error state to render errors or handle them as needed
      }
    }

    fetchData();
  }, []);
  return (
    <div className="p-4 bg-gray-800">
      <div className="flex flex-row gap-4">
        <Navbar />
        <div className="w-full flex flex-col">
          <div className=" flex flex-row  py-2 items-center text-4xl  text-white font-semibold gap-2">
            <p className="mb-2">Teachers 🧑‍🏫</p>
          </div>
          <div className="flex flex-row flex-wrap gap-4 ml-4">
            {teachers.map((item, index) => (
              <TeacherCard
                id={index}
                teachername={item.teachername}
                subjectname={item.subjectname}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
