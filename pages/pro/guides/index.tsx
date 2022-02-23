import { NextPage } from "next";

import { getAllPostsForHome, getPostBySlug } from "@/utils/graphcms";

import { SEO } from "@/components/SEO";
import { ProGuidesPage } from "@/scenes/ProGuidesPage";

interface Props {
  posts: any;
}

const GuidesHomePage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <SEO title="FREE Guides on how to scale your business | SoPluggedPRO" />
      <ProGuidesPage posts={posts} />
    </>
  );
};

export default GuidesHomePage;

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPostsForHome(preview)) || [];

  return {
    props: { posts, revalidate: 10 * 60 },
  };
}
