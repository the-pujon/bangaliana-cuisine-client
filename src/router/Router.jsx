import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ChefPage from "../pages/ChefPage/ChefPage";
import PrivateRouter from "./PrivateRouter";
import MenuPage from "../pages/MenuPage/MenuPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://bangaliana-cuisine-server.vercel.app/chefs"),
      },
      {
        path: "chefs/:id",
        element: (
          <PrivateRouter>
            {" "}
            <ChefPage />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://bangaliana-cuisine-server.vercel.app/recipes/${params.id}`
          ),
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/menu",
    element: <MenuPage />,
  },
]);

export default router;
