import type { NextPage } from "next";
import Script from "next/script";

import HomePage from "@/scenes/HomePage";
import { SEO } from "@/components/SEO";

const Home: NextPage = () => {
  return (
    <>
      <Script
        id="id"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="c33f31ed-63c9-4a22-9ee5-6ac537ce2ead";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
        }}
      />
      <SEO
        description="Online platform connecting you to black-owned businesses across Canada. If you're an entrepreneur, register your business to be featured on our platform."
        title="Discover black-owned businesses in Canada | SoPlugged"
      />
      <HomePage />
    </>
  );
};

export default Home;
