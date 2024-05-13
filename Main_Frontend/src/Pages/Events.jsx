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
                <div className="text-white"> Organizer Name</div>
                <div className="text-white">|</div>
                <div className="text-white">24/04/24</div>
              </div>
              <div className="flex flex-row items-center mt-2 justify-between px-4">
                <div className="   p-2" style={{ width: "750px" }}>
                  <p className="text-gray-400">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
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
                <div className="text-white"> Organizer Name</div>
                <div className="text-white">|</div>
                <div className="text-white">Publish date</div>
              </div>
              <div className="flex flex-row items-center mt-2 justify-between px-4">
                <div className=" text-gray-400  p-2" style={{ width: "700px" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
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
                <div className="text-white"> Organizer Name</div>
                <div className="text-white">|</div>
                <div className="text-white">Publish date</div>
              </div>
              <div className="flex flex-row items-center mt-2 justify-between px-4">
                <div className=" text-gray-400  p-2" style={{ width: "700px" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
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
                <div className="text-white"> Organizer Name</div>
                <div className="text-white">|</div>
                <div className="text-white">Publish date</div>
              </div>
              <div className="flex flex-row items-center mt-2 justify-between px-4">
                <div className=" text-gray-400  p-2" style={{ width: "700px" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
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
                <div className="text-white"> Organizer Name</div>
                <div className="text-white">|</div>
                <div className="text-white">Publish date</div>
              </div>
              <div className="flex flex-row items-center mt-2 justify-between px-4">
                <div className=" text-gray-400  p-2" style={{ width: "700px" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
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
