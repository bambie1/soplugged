import type { GetStaticProps, NextPage } from "next";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import HomePage from "@/scenes/HomePage";
import Hero from "@/src/components/home/Hero";
import SEO from "@/src/components/SEO";
import { BlogPost } from "@/types/BlogPost";
import { IBusiness } from "@/types/Business";
import { fetchAPI } from "@/utils/graphcms";
import supabase from "@/utils/supabase";

const FEATURED_BUSINESSES = [
  "en-vogue-afrika",
  "f10-studio",
  "tianah-beaute",
  "mills-kitchen",
];

const Home: NextPage<{ posts: BlogPost[]; featuredBusinesses: IBusiness[] }> = (
  props
) => {
  return (
    <>
      <SEO
        description="At SoPlugged, we're committed to empowering Black entrepreneurs across Canada through useful business resources, networking opportunities and lots more!"
        title="SoPlugged | A Thriving Community of Black Entrepreneurs"
      />

      <Header />

      <Hero />
      <HomePage {...props} />
      <div className="mt-20 lg:mt-0"></div>

      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getAllPostsForHome()) || [];

  let hasValidSlugs = true;

  const featuredBusinesses = await Promise.all(
    FEATURED_BUSINESSES.map(async (slug) => {
      const { data: business } = await supabase
        .from("businesses")
        .select(`*`)
        .eq("slug", slug)
        .single();

      return business;
    })
  );

  return {
    props: {
      posts,
      featuredBusinesses: hasValidSlugs ? featuredBusinesses : [],
    },
  };
};

// GraphCMS queries
const gql = String.raw;
export async function getAllPostsForHome() {
  const data = await fetchAPI(
    gql`
      {
        posts(orderBy: createdAt_DESC, first: 3, stage: PUBLISHED) {
          title
          slug
          createdAt
          excerpt
          blogImage {
            url
          }
          blogImageAlt
          author {
            name
            picture {
              url
            }
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

export default Home;
