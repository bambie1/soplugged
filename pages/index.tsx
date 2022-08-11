import type { NextPage } from "next";

import HomePage from "@/scenes/HomePage";
import { SEO } from "@/components/SEO";

const Home: NextPage = () => {
  return (
    <>
      <SEO
        description="Online platform connecting you to black-owned businesses across Canada. If you're an entrepreneur, register your business to be featured on our platform."
        title="Discover black-owned businesses in Canada | SoPlugged"
      />
      <HomePage />
    </>
  );
};

export default Home;
