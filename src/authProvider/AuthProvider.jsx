import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/Firebase.config";

export const AuthContext = createContext(null);


const auth = getAuth(app)

const AuthProvider = ({ children }) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)


  // create a new user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in a user
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout a user
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  // update profile information with name and imageurl 
  const profileUpdate = (name,photo)=>{
    updateProfile(auth.currentUser,{
      displayName:name,
      photoURL:photo
    })
  }
 
 
  // monitor the user state
useEffect(()=>{
  const unSubscribe= onAuthStateChanged(auth,(loggedInUser)=>{
    setUser(loggedInUser);
    setLoading(false);
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
    logOut,
    loading,
    profileUpdate
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
