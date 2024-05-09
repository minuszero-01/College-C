import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Me() {
  const navigate = useNavigate();
  useEffect(() => {
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
            navigate("/login");
          } else if (res.data.message == "Success") {
            navigate("/dashboard");
          }
        });
    };
  }, []);

  return <div>Loading.... </div>;
}
