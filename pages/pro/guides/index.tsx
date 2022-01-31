import { getAllPostsForHome } from "@/utils/graphcms";

import { SEO } from "@/components/SEO";
import { NextPage } from "next";
import { ProGuidesPage } from "@/scenes/ProGuidesPage";

interface Props {
  posts: any;
}

const GuidesHomePage: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <SEO title="FREE Guides on how to scale your business | SoPluggedPRO" />
      <ProGuidesPage posts={posts} />
    </div>
  );
};

export default GuidesHomePage;

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { posts, revalidate: 10 * 60 },
  };
}
