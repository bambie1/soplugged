import React, { useEffect } from "react";
import "../styles/_globals.scss";
import "../styles/_algolia.css";
import "../styles/_animation.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../src/theme";
import { SearchProvider } from "@contexts/searchContext";
import { BusinessFormProvider } from "@contexts/businessFormContext";
import { AuthProvider } from "@contexts/authContext";
import { useRouter } from "next/router";
import { init } from "../utils/sentry";
import { SavingAnimation, Layout } from "@components/index";

init();

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    const start = (url) => {
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
