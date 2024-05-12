import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import PerformanceGraph from "../Components/PerformanceGraph";
import CourseCard from "../Components/CourseCard";
import EventCard from "../Components/EventCard";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import ImagePop from "../Components/ImagePop";

export default function Dashboard() {
  const token = localStorage.getItem("token");
  const imageUrl = "Images/TimeTable.png";

  const [data, setData] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  const get_Events = useCallback(() => {
    const events = [];
    const eventNames = [
      "Coding Event",
      "Coding Seminar",
      "Hackathon",
      "GCP Cloud Event",
      "AeroSpace Activity",
    ];
    const clubNames = [
      "AWS Cloud Club",
      "CyberSecurity and BlockChain Club",
      "IDEATE Club",
      "Google Developer Student Club",
      "AeroSpace Club",
    ];
    const coordinators = [
      "Sankalp P.",
      "Sahil Bugade",
      "Garvin C.",
      "Ronit Virawani",
      " Unknown ",
    ];
    const registerButtons = [
      "Webite / Link",
      "Webite / Link",
      "Webite / Link",
      "Webite / Link",
      "Webite / Link",
    ];

    for (let i = 0; i < eventNames.length; i++) {
      events.push({
        eventName: eventNames[i],
        clubName: clubNames[i],
        coordinator: coordinators[i],
        registerButton: registerButtons[i],
      });
    }
    console.log(events);
    return events;
  }, []);

  useEffect(() => {
    setEventData(get_Events());
  }, []);

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
        setSubjects(response.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        // Optionally set an error state to render errors or handle them as needed
      }
    }

    fetchData();
  }, []);
  console.log(subjects);
  return (
    <div className="p-4 bg-gray-800">
      <div className="flex flex-row gap-4">
        <Navbar />
        <div className="w-full flex flex-col">
          <div className=" flex flex-row  py-2 items-center text-4xl font-light text-white gap-2">
            <p>Welcome back,</p>
            {data ? <p>{data?.data?.name}</p> : <p>Loading or no data!</p>}👋
          </div>
          <div className="w-full h-full my-2">
            <div className=" flex flex-row h-1/2">
              <div className="bg-amber-50 flex flex-col border-2 w-1/2 m-1 rounded-lg p-3  divide-y-2 divide-neutral-950">
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
              <div className="flex flex-col border-2 w-1/2 m-1  rounded-lg p-3 bg-amber-50 divide-y-2  divide-neutral-950">
                <div className="text-2xl font-normal pb-2">Performance</div>
                <div className="pt-8 pr-12">
                  <PerformanceGraph year={data ? data?.data?.year : "LY"} />
                </div>
              </div>
            </div>
            <div className="  flex flex-row h-1/2">
              <div className="flex flex-col  border-2 w-1/2 m-1 rounded-lg p-3 bg-amber-50 divide-y-2 divide-neutral-950">
                <div className="flex flex-row justify-between">
                  <div className=" text-2xl font-normal mb-2">Courses</div>
                  <button
                    onClick={() => setModalOpen(true)}
                    className=" px-4 w-auto h-8 items-center bg-cyan-600 rounded-xl text-white text-base font-normal hover:bg-lime-300 hover:text-black"
                  >
                    View TimeTable
                  </button>
                  <ImagePop
                    isOpen={modalOpen}
                    close={() => setModalOpen(false)}
                    imageUrl={imageUrl}
                  />
                </div>
                <div className="overflow-x-auto  ">
                  {subjects
                    ? subjects.map((item) => (
                        <CourseCard
                          subject={item.subjectname}
                          teacher={item.teachername}
                        />
                      ))
                    : "null"}
                </div>
              </div>
              <div className="flex flex-col border-2 w-1/2 m-1 rounded-lg p-3 bg-amber-50 divide-y-2 divide-neutral-950">
                <div className="text-2xl font-normal pb-2">Events</div>
                <div className="overflow-auto">
                  {eventData.map((data) => (
                    <EventCard
                      eventName={data.eventName}
                      clubName={data.clubName}
                      coordinator={data.coordinator}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
