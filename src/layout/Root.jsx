import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Root = () => {
  const { loading } = useContext(AuthContext);

  //for loading whole website
  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen z-50 bg-black">
        <div className="w-40 h-40 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="m-0 p-0">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
