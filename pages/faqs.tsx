import type { GetStaticProps, NextPage } from "next";

import { FAQPage } from "@/scenes/FAQPage";
import { SEO } from "@/components/SEO";

const FAQ: NextPage = () => {
  return (
    <>
      <SEO
        title="Frequently Asked Questions | SoPlugged"
        description="The SoPlugged team has answers ready for questions you might have. If we missed anything, please send us an email"
      />
      <FAQPage />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    notFound: true,
  };
};

export default FAQ;
