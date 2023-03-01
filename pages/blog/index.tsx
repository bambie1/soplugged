import type { GetStaticProps, NextPage } from "next";

import { getAllBlogPosts } from "@/utils/graphcms";
import SEO from "@/src/components/SEO";
import BlogsHomePage from "@/src/scenes/BlogsHomePage";
import { BlogPost } from "@/types/BlogPost";

interface Props {
  posts: BlogPost[];
}

const GuidesHomePage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <SEO
        title="Business Tips and Tricks for Black Entrepreneurs in Canada | SoPlugged Blog"
        description="Explore SoPlugged's blog for helpful guides on creating or improving your business' digital presence. Stay up-to-date with the latest SoPlugged news and spotlights on Black-owned businesses across Canada."
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
