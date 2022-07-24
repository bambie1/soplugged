import type { AppProps } from "next/app";
import Router from "next/router";
import nProgress from "nprogress";
import { Toaster } from "react-hot-toast";

import { AuthProvider } from "@/context/authContext";
import { BusinessFormProvider } from "@/context/businessFormContext";

import "../flags.config";

// import "../styles/globals.scss";
import "../styles/global.css";
import "../styles/algolia.scss";
import "../styles/imageGallery.scss";
import "../styles/quill.scss";
import "../styles/nprogress.css";
import "@reach/dialog/styles.css";
import "@reach/tooltip/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";

// This ensures that the icon CSS is loaded immediately before attempting to render icons
import "@fortawesome/fontawesome-svg-core/styles.css";

// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <BusinessFormProvider>
        <div className="layout-div">
          <Component {...pageProps} />
          <Toaster position="bottom-left" />
        </div>
      </BusinessFormProvider>
    </AuthProvider>
  );
}

export default MyApp;
