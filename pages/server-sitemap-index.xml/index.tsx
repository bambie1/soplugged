import { getServerSideSitemapIndex } from "next-sitemap";
import { GetServerSideProps } from "next";

import { encodedCategories } from "@/utils/algolia";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return getServerSideSitemapIndex(ctx, [
    ...Object.keys(encodedCategories)
      .slice(0, 19)
      .map((category) => `https://www.soplugged.com/search/${category}`),
    "https://www.soplugged.com/search/all",
  ]);
};

// Default export to prevent next.js errors
export default function SitemapIndex() {}
