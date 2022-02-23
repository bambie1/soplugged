import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { SEO } from "@/components/SEO";
import { getAllPostsWithSlug, getPostBySlug } from "@/utils/graphcms";
import { GuideContentPage } from "@/scenes/GuideContentPage";

interface Props {
  post: any;
}

const GuidePage: FC<Props> = ({ post }) => {
  return (
    <>
      <SEO title={`${post?.title || "Guides"} | SoPluggedPRO`} />
      <GuideContentPage post={post} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPostsWithSlug();

  return {
    paths: posts.map((post: any) => ({
      params: { id: post.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = (await getPostBySlug(params?.id || "")) || {};

  return {
    props: { post },
  };
};

export default GuidePage;
