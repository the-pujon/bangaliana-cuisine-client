import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import avatar from "../../assets/Bg/black-blue-1.jpg";
import { AuthContext } from "../../Provider/AuthProvider";
import logo from "../../assets/logo1.png";

const Navbar = () => {
  const { logOut, loggedUser } = useContext(AuthContext);

  //console.log(displayName, photoURL);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Logout");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="navbar bg-black/50 text-white fixed z-40">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </div>
          <img src={logo} alt="" className="w-32" />
        </div>

        {/* desktop screen nav menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>

        {/* Avatar dropdown menu */}
        <div className="navbar-end">
          {!loggedUser && (
            <Link to="/login">
              <button className="btn border-white btn-outline  btn-sm text-white hover:border-amber-600 hover:bg-transparent">
                Login
              </button>
            </Link>
          )}
          {loggedUser && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div
                  className="w-10 rounded-full"
                  title={loggedUser?.displayName && loggedUser?.displayName}
                >
                  <img src={loggedUser?.photoURL && loggedUser?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black/60 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-ghost" onClick={handleLogOut}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
