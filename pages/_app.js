import React from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/algolia.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../src/theme";
import Head from "next/head";
import "regenerator-runtime/runtime.js";
import { StateMachineProvider, createStore } from "little-state-machine";

createStore({
  businessInfo: {},
});

function MyApp({ Component, pageProps }) {
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
      </Head>
      <ThemeProvider theme={theme}>
        <StateMachineProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StateMachineProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
