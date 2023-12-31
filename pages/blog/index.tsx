import type { GetStaticProps, NextPage } from "next";

import BlogCard from "@/components/blog/BlogCard";
import SEO from "@/src/components/SEO";
import PageWrapper from "@/src/layouts/PageWrapper";
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
      />

      <PageWrapper
        title="Blog"
        subTitle="Explore our blog for helpful guides on creating or improving
                your business' digital presence and to stay up-to-date with the
                latest SoPlugged news."
      >
        <ul className="mt-10 inline-flex w-full flex-wrap gap-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:gap-12 xl:gap-y-16">
          {posts?.map((post) => {
            return (
              <li
                key={post.slug}
                className="w-full border-b-2 pb-4 last:border-none md:border-none md:pb-0"
              >
                <BlogCard post={post} />
              </li>
            );
          })}
        </ul>
      </PageWrapper>
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
    `
  );
  return data?.posts;
}
