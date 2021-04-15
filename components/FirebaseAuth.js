import React, { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import "firebase/auth";
import { useRouter } from "next/router";

const FirebaseAuth = ({ referrer }) => {
  const [renderAuth, setRenderAuth] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setRenderAuth(true);
      // console.log({ referrer });
      if (referrer && referrer !== "") {
        localStorage.setItem("ref", referrer);
      }
    }
  }, []);

  const firebaseAuthConfig = {
    signInFlow: "redirect",
    signInOptions: [
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        customParameters: {
          prompt: "select_account",
        },
      },
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
      },
    ],
    credentialHelper: "none",
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        console.log({ authResult, redirectUrl });
        let getSession = localStorage.getItem("ref");
        if (getSession) {
          window.location.href = getSession;
        } else router.push("/dashboard");
        return false;
      },
    },
  };

  return (
    <div>
      {renderAuth ? (
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig}
          firebaseAuth={firebase.auth()}
        />
      ) : null}
    </div>
  );
};

export default FirebaseAuth;
