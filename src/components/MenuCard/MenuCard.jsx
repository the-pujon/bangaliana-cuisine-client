import React from "react";

const MenuCard = ({ img, name, price }) => {
  return (
    <div>
      <div className="card w-96 glass">
        <figure>
          <img src={img} alt="car!" className="w-full h-60" />
        </figure>
        <div className="card-body text-white">
          <h2 className="card-title">{name}</h2>
          <p>Price: {price} tk</p>
          <div className="card-actions justify-end">
            <button className="btn bg-amber-500"> Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
