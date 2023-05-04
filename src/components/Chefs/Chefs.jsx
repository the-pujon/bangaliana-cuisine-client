import React from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";

import { FaThumbsUp } from "react-icons/fa";

const Chefs = () => {
  const chefs = useLoaderData();

  return (
    <div className="m-12">
      <div className="grid grid-cols-3 gap-8">
        {chefs.map((chef, index) => (
          <div className="card w-96 bg-black/40" key={index}>
            <figure>
              <img
                src={chef.photo}
                alt="car!"
                className=" h-96 w-72 mt-12 rounded-xl"
              />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">{chef.name}</h2>
              <p>{chef.experience} years of experience</p>
              <p>Total {chef.recipes} recipes</p>
              <div className="card-actions flex items-center justify-between">
                <p className="flex gap-2 items-center">
                  <FaThumbsUp />
                  {chef.likes}
                </p>
                <Link to={`/chefs/${chef.id}`} state={{ chef }}>
                  <button className="btn bg-amber-500">
                    View Recipes Button
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
