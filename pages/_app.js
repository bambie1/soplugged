import React, { useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/_globals.css";
import "../styles/_algolia.css";
import "../styles/_animation.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../src/theme";
import Head from "next/head";
import { SearchProvider } from "@contexts/searchContext";
import { BusinessFormProvider } from "@contexts/businessFormContext";
import { AuthProvider } from "@contexts/authContext";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { init } from "../utils/sentry";
import SavingAnimation from "@components/SavingAnimation";

init();

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    const start = (url) => {
      gtag.pageview(url);
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Raleway:wght@400;600&family=Permanent+Marker&family=Roboto&display=swap"
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
        <AuthProvider>
          <SearchProvider>
            <BusinessFormProvider>
              <Layout>
                {loading && <SavingAnimation message="Coming right up" />}
                <Component {...pageProps} />
              </Layout>
            </BusinessFormProvider>
          </SearchProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
