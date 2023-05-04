import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { loggedUser, loading } = useContext(AuthContext);

  const location = useLocation();

  console.log(location);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen z-50 bg-black">
        <div className="w-40 h-40 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
      </div>
    );
  }

  if (loggedUser) {
    return children;
  }

  return <Navigate to="/login" state={{ location }}></Navigate>;
};

export default PrivateRouter;
