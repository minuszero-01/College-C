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
          <div className="border-2 h-full rounded-lg">
            <div className=" flex flex-col  m-4">
              <div className="p-6 flex flex-row justify-between  ">
                <div className="flex flex-col gap-6" style={{ width: "900px" }}>
                  <div className=" text-white text-2xl font-light p-4  rounded-lg bg-sky-700">
                    About :
                  </div>

                  <div className=" text-white text-2xl font-light">
                    Ast. Professor of Cloud Computing
                  </div>

                  <div className=" text-white text-2xl font-light">
                    Email Address : johnsmith004@gmail.com
                  </div>
                  <div className=" text-white text-2xl font-light">
                    Contact No. : 9012345678
                  </div>
                  <div className=" text-white text-2xl font-light">
                    Room No. : S501
                  </div>

                  <div className=" text-white text-2xl font-light">
                    Specialization : Cloud Computing
                  </div>
                  <div className=" text-white text-2xl font-light">
                    John Smith is a seasoned educator with a robust background
                    in computer science and a specialized focus in cloud
                    computing. John holds two advanced certifications in cloud
                    computing, which include AWS Certified Solutions Architect
                    and Google Cloud Certified Professional Cloud Architect.
                    These certifications underline his expertise in designing
                    scalable, reliable, and efficient systems on the cloud,
                    making him a valuable resource for students aiming to excel
                    in the cutting-edge field of cloud technology. In addition
                    to his teaching responsibilities, John is an active
                    innovator in the tech community.
                  </div>
                  <div className=" text-white text-2xl font-light">
                    He has successfully secured two patents that contribute
                    significantly to advancements in cloud technology. The first
                    patent details a novel method for data encryption in
                    distributed systems, enhancing security across cloud
                    services.
                  </div>
                  <div className=" text-white text-2xl font-light">
                    Certifications : AWS CCP, AWS Solution Architect
                  </div>
                </div>

                <div className="border-2 w-52 h-52 overflow-hidden rounded-full flex justify-center items-center">
                  <img src="\Images\IMG-20211001-WA0003-modified-modified.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
