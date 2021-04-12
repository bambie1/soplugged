import React, { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import "firebase/auth";
import { useRouter } from "next/router";

const FirebaseAuth = ({ referrer }) => {
  const [renderAuth, setRenderAuth] = useState(false);
  const [successUrl, setSuccessUrl] = useState(referrer);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRenderAuth(true);
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
        requireDisplayName: false,
        signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
      },
    ],
    credentialHelper: "none",
    callbacks: {
      signInSuccessWithAuthResult: () => {
        if (successUrl) window.location.href = successUrl;
        else {
          router.push("/dashboard");
        }
      },
    },
    // signInSuccessUrl: "/dashboard",
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
