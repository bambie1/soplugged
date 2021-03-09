import React, { useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/algolia.css";
import "../styles/animation.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../src/theme";
import Head from "next/head";
import "regenerator-runtime/runtime.js";
import { AuthProvider } from "../contexts/auth";
import { SearchProvider } from "../contexts/searchContext";
import firebase from "firebase/app";
import { useRouter } from "next/router";
import firebaseClient from "../src/firebase/firebaseClient";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  firebaseClient();
  firebase
    .auth()
    .getRedirectResult()
    .then((result) => {
      if (result.credential) {
        router.push("/my-business");
      }
    })
    .catch((error) => {
      console.log({ error });
    });

  useEffect(() => {
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      var email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }
      firebase
        .auth()
        .signInWithEmailLink(email, window.location.href)
        .then((result) => {
          window.localStorage.removeItem("emailForSignIn");
          router.push("/my-business");
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Find the perfect black-owned business for your needs."
        />
        <meta
          property="og:description"
          content="Online platform connecting you to black-owned businesses across Canada. If you're an entrepreneur, register your business to be featured on our platform or join our mailing list to stay plugged in."
        />
        <meta property="og:url" content="http://soplugged.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Raleway:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/algolia-min.css"
          integrity="sha256-HB49n/BZjuqiCtQQf49OdZn63XuKFaxcIHWf0HNKte8="
          crossOrigin="anonymous"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <SearchProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SearchProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
