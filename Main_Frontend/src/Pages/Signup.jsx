import React, { useState } from "react";
import { Heading } from "../Components/Heading";
import { InputBox } from "../Components/InputBox";
import { Button } from "../Components/Button";
import { ButtonWarning } from "../Components/ButtonWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [enroll, setEnroll] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const navigate = useNavigate();

  return (
    <div className="flex flex-row">
      <div className="bg-slate-100 h-screen w-1/3">
        <div className="flex h-screen justify-center items-center text-4xl font-semibold">
          Welcome to Signup Page
        </div>
      </div>
      <div className="bg-slate-800 h-screen w-2/3">
        <div className="flex h-screen items-center w-full justify-center">
          <div className="flex flex-col rounded-lg bg-white w-80 text-center p-2 h-max px-4 border-2">
            <Heading label={"Signup"}></Heading>
            <div className="text-slate-400 font-normal mt-2 mb-2">
              Enter your Information to Signup
            </div>

            <InputBox
              type={"text"}
              label={"First Name"}
              placeholder={"Enter the First Name"}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            ></InputBox>

            <InputBox
              type={"text"}
              label={"Last Name"}
              placeholder={"Enter the Last Name"}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            ></InputBox>

            <InputBox
              label={"Enrollnment Number"}
              placeholder={"Enter the Enrollment Number"}
              onChange={(e) => {
                setEnroll(e.target.value);
              }}
            ></InputBox>

            <InputBox
              type={"Password"}
              label={"Password"}
              placeholder={"Enter the Password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></InputBox>

            <InputBox
              type={"number"}
              label={"Mobile Number"}
              placeholder={"Enter the Mobile Number"}
              onChange={(e) => {
                setMobileNumber(e.target.value);
              }}
            ></InputBox>
            <div className="mt-4">
              <Button
                onClick={async () => {
                  await axios
                    .post("http://localhost:3000/api/v1/user/signup", {
                      firstName: firstName,
                      lastName: lastName,
                      password: password,
                      enrollment: enroll,
                      mobileNumber: mobileNumber,
                    })
                    .then((res) => {
                      console.log(res);
                      localStorage.setItem("token", res.data.token);
                      if (res.data.message == "Success") {
                        navigate("/dashboard");
                      } else if (res.data.message == "Failed") {
                        navigate("/signup");
                      }
                    });
                }}
                label={"Signup"}
              ></Button>
            </div>
            <ButtonWarning
              label={"Already have an account"}
              to={"/login"}
              buttonText={"Login"}
            ></ButtonWarning>
          </div>
        </div>
      </div>
    </div>
  );
}
