import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ChefBanner from "../../components/ChefBanner/ChefBanner";
import { BsStar, BsStarFill } from "react-icons/bs";

import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import Rating from "react-rating";
import toast, { Toaster } from "react-hot-toast";

const ChefPage = () => {
  const id = useParams().id;
  const [chef, setChef] = useState({});
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    fetch(`https://bangaliana-cuisine-server.vercel.app/chef/${id}`)
      .then((res) => res.json())
      .then((data) => setChef(data))
      .catch((err) => console.log(err));
  }, []);

  const recipes = useLoaderData();

  const handleFavorite = (id) => {
    const updateDisable = [...favorite, id];
    setFavorite(updateDisable);

    toast.success("My favorite added");
  };

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
          duration: 2000,
          style: {
            background: "rgba(0,0,0,.8)",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      {/* for showing chef banner */}
      <ChefBanner chef={chef} />

      {/* for showing all recipes */}
      <div className="text-white ">
        <div className="text-center text-5xl mt-8 font-semibold">
          Top recipes by {chef.name}
        </div>

        <div className="grid grid-cols-3 m-8">
          {/* mapping data */}
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-black/70 border-spacing-1 border-x border-y"
            >
              <div>
                <img src={recipe.picture} alt="" className="h-56 w-full" />
              </div>
              <div className="p-4">
                <div>Recipe name: {recipe.recipe_name}</div>

                <div>
                  {/* react rating */}
                  <Rating
                    className="pt-0 mt-0 "
                    readonly
                    style={{ color: "orange" }}
                    placeholderRating={recipe.rating}
                    emptySymbol={<BsStar />}
                    placeholderSymbol={<BsStarFill />}
                    fullSymbol={<BsStarFill />}
                  />
                </div>
                <div className="flex justify-between">
                  {/* favorite button */}
                  <button
                    className="btn btn-sm bg-amber-500"
                    onClick={() => handleFavorite(recipe.id)}
                    disabled={favorite.includes(recipe.id)}
                  >
                    {favorite.includes(recipe.id) ? (
                      <MdFavorite />
                    ) : (
                      <MdFavoriteBorder />
                    )}
                  </button>
                  {/* The button to open modal */}
                  {/* see details button */}
                  <label
                    htmlFor={recipe.id}
                    className="btn btn-sm bg-amber-500 border-0"
                  >
                    See Details
                  </label>
                </div>
              </div>

              {/* modal page after opening a modal */}
              <input type="checkbox" id={recipe.id} className="modal-toggle" />
              <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-black">
                  <div>
                    <img src={recipe.picture} alt="" className="h-56 w-full" />
                  </div>
                  <h3 className="font-bold text-lg">
                    Recipe name: {recipe.recipe_name}
                  </h3>
                  <div className="py-4">
                    <div>
                      Ingredients:
                      {recipe.ingredients.map((ingredient, index) => (
                        <div key={index} className="list-item ms-20">
                          {ingredient}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      Cooking Method: {recipe.cooking_method}
                    </div>
                  </div>
                  <div className="modal-action">
                    <label htmlFor={recipe.id} className="btn bg-amber-500">
                      Close
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefPage;
