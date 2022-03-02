import { FC } from "react";
import { GetServerSideProps } from "next";

import { SEO } from "@/components/SEO";
import { GuideContentPage } from "@/scenes/GuideContentPage";
import { getAllPostsForHome, getPostBySlug } from "@/utils/graphcms";

interface Props {
  post: any;
  relatedPosts: any;
}

const GuidePage: FC<Props> = ({ post, relatedPosts }) => {
  return (
    <>
      <SEO
        title={`${post?.title || "Guides"} | SoPluggedPRO`}
        description={post?.excerpt}
      />
      <GuideContentPage post={post} relatedPosts={relatedPosts} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = (await getPostBySlug(params?.id || "")) || {};

  const posts = (await getAllPostsForHome()) || [];
  const relatedPosts = posts
    .filter((post: any) => post.slug !== params?.id)
    .slice(0, 4);

  return {
    props: { post, relatedPosts },
  };
};

export default GuidePage;
