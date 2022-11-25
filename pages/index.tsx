import dynamic from "next/dynamic";
import type { GetStaticProps, NextPage } from "next";

import { getAllPostsForHome } from "@/utils/graphcms";
import Hero from "@/components/home/Hero";
import { SEO } from "@/components/SEO";

const Header = dynamic(() => import("../components/Header/Header"));
const Footer = dynamic(() => import("../components/Footer/Footer"));
const HomePage = dynamic(() => import("../scenes/HomePage"));

const Home: NextPage = (props) => {
  return (
    <>
      <SEO
        description="Online platform connecting you to black-owned businesses across Canada. Find everything from restaurants, hairstylists and salons to tutoring, tech and healthcare services on our directory."
        title="SoPlugged | Discover black-owned businesses in Canada"
      />

      <Header />

      <Hero />
      <HomePage {...props} />
      <div className="mt-10 lg:mt-20"></div>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getAllPostsForHome()) || [];

  return {
    props: { posts },
  };
};

export default Home;
