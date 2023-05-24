import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
const [user,setUser] = useState({})


  // create a new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in a user
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout a user
  const logOut = () => {
    return signOut(auth)
  }
 
  // monitor the user state
useEffect(()=>{
  const unSubscribe= onAuthStateChanged(auth,(loggedInUser)=>{
    setUser(loggedInUser);
  });
  return ()=>{
    unSubscribe();
  }
},[])
// send userinfo object to the component 
  const userInfo = {
    user,
    createUser,
    signIn,
    logOut
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
