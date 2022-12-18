import type { GetStaticProps, NextPage } from "next";

import { getAllBlogPosts } from "@/utils/graphcms";
import SEO from "@/components/SEO";
import BlogsHomePage from "@/scenes/BlogsHomePage";

interface Props {
  posts: any[];
}

const GuidesHomePage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <SEO
        title="Helpful guides to create or improve your business' digital presence and stay updated with SoPlugged news | SoPlugged Blog"
        description="Explore our free guides and resources that we've compiled to help you grow your business with ease."
        variant="blog"
      />

      <BlogsHomePage posts={posts} />
    </>
  );
};

export default GuidesHomePage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getAllBlogPosts()) || [];

  return {
    props: { posts },
  };
};
