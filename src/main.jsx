import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
import AuthProvider from "./Provider/AuthProvider";
import Home from "./pages/Home/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Home />
  </div>
);
