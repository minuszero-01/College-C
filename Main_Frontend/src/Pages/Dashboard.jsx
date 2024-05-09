import axios from "axios";
import React, { useEffect, useState } from "react";
import PerformanceGraph from "../Components/PerformanceGraph";

export default function Dashboard() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState("");
  const [subjects, setSubjects] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (!token) {
        console.error("Token is not available");
        return;
      }
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/user/dashboard/info",
          { token }
        );

        console.log(response);

        if (response.data) {
          console.log("Data fetched:", response.data);
          setData(response.data);
        } else {
          console.log("No data returned");
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
        // Optionally set an error state to render errors or handle them as needed
      }
    }

    fetchData();
  }, [token]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/user/dashboard/subjects",
          {
            token: token,
          }
        );
        setSubjects(response);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        // Optionally set an error state to render errors or handle them as needed
      }
    }

    fetchData();
  }, []);

  return (
    <div className="p-2 bg-gray-50">
      <div className="flex flex-row gap-4">
        <div
          className="flex flex-col   rounded-2xl  h-screen bg-blue-950  text-white items-center gap-6 font-medium text-lg"
          style={{ width: "300px", height: "98vh" }}
        >
          <div className=" text-2xl mt-6  font-normal ">College Compass</div>
          <div className="ml-4">
            <button className="mt-4 text-xl text-left font-light hover:bg-lime-300 hover:text-black w-52 pl-5 p-2 rounded-2xl">
              Dashboard
            </button>
            <button className="mt-4  text-xl text-left font-light  hover:bg-lime-300 hover:text-black w-52 pl-5 p-2 rounded-2xl">
              My Courses
            </button>
            <button className="mt-4 text-left font-light text-xl hover:bg-lime-300 hover:text-black w-52 pl-5 p-2 rounded-2xl">
              My Clubs
            </button>
            <button className="mt-4 text-left font-light text-xl hover:bg-lime-300 hover:text-black w-52 pl-5 p-2 rounded-2xl">
              News
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className=" mt-4 text-4xl font-light">
            Welcome back, Harsh 👋
          </div>
          <div className="w-full h-full my-2">
            <div className=" flex flex-row h-1/2">
              <div className="flex flex-col border-2 w-1/2 m-2 rounded-xl p-3 bg-white divide-y-2">
                <div className="text-2xl font-normal pb-2">Profile</div>
                <div className="  flex flex-row justify-around  h-full items-center">
                  <div className=" flex flex-col gap-4 text-xl font-normal">
                    <div className="flex gap-4">
                      <div>Name :</div>
                      <div>
                        {data ? (
                          <p>{data?.data?.name}</p>
                        ) : (
                          <p>Loading or no data!</p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div>Class :</div>
                      <div>
                        {data ? (
                          <p>{data?.className?.classname}</p>
                        ) : (
                          <p>Loading or no data!</p>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div>E No. :</div>
                      <div>
                        {data ? (
                          <p>{data?.data?.enrollmentnumber}</p>
                        ) : (
                          <p>Loading or no data!</p>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div>CGPA : </div>
                      <div>{data ? <p>8.19</p> : "none"}</div>
                    </div>
                  </div>
                  <div className="border-2 w-52 h-52 rounded-full">
                    <img src="Images\IMG-20211001-WA0003-modified-modified.png"></img>
                  </div>
                </div>
              </div>
              <div className="flex flex-col border-2 w-1/2 m-2 rounded-xl p-3 bg-white divide-y-2">
                <div className="text-2xl font-normal pb-2">Performance</div>
                <div className="pt-8 pr-12">
                  <PerformanceGraph />
                </div>
              </div>
            </div>
            <div className="  flex flex-row h-1/2">
              <div className="flex flex-col border-2 w-1/2 m-2 rounded-xl p-3 bg-white divide-y-2">
                <div className="text-2xl font-normal pb-2">Courses</div>
                <div className=""></div>
              </div>
              <div className="flex flex-col border-2 w-1/2 m-2 rounded-xl p-3 bg-white divide-y-2">
                <div className="text-2xl font-normal pb-2">Events</div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
