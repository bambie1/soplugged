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
        title="Helpful guides to create or improve your business' digital presence and stay updated with SoPlugged news | SoPlugged Blog"
        description="Get inspired and stay informed with SoPlugged's blog, featuring helpful guides to create or improve your business' digital presence and stay updated with the latest news. Discover a wealth of resources to support black-owned businesses, and read about our monthly featured businesses. Join us in promoting economic diversity and empowerment by visiting SoPlugged's blog today."
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
