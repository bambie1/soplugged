import dynamic from "next/dynamic";
import type { GetStaticProps, NextPage } from "next";

import Hero from "@/components/home/Hero";
import { SEO } from "@/components/SEO";
import { fetchAPI } from "@/utils/graphcms";

const Header = dynamic(() => import("../components/Header/Header"));
const Footer = dynamic(() => import("../components/Footer/Footer"));
const HomePage = dynamic(() => import("../scenes/HomePage"));

const Home: NextPage = (props) => {
  return (
    <>
      <SEO
        description="Online platform connecting you to black-owned businesses across Canada. Find everything from restaurants, hairstylists and salons to tutoring, tech and healthcare services on our directory."
        title="SoPlugged | Discover black-owned businesses in Canada"
      />

      <Header />

      <Hero />
      <HomePage {...props} />
      <div className="mt-10 lg:mt-20"></div>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getAllPostsForHome()) || [];

  return {
    props: { posts },
  };
};

// GraphCMS queries
const gql = String.raw;
export async function getAllPostsForHome() {
  const data = await fetchAPI(
    gql`
      {
        posts(orderBy: createdAt_DESC, first: 4, stage: PUBLISHED) {
          title
          slug
          createdAt
          excerpt
          blogImage {
            url
          }
          author {
            name
          }
          categories(first: 10) {
            title
          }
        }
      }
    `
  );
  return data.posts;
}

export default Home;
