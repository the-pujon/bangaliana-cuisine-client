import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null);

  const [loading, setLoading] = useState(true);

  //for signup with email and password
  const signUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //for login with email and password
  const loginWithEmail = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  //for login with google
  const LogInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //for login with github
  const LogInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  //for logout
  const logOut = () => {
    return signOut(auth);
  };

  //for handling user logged in or out state
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      setLoggedUser(currentUser);
      setLoading(false);
    });

    //cleanup function
    return () => {
      unSub();
    };
  }, []);

  //object that will pass all function and state from here to all over the entire project
  const userInfo = {
    LogInWithGithub,
    LogInWithGoogle,
    signUpWithEmail,
    loginWithEmail,
    logOut,
    loggedUser,
    loading,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
