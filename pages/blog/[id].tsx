import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import SEO from "@/src/components/SEO";
import BlogPage from "@/src/scenes/BlogPage";
import { fetchAPI } from "@/utils/graphcms";
import { BlogPost } from "@/types/BlogPost";

interface Props {
  post: BlogPost;
  morePosts: BlogPost[];
}

const GuidePage: FC<Props> = ({ post, morePosts }) => {
  return (
    <>
      <SEO
        title={`${post?.title || "Guides"} | SoPlugged Blog`}
        description={post?.excerpt}
        overrideImage={post?.blogImage.url}
      />
      <BlogPage post={post} morePosts={morePosts} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPostsWithSlug();
  return {
    paths: posts.map(({ slug }: BlogPost) => ({
      params: { id: slug },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (typeof params?.id !== "string")
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };

  const { post, morePosts } =
    (await getPostAndMorePosts(params?.id || "")) || {};

  return {
    props: {
      post,
      morePosts,
    },
  };
};

export default GuidePage;

// GraphCMS queries
const gql = String.raw;
async function getPostAndMorePosts(
  slug: string
): Promise<{ post: BlogPost; morePosts: BlogPost[] }> {
  const data = await fetchAPI(
    gql`
      query PostBySlug($slug: String!) {
        post(stage: PUBLISHED, where: { slug: $slug }) {
          title
          slug
          excerpt
          content {
            html
          }
          createdAt
          author {
            name
            picture {
              url
            }
          }
          blogImage {
            url
          }
          blogImageAlt
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
          first: 2
          where: { slug_not_in: [$slug] }
          stage: PUBLISHED
        ) {
          title
          slug
          createdAt
          excerpt
          author {
            name
            picture {
              url
            }
          }
          blogImage {
            url
          }
          blogImageAlt
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
