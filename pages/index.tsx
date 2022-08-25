import type { NextPage } from "next";
import dynamic from "next/dynamic";

import Hero from "@/components/Hero";
import { SEO } from "@/components/SEO";

const Header = dynamic(() => import("../components/Header/Header"));
const Footer = dynamic(() => import("../components/Footer/Footer"));
const HomePage = dynamic(() => import("../scenes/HomePage"));

const Home: NextPage = () => {
  return (
    <>
      <SEO
        description="Online platform connecting you to black-owned businesses across Canada. If you're an entrepreneur, register your business to be featured on our platform."
        title="SoPlugged | Discover black-owned businesses in Canada"
      />

      <Header showBanner />

      <Hero />
      <HomePage />

      <Footer />
    </>
  );
};

export default Home;
