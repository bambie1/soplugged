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
        description="Online platform connecting you to black-owned businesses across Canada. Find everything from restaurants, hairstylists and salons to tutoring, tech and healthcare services on our directory."
        title="SoPlugged | Discover black-owned businesses in Canada"
      />

      <Header />

      <Hero />
      <HomePage />
      <div className="mt-10 lg:mt-20"></div>
      <Footer />
    </>
  );
};

export default Home;
