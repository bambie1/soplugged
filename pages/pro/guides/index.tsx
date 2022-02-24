import { NextPage } from "next";

import { getAllPostsForHome } from "@/utils/graphcms";

import { SEO } from "@/components/SEO";
import { ProGuidesPage } from "@/scenes/ProGuidesPage";

interface Props {
  posts: any;
  feature: any;
}

const GuidesHomePage: NextPage<Props> = (props) => {
  return (
    <>
      <SEO title="FREE Guides on how to scale your business | SoPluggedPRO" />
      <ProGuidesPage {...props} />
    </>
  );
};

export default GuidesHomePage;

export async function getStaticProps() {
  const posts = (await getAllPostsForHome()) || [];

  const feature = posts.find((post: any) => post.featuredArticle === true);

  return {
    props: { posts, feature, revalidate: 10 * 60 },
  };
}
