import type { GetStaticPathsResult, GetStaticProps } from "next";
import Airtable from "airtable";

import SEO from "@/src/components/SEO";
import Grid from "@/components/directory/Grid";
import { IBusiness } from "@/types/Business";
import { encodedLocations } from "@/lib/encodedLocations";
import PageWrapper from "@/src/layouts/PageWrapper";

export default function CityPageDirectory({
  city,
  businesses,
}: {
  city: string;
  businesses: any[];
}) {
  const seoTitle = `Black-Owned businesses in ${city} | SoPlugged`;

  const seoDescription = `Discover the best Black-owned businesses in ${city} with SoPlugged's online directory.`;

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <PageWrapper
        title={`Explore Black-Owned businesses in ${city}`}
        subTitle="Looking for hair stylists, event planners, or photographers? We've got you covered."
        backAction={{
          text: "Back to all cities",
          link: "/directory?filter=location",
        }}
      >
        <Grid businesses={businesses} />
      </PageWrapper>
    </>
  );
}

type Params = {
  city: string;
};

export function getStaticPaths(): GetStaticPathsResult<Params> {
  return {
    paths: [
      ...Object.keys(encodedLocations)
        .slice(0, 19)
        .map((city) => ({ params: { city } })),
    ],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (typeof params?.city !== "string")
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
  const city = encodedLocations[params?.city];

  const formula = `business_location = "${city}"`;

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
      city,
      businesses,
    },
    revalidate: 100 * 60 * 60,
  };
};
