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
  //console.log(auth.currentUser);

  const signUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmail = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const LogInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const LogInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      //console.log(currentUser);
      setLoggedUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSub();
    };
  }, []);

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
