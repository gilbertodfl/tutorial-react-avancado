import React from "react";
import { Routes, Route } from "react-router";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  );
}
