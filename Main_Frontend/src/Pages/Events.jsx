import React from "react";
import Navbar from "../Components/Navbar";

export default function Events() {
  return (
    <div className="p-4 bg-gray-800">
      <div className="flex flex-row gap-4">
        <Navbar />
        <div className=" w-full flex flex-col" style={{ height: "860px" }}>
          <div className=" flex flex-row  py-2 items-center text-4xl  text-white font-semibold gap-2">
            <p className="mb-2">Events 🎉</p>
          </div>
          <div
            className="border-2  border-gray-500 w-full rounded-xl overflow-auto flex flex-col"
            style={{ height: "860px" }}
          >
            <div className="flex flex-col border-2 m-4 p-4 h-auto rounded-xl   ">
              <div className="flex flex-row gap-4 pl-2">
                <div className="text-white">Technical Talk: Machine Learning for Everyone</div>
                <div className="text-white">|</div>
                <div className="text-white">30/05/24</div>
              </div>
              <div className="flex flex-row items-center mt-2 justify-between px-4">
                <div className="   p-2" style={{ width: "750px" }}>
                  <p className="text-gray-400">
                  Curious about Machine Learning? Join us for a beginner-friendly talk that demystifies the concepts and showcases its applications. 
                  Snacks provided!
                  </p>
                </div>
                <button
                  // onClick={() => setModalOpen(true)}
                  className=" px-4 w-28 h-12  items-center bg-cyan-600 rounded-xl text-white text-base font-normal hover:bg-lime-300 hover:text-black"
                >
                  View
                </button>
              </div>
            </div>

            <div className="flex flex-col border-2 m-4 p-4 h-auto rounded-xl   ">
              <div className="flex flex-row gap-4 pl-2">
                <div className="text-white"> Cultural Fest: Celebrating Diversity</div>
                <div className="text-white">|</div>
                <div className="text-white">20/05/2024</div>
              </div>
              <div className="flex flex-row items-center mt-2 justify-between px-4">
                <div className=" text-gray-400  p-2" style={{ width: "700px" }}>
                Immerse yourself in the vibrant tapestry of India! Dance performances, music, food stalls, and more await. 
                Celebrate unity in diversity!
                </div>
                <button
                  // onClick={() => setModalOpen(true)}
                  className=" px-4 w-28 h-12  items-center bg-cyan-600 rounded-xl text-white text-base font-normal hover:bg-lime-300 hover:text-black"
                >
                  View
                </button>
              </div>
            </div>

            <div className="flex flex-col border-2 m-4 p-4 h-auto rounded-xl   ">
              <div className="flex flex-row gap-4 pl-2">
                <div className="text-white"> Career Guidance Workshop: Landing Your Dream Job</div>
                <div className="text-white">|</div>
                <div className="text-white">04/06/2024</div>
              </div>
              <div className="flex flex-row items-center mt-2 justify-between px-4">
                <div className=" text-gray-400  p-2" style={{ width: "700px" }}>
                Get expert ' Monil , Harsh and Manali ' advice on crafting a winning resume, acing interviews, and navigating the job market. 
                Don't miss this opportunity to take charge of your career!
                </div>
                <button
                  // onClick={() => setModalOpen(true)}
                  className=" px-4 w-28 h-12  items-center bg-cyan-600 rounded-xl text-white text-base font-normal hover:bg-lime-300 hover:text-black"
                >
                  View
                </button>
              </div>
            </div>

            <div className="flex flex-col border-2 m-4 p-4 h-auto rounded-xl   ">
              <div className="flex flex-row gap-4 pl-2">
                <div className="text-white">Inter-College Sports Meet - "Utsav Sports</div>
                <div className="text-white">|</div>
                <div className="text-white">13/06/2024</div>
              </div>
              <div className="flex flex-row items-center mt-2 justify-between px-4">
                <div className=" text-gray-400  p-2" style={{ width: "700px" }}>
                Witness the thrill of sportsmanship and camaraderie as colleges from across the region compete in various sports events.
                Join us for an action-packed day at "Utsav Sports".
                </div>
                <button
                  // onClick={() => setModalOpen(true)}
                  className=" px-4 w-28 h-12  items-center bg-cyan-600 rounded-xl text-white text-base font-normal hover:bg-lime-300 hover:text-black"
                >
                  View
                </button>
              </div>
            </div>
            <div className="flex flex-col border-2 m-4 p-4 h-auto rounded-xl ">
              <div className="flex flex-row gap-4 pl-2">
                <div className="text-white"> Tech Symposium - "TechVaganza"</div>
                <div className="text-white">|</div>
                <div className="text-white">19/06/2024</div>
              </div>
              <div className="flex flex-row items-center mt-2 justify-between px-4">
                <div className=" text-gray-400  p-2" style={{ width: "700px" }}>
                Embark on a journey of innovation and technology at "TechVaganza". 
                Engage in workshops, seminars, and competitions to showcase your technical prowess and creativity.
                </div>
                <button
                  // onClick={() => setModalOpen(true)}
                  className=" px-4 w-28 h-12  items-center bg-cyan-600 rounded-xl text-white text-base font-normal hover:bg-lime-300 hover:text-black"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
