import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { JsRoutes } from "./routes/JsRoutes";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <JsRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
