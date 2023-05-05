import React from "react";
import Header from "../../components/Header/Header";

import Chefs from "../../components/Chefs/Chefs";

import { Toaster } from "react-hot-toast";
import About from "../../components/About/About";
import Menu from "../../components/Menu/Menu";

const Home = () => {
  return (
    <div>
      {/* for toast */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 5000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <Header />
      <About />

      <>
        <div className="text-white text-5xl text-center font-bold mt-10">
          Our Top Chefs
        </div>
        <Chefs />
      </>
      <Menu />
    </div>
  );
};

export default Home;
