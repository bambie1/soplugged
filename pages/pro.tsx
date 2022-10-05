import type { GetStaticProps, NextPage } from "next";

import ProPage from "@/scenes/ProPage";
import { SEO } from "@/components/SEO";
import { getAllPostsForHome } from "@/utils/graphcms";

const Pro: NextPage = (props) => {
  return (
    <>
      <SEO
        description="Hire our team of experts to handle your digital needs, from custom
        websites to social media management"
        title="SoPlugged Pro | Grow your online presence with ease"
        variant="pro"
      />
      <ProPage {...props} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getAllPostsForHome()) || [];

  return {
    props: { posts },
  };
};

export default Pro;
