import type { GetStaticProps, NextPage } from "next";

import SEO from "@/src/components/SEO";
import BlogsHomePage from "@/src/scenes/BlogsHomePage";
import { BlogPost } from "@/types/BlogPost";
import { fetchAPI } from "@/utils/graphcms";

interface Props {
  posts: BlogPost[];
}

const GuidesHomePage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <SEO
        title="Stay updated with SoPlugged news and helpful business tips | SoPlugged Blog"
        description="Explore SoPlugged's blog for helpful guides on creating or improving your business' digital presence. Stay up-to-date with the latest SoPlugged news and spotlights on Black-owned businesses across Canada."
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

// GraphCMS queries
const gql = String.raw;
async function getAllBlogPosts() {
  const data = await fetchAPI(
    gql`
      {
        posts(orderBy: createdAt_DESC, first: 20, stage: PUBLISHED) {
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
    `
  );
  return data?.posts;
}
