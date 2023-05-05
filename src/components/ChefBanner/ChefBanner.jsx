import React from "react";
import { FaLongArrowAltLeft, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefBanner = ({ chef }) => {
  //destructuring from chef
  const { name, photo, experience, des, recipes, likes } = chef;

  return (
    <div>
      <div className="hero min-h-screen bg-black/50 text-white">
        <div className="hero-content w-full flex">
          <div>
            <img
              src={photo}
              className="max-w-sm rounded-lg shadow-2xl flex-grow-0"
            />
          </div>
          <div className="flex-initial w-3/5 ">
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-4">Cooking experience: {experience} years </p>
            <p>Total recipes: {recipes}</p>
            <p className="py-4">Bio: {des}</p>

            <div className="flex justify-between mt-8">
              <Link to={-1}>
                <button className="btn bg-amber-500 flex-none">
                  <FaLongArrowAltLeft /> Go Back
                </button>
              </Link>
              <div className="flex gap-2 items-center flex-initial w-32">
                <FaThumbsUp className="text-amber-500" />
                {likes}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
