import React, { useContext, useState } from "react";
import Login from "../../assets/sign-up.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { Toaster, toast } from "react-hot-toast";

const SignUp = () => {
  const { signUpWithEmail } = useContext(AuthContext);

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  //for sign in user with email and password
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.url.value;

    if (password.length >= 6) {
      signUpWithEmail(email, password)
        .then((result) => {
          console.log(result.user);
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
          })
            .then(() => {
              console.log("updated");
              navigate("/");
              form.reset();
              toast.success("SignUp successful");
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => console.error(error));
      setError(null);
    } else {
      setError("Password must be 6 character");
    }
  };

  return (
    <div className="hero min-h-screen bg-transparent">
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
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center  lg:text-left text-white">
          <img src={Login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent ">
          <form onSubmit={handleRegister} className="card-body">
            <div className="text-3xl text-center text-white font-semibold">
              Please Sign Up
            </div>
            {/* name field */}
            <div className="form-control relative my-3">
              <input
                autoComplete="off"
                id="name"
                name="name"
                type="text"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 bg-transparent text-white focus:outline-none focus:borer-rose-600"
                placeholder="name"
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
              >
                Name
              </label>
            </div>

            {/* photoURL field */}
            <div className="form-control relative my-3">
              <input
                autoComplete="off"
                id="url"
                name="url"
                type="url"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 bg-transparent text-white focus:outline-none focus:borer-rose-600"
                placeholder="photo url"
              />
              <label
                htmlFor="url"
                className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
              >
                Photo URL
              </label>
            </div>

            {/* email field */}
            <div className="form-control relative my-3">
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

            {/* password field */}
            <div className="form-control relative mt-3">
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
            {/* redirect to login */}
            <div className="text-xs text-white">
              Already have an account?
              <Link to="/login" className="hover:text-amber-500">
                Login
              </Link>
            </div>
            {/* error handling */}
            {error && <div className="text-xs text-warning">{error}</div>}

            {/* sign up button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn  bg-amber-500 ">
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
