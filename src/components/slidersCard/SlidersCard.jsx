import React from "react";
import logo from "../../assets/headerName.png";

import "./SlidersCard.scss";

const SlidersCard = ({ image }) => {
  return (
    <div className="SlidersCard" style={{ backgroundImage: `url(${image})` }}>
      <div>
        <h1>
          {/*{title1}*/}
          Welcome to
          <br /> <img src={logo} alt="" className=" mx-auto" />
        </h1>
        <p className="text-white">
          "Chefs don't make mistakes; they make new dishes." - Elizabeth Brigg
        </p>
      </div>
    </div>
  );
};

export default SlidersCard;
