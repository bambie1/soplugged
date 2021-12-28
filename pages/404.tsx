import type { NextPage } from "next";

import { SEO } from "@/components/SEO";
import { PageNotFound } from "@/scenes/404Page";

const NotFound: NextPage = () => {
  return (
    <>
      <SEO
        title="404 Page not found | SoPlugged"
        description="We couldn't find this page you've requested"
      />
      <PageNotFound />
    </>
  );
};

export default NotFound;
