import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Me from "./Pages/Me";
import Courses from "./Pages/Courses";
import Events from "./Pages/Events";
import Clubs from "./Pages/Clubs";
import Teachers from "./Pages/Teachers";
import SpecificTeacherPage from "./Pages/SpecificTeacherPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Me />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route
          path="/teachers/:id/:teachername"
          element={<SpecificTeacherPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
