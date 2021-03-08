import React, { useState, useEffect, createContext, useContext } from "react";
import firebaseClient from "../src/firebase/firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";
import nookies from "nookies";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  firebaseClient();
  const [user, setUser] = useState(null);

  const sendLink = (userMail) => {
    return firebase
      .auth()
      .sendSignInLinkToEmail(userMail, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", userMail);
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  };
  var actionCodeSettings = {
    url: process.env.NEXT_PUBLIC_FB_URL,
    handleCodeInApp: true,
  };

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", {});
        return;
      }
      const token = await user.getIdToken();
      setUser(user);
      nookies.set(undefined, "token", token, {});
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user, sendLink }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
