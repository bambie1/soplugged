import type { NextPage } from "next";

import SEO from "@/src/components/SEO";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

const Join: NextPage = () => {
  return (
    <>
      <SEO
        description="Whether you have a need, provide solutions, or both, SoPlugged is for you"
        title="Join SoPlugged"
      />
      <Header />
      <main className="h-screen"></main>
      <Footer />
    </>
  );
};

export default Join;
