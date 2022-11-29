import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { SEO } from "@/components/SEO";
import BlogPage from "@/scenes/BlogPage";
import { fetchAPI } from "@/utils/graphcms";

interface Props {
  post: any;
  morePosts: any;
}

const GuidePage: FC<Props> = ({ post, morePosts }) => {
  return (
    <>
      <SEO
        title={`${post?.title || "Guides"} | SoPlugged Blog`}
        description={post?.excerpt}
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
    (await getPostAndMorePosts(params?.id || "")) || {};

  return {
    props: { post, morePosts },
  };
};

export default GuidePage;

// GraphCMS queries
const gql = String.raw;
async function getPostAndMorePosts(slug: any) {
  const data = await fetchAPI(
    gql`
      query PostBySlug($slug: String!) {
        post(stage: PUBLISHED, where: { slug: $slug }) {
          title
          slug
          excerpt
          plugSoPluggedPro
          content {
            html
          }
          createdAt
          author {
            name
          }
          blogImage {
            url
          }
          categories(first: 10) {
            title
            color {
              hex
              rgba {
                r
                g
                b
              }
            }
          }
        }
        morePosts: posts(
          orderBy: createdAt_DESC
          first: 4
          where: { slug_not_in: [$slug] }
          stage: PUBLISHED
        ) {
          title
          slug
          createdAt
          excerpt
          author {
            name
          }
          blogImage {
            url
          }
        }
      }
    `,
    {
      variables: {
        slug,
      },
    }
  );
  return data;
}

async function getAllPostsWithSlug() {
  const data = await fetchAPI(gql`
    query PostsWithSlugs {
      posts(stage: PUBLISHED) {
        slug
      }
    }
  `);
  return data.posts;
}
