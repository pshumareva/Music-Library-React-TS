import React from "react";
import { Route, Routes } from "react-router-dom";
import AppWrap from "./AppWrap";
import HomePage from "../components/HomePage";
import Dashboard from "../components/Dashboard/Dashboard";
import AddAlbum from "../components/Create/AddAlbum";
import Login from "../components/Login/Login";
import SampleDashboard from "../components/SampleDashboard/SampleDashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppWrap />}>
        <Route index element={<HomePage />} />
        <Route path="/dashboard" element={<SampleDashboard />} />
        <Route path="/addalbum" element={<AddAlbum />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
