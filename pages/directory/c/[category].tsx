import Airtable from "airtable";
import type { GetStaticPathsResult, GetStaticProps } from "next";

import Grid from "@/components/directory/Grid";
import { categoryMetaDescriptions } from "@/lib/categoryMetaDescriptions";
import { encodedCategories } from "@/lib/encodedCategories";
import SEO from "@/src/components/SEO";
import PageWrapper from "@/src/layouts/PageWrapper";
import { IBusiness } from "@/types/Business";
import { getCategoryName } from "@/utils/index";

export default function Page({
  category,
  businesses,
}: {
  category: string;
  businesses: any[];
}) {
  const seoTitle = `Black-Owned ${category} businesses | SoPlugged`;

  const seoDescription =
    // @ts-ignore
    categoryMetaDescriptions[category] ||
    `Discover the best Black-owned ${category} businesses in Canada with SoPlugged's online directory.`;

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <PageWrapper
        title={`Black-Owned ${category} businesses in Canada`}
        subTitle={
          // @ts-ignore
          categoryMetaDescriptions[category] ||
          `Check out the businesses listed below for your ${category.toLowerCase()} needs`
        }
        backAction={{
          text: "Explore all categories",
          link: "/directory",
        }}
      >
        <Grid businesses={businesses} />
      </PageWrapper>
    </>
  );
}

type Params = {
  category: string;
};

export function getStaticPaths(): GetStaticPathsResult<Params> {
  return {
    paths: [
      ...Object.keys(encodedCategories)
        .slice(0, 19)
        .map((category) => ({ params: { category } })),
    ],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (typeof params?.category !== "string")
    return {
      redirect: {
        destination: "/directory",
        permanent: false,
      },
    };

  let base = new Airtable({
    apiKey: process.env.AIRTABLE_SOPLUGGED_API_KEY,
  }).base("appMt18vrIMQC8k6h");

  const businesses: IBusiness[] = [];
  const category = getCategoryName(params?.category || "");

  const formula = `category = "${category}"`;

  const records = await base("Businesses")
    .select({
      maxRecords: 50,
      fields: [
        "id",
        "business_name",
        "business_location",
        "logo_url",
        "sample_images",
        "category",
        "slug",
        "verified",
      ],
      sort: [
        { field: "sample_images", direction: "desc" },
        { field: "verified", direction: "desc" },
        {
          field: "logo_url",
          direction: "desc",
        },
      ],
      filterByFormula: formula,
    })
    .all();

  records.forEach((record) => {
    // @ts-ignore
    businesses.push(record.fields);
  });

  return {
    props: {
      category,
      businesses,
    },
    revalidate: 5 * 60,
  };
};
