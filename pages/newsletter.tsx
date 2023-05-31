import type { NextPage } from "next";

import NewsletterPage from "@/src/scenes/NewsletterPage";
import SEO from "@/src/components/SEO";

const Newsletter: NextPage = () => {
  return (
    <>
      <SEO
        title="Newsletter | SoPlugged"
        description="Entrepreneurial tips, Black-owned business highlights, and SoPlugged updates sent straight to your inbox every month!"
      />
      <NewsletterPage />
    </>
  );
};

export default Newsletter;
