import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { SEO } from "@/components/SEO";
import { GuideContentPage } from "@/scenes/GuideContentPage";
import {
  getAllPostsForHome,
  getAllPostsWithSlug,
  getPostBySlug,
} from "@/utils/graphcms";

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

  const posts = (await getAllPostsForHome()) || [];
  const relatedPosts = posts
    .filter((post: any) => post.slug !== params?.id)
    .slice(0, 4);

  return {
    props: { post, relatedPosts },
    revalidate: 2 * 60,
  };
};

export default GuidePage;
