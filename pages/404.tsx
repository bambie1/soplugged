import type { NextPage } from "next";

import SEO from "@/src/components/SEO";
import PageNotFound from "@/src/scenes/404Page";

const NotFound: NextPage = () => {
  return (
    <>
      <SEO
        title="Page not found | SoPlugged"
        description="We couldn't find this page you've requested"
      />
      <PageNotFound />
    </>
  );
};

export default NotFound;
