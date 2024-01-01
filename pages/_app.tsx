import "../styles/button.scss";
import "../styles/global.css";
import "../styles/imageGallery.scss";
import "../styles/nprogress.css";
// This ensures that the icon CSS is loaded immediately before attempting to render icons
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import type { AppProps } from "next/app";
import Router from "next/router";
import PlausibleProvider from "next-plausible";
import nProgress from "nprogress";
import { Toaster } from "react-hot-toast";
import { SWRConfig } from "swr";

// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <PlausibleProvider domain="soplugged.com" trackOutboundLinks={true}>
        <SWRConfig
          value={{
            refreshInterval: 5000,
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
          }}
        >
          <div className="">
            <Component {...pageProps} />
          </div>
          <Toaster position="bottom-left" />
        </SWRConfig>
      </PlausibleProvider>
    </>
  );
}

export default MyApp;
