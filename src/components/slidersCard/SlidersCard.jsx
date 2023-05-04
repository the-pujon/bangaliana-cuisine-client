import React from "react";
import logo from "../../assets/headerName.png";

import "./SlidersCard.scss";

const SlidersCard = ({ image, title1, title2, slogan }) => {
  return (
    <div className="SlidersCard" style={{ backgroundImage: `url(${image})` }}>
      <div>
        <h1>
          {title1}
          <br /> <img src={logo} alt="" className=" text-center" />
        </h1>
        <p className="text-white">{slogan}</p>
      </div>
    </div>
  );
};

export default SlidersCard;
