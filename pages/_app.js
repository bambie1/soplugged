import React, { useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/algolia.css";
import "../styles/animation.css";
import "../styles/skeleton.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../src/theme";
import Head from "next/head";
import { SearchProvider } from "../contexts/searchContext";
import initAuth from "../utils/initAuth";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";

initAuth();

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_ID, {
      includedDomains: [
        "http://localhost:3000/",
        "https://staging-soplugged.vercel.app/",
        "https://soplugged.com",
      ],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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
        <script
          src="https://cdn.usefathom.com/script.js"
          data-site={process.env.NEXT_PUBLIC_FATHOM_ID}
          defer
        ></script>
      </Head>
      <ThemeProvider theme={theme}>
        <SearchProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SearchProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
