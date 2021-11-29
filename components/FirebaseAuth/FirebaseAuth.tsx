import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/auth";

const StyledFirebaseAuth = dynamic(
  () => import("react-firebaseui/StyledFirebaseAuth"),
  { ssr: false }
);

const FirebaseAuth = ({ referrer }: any) => {
  const [renderAuth, setRenderAuth] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setRenderAuth(true);
      if (referrer && referrer !== "") {
        localStorage.setItem("redirectRef", referrer);
      }
    }
  }, [referrer]);

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
      signInSuccessWithAuthResult: () => {
        let getSession = localStorage.getItem("redirectRef");
        if (getSession) {
          window.location.href = getSession;
          localStorage.removeItem("redirectRef");
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
