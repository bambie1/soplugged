import type { AppProps } from "next/app";
import Router from "next/router";
import nProgress from "nprogress";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";
import PlausibleProvider from "next-plausible";

import { BusinessFormProvider } from "@/context/businessFormContext";

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

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <PlausibleProvider domain="soplugged.com" trackOutboundLinks={true}>
        <SessionProvider session={session}>
          <SWRConfig
            value={{
              refreshInterval: 50000,
              fetcher: (resource, init) =>
                fetch(resource, init).then((res) => res.json()),
            }}
          >
            <BusinessFormProvider>
              <div className="">
                <Component {...pageProps} />
              </div>
              <Toaster position="bottom-left" />
            </BusinessFormProvider>
          </SWRConfig>
        </SessionProvider>
      </PlausibleProvider>
    </>
  );
}

export default MyApp;
