import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { SEO } from "@/components/SEO";
import BlogPage from "@/scenes/BlogPage";
import { getAllPostsWithSlug, getPostAndMorePosts } from "@/utils/graphcms";

interface Props {
  post: any;
  morePosts: any;
}

const GuidePage: FC<Props> = ({ post, morePosts }) => {
  return (
    <>
      <SEO
        title={`${post?.title || "Guides"} | SoPluggedPRO`}
        description={post?.seo?.description}
        variant="blog"
      />
      <BlogPage post={post} morePosts={morePosts} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPostsWithSlug();
  return {
    paths: posts.map(({ slug }: any) => ({
      params: { id: slug },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { post, morePosts } =
    (await getPostAndMorePosts(params?.id || "", false)) || {};

  return {
    props: { post, morePosts },
  };
};

export default GuidePage;
