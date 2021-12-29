import type { AppProps } from "next/app";
import Router from "next/router";
import nProgress from "nprogress";
import { Toaster } from "react-hot-toast";

import { AuthProvider } from "@/context/authContext";
import { BusinessFormProvider } from "@/context/businessFormContext";
import { AlgoliaSearchProvider } from "@/context/algoliaSearchContext";

import "../flags.config";

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
      <AlgoliaSearchProvider>
        <BusinessFormProvider>
          <div className="layout-div">
            <Component {...pageProps} />
            <Toaster position="bottom-left" />
          </div>
        </BusinessFormProvider>
      </AlgoliaSearchProvider>
    </AuthProvider>
  );
}

export default MyApp;
