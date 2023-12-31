import type { GetStaticProps, NextPage } from "next";

import Hero from "@/src/components/home/Hero";
import SEO from "@/src/components/SEO";
import { fetchAPI } from "@/utils/graphcms";
import { BlogPost } from "@/types/BlogPost";
import { IBusiness } from "@/types/Business";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import HomePage from "@/scenes/HomePage";
import Airtable from "airtable";

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
      <div className="mt-20 lg:mt-40"></div>

      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const base = new Airtable({
    apiKey: process.env.AIRTABLE_SOPLUGGED_API_KEY,
  }).base("appMt18vrIMQC8k6h");

  const posts = (await getAllPostsForHome()) || [];

  let hasValidSlugs = true;

  const featuredBusinesses = await Promise.all(
    FEATURED_BUSINESSES.map(async (slug) => {
      let business = null;

      const formula = `slug = "${slug}"`;

      const records = await base("Businesses")
        .select({
          maxRecords: 1,
          filterByFormula: formula,
        })
        .all();

      records.forEach((record) => {
        business = record.fields;
      });

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
