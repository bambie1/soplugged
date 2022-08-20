import type { GetStaticProps, NextPage } from "next";

import ProPage from "@/scenes/ProPage";
import { SEO } from "@/components/SEO";
import { getAllPostsForHome } from "@/utils/graphcms";

const Pro: NextPage = (props) => {
  return (
    <>
      <SEO
        description="Professional help for your business' digital needs"
        title="SoPluggedPRO | Scale your business with ease"
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
