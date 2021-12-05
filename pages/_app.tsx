import type { AppProps } from "next/app";
import Router from "next/router";
import nProgress from "nprogress";

import { AuthProvider } from "../context/authContext";

import "../styles/globals.scss";
import "../styles/algolia.scss";
import "../styles/imageGallery.scss";
import "../styles/quill.scss";
import "../styles/autocomplete.scss";
import "../styles/nprogress.css";
import "@reach/dialog/styles.css";
import "@reach/tooltip/styles.css";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <div className="layout-div">
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default MyApp;
