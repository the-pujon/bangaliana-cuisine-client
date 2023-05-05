import React, { useContext, useState } from "react";
import login from "../../assets/data-protection.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState(null);

  const { loginWithEmail, LogInWithGithub, LogInWithGoogle } =
    useContext(AuthContext);

  const location = useLocation();

  const path = location.state?.location?.pathname || "/";

  //console.log(location);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmail(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        setError(null);
        toast.success("login successful");

        navigate(path);
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/user-not-found).") {
          setError("Please provide a valid email");
        } else {
          setError("Wrong password");
        }

        //setError(error.massege)
        console.log(error.message === "Firebase: Error (auth/user-not-found).");
      });
  };

  const handleGoogle = (e) => {
    e.preventDefault();

    //const form = e.target;
    //const email = form.email.value;
    //const password = form.password.value;

    LogInWithGoogle()
      .then((result) => {
        console.log(result.user);

        setError(null);
        toast.success("login successful");

        navigate(path);
      })
      .catch((error) => {
        //setError(error.massege)
        console.log(error.message === "Firebase: Error (auth/user-not-found).");
      });
  };

  const handleGithub = (e) => {
    e.preventDefault();

    //const form = e.target;
    //const email = form.email.value;
    //const password = form.password.value;

    LogInWithGithub()
      .then((result) => {
        console.log(result.user);

        setError(null);
        toast.success("login successful");

        navigate(path);
      })
      .catch((error) => {
        //setError(error.massege)
        console.log(error.message === "Firebase: Error (auth/user-not-found).");
      });
  };

  return (
    <>
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
      <div className="hero min-h-screen bg-none">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left text-white">
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent ">
            <form onSubmit={handleLogin} className="card-body bg-transparent">
              <div className="text-3xl text-center text-white font-semibold">
                Please Login
              </div>
              <div className="form-control relative my-6">
                <input
                  autoComplete="off"
                  id="email"
                  name="email"
                  type="email"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 bg-transparent text-white focus:outline-none focus:borer-rose-600"
                  placeholder="email"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
                >
                  Email
                </label>
              </div>
              <div className="form-control relative ">
                <input
                  autoComplete="off"
                  id="password"
                  name="password"
                  type="password"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 bg-transparent text-white focus:outline-none focus:borer-rose-600"
                  placeholder="Password"
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>
              <div className="text-xs text-white">
                Don't have an account?{" "}
                <Link to="/signup" className="hover:text-amber-500">
                  Register
                </Link>
              </div>
              {error && <div className="text-xs text-warning">{error}</div>}
              <div className="form-control mt-6">
                <button type="submit" className="btn  bg-amber-500 ">
                  Login
                </button>
              </div>

              <div className="text-white text-2xl text-center font-semibold">
                Or
              </div>
              <div className="text-white text-center -mt-2 text-sm">
                Continue with{" "}
              </div>
              <div className="form-control flex flex-row ">
                <div
                  onClick={handleGithub}
                  className="btn rounded-full flex-1 bg-amber-500 "
                >
                  <FaGithub className="text-3xl" />
                </div>
                <div
                  onClick={handleGoogle}
                  className="btn rounded-full flex-1 bg-amber-500 "
                >
                  <FcGoogle className="text-3xl" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
