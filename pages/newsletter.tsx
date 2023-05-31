import type { NextPage } from "next";

import NewsletterPage from "@/src/scenes/NewsletterPage";
import SEO from "@/src/components/SEO";

const Newsletter: NextPage = () => {
  return (
    <>
      <SEO
        title="Newsletter | SoPlugged"
        description="Business tips, resources, and grants specifically available to Black entrepreneurs, delivered to your inbox every month!"
      />
      <NewsletterPage />
    </>
  );
};

export default Newsletter;
