import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Me() {
  const navigate = useNavigate();

  if (localStorage.getItem("token") == null) {
    console.log("here");
    navigate("/login");
  }
  window.onload = async () => {
    await axios
      .get("http://localhost:3000/", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.message == "Failed") {
          console.log("aushd");
          navigate("/login");
        } else if (res.data.message == "Success") {
          console.log("here1");
          navigate("/dashboard");
        }
      });
  };

  return <div>Loading.... </div>;
}
