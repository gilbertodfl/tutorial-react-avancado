import React from "react";
import { Outlet } from "react-router";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default App; // ← mude para default