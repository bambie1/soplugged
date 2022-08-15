import type { AppProps } from "next/app";
import Script from "next/script";
import Router from "next/router";
import nProgress from "nprogress";
import { Toaster } from "react-hot-toast";

import { AuthProvider } from "@/context/authContext";
import { BusinessFormProvider } from "@/context/businessFormContext";

// import "../styles/globals.scss";
import "../styles/button.scss";
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
    <>
      <AuthProvider>
        <BusinessFormProvider>
          <Component {...pageProps} />
          <Toaster position="bottom-left" />
        </BusinessFormProvider>
      </AuthProvider>

      {process.env.NODE_ENV !== "development" && (
        <Script
          id="smartLook"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.smartlook||(function(d) {
              var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
              var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
              c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
              })(document);
              smartlook('init', 'bfdb10310ff6ee36c72a4b764001a8f2165bd99b', { region: 'eu' });
          `,
          }}
        />
      )}
    </>
  );
}

export default MyApp;
