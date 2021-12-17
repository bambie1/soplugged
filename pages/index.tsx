import type { NextPage } from "next";

import { HomePage } from "@/scenes/HomePage";
import { SEO } from "@/components/SEO";

const Home: NextPage = () => {
  return (
    <>
      <SEO
        description="Online platform connecting you to black-owned businesses across Canada. If you're an entrepreneur, register your business to be featured on our platform or join our mailing list to stay plugged in."
        title="We have the Black-Owned Businesses for your needs | SoPlugged"
      />
      <HomePage />
    </>
  );
};

export default Home;
