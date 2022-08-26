import type { GetStaticProps, NextPage } from "next";

import { getAllBlogPosts, getAllPostsForHome } from "@/utils/graphcms";
import { SEO } from "@/components/SEO";
import BlogsHomePage from "@/scenes/BlogsHomePage";

interface Props {
  posts: any[];
}

const GuidesHomePage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <SEO
        title="FREE Guides on how to scale your business | SoPluggedPRO"
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
