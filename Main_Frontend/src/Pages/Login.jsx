import React, { useCallback, useState } from "react";
import { Heading } from "../Components/Heading";
import { InputBox } from "../Components/InputBox";
import { Button } from "../Components/Button";
import { ButtonWarning } from "../Components/ButtonWarning";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const [enroll, setEnroll] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  return (
    <div className="flex flex-row">
      <div className=" h-screen w-1/3">
        <div className="flex flex-col  bg-slate-300 justify-center h-screen">
          <img src="\Images\CClogo.png" className="pr-20 pb-10"></img>
        </div>
      </div>
      <div className="bg-slate-800 h-screen w-2/3">
        <div className="flex h-screen items-center w-full justify-center">
          <div className="flex flex-col rounded-lg bg-white w-80 text-center p-2 h-max px-4 border-2">
            <Heading label={"Login"}></Heading>
            <div className="text-slate-400 font-normal mt-2 mb-2">
              Enter your Information to Login
            </div>
            <InputBox
              label={"Enrollment Number"}
              placeholder={"Enter Your Enrollment Number"}
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
            <div className="mt-4">
              <Button
                onClick={async () => {
                  await axios
                    .post("http://localhost:3000/api/v1/user/login", {
                      enrollment: enroll,
                      password: password,
                    })
                    .then((res) => {
                      console.log(res);
                      localStorage.setItem("token", res.data.token);
                      if (res.data.message == "Success") {
                        setName(res.data.info["rows"]["first_name"]);
                        navigate("/dashboard");
                        console.log("Done");
                      } else if (res.data.message == "Failed") {
                        navigate("/signup");
                      }
                    });
                }}
                label={"Login"}
              ></Button>
            </div>
            <ButtonWarning
              label={"Don't have an account ? "}
              to={"/signup"}
              buttonText={"Signup"}
            ></ButtonWarning>
          </div>
        </div>
      </div>
    </div>
  );
}
