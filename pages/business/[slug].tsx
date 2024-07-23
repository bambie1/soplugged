import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { BusinessPage } from "@/scenes/BusinessPage";
import SEO from "@/src/components/SEO";
import { IBusiness } from "@/types/Business";
import supabase from "@/utils/supabase";

var Airtable = require("airtable");

const Business: NextPage<{ business: IBusiness }> = ({ business }) => {
  if (!business?.business_name) return null;

  return (
    <>
      <SEO
        description={`Discover and support local Black-owned businesses in ${business.business_location} with SoPlugged's online directory. Explore ${business?.business_name}'s page for ${business?.category}, and learn more about their products and services. Visit SoPlugged today and find your next favorite business.`}
        title={`${business?.business_name.toUpperCase()} | SoPlugged`}
      />

      <BusinessPage business={business} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const base = new Airtable({
    apiKey: process.env.AIRTABLE_SOPLUGGED_API_KEY,
  }).base("appMt18vrIMQC8k6h");

  const paths: {
    params: { slug: string };
  }[] = [];

  const records = await base("Businesses")
    .select({
      maxRecords: 100,
      fields: ["slug"],
      sort: [
        { field: "sample_images", direction: "desc" },
        { field: "verified", direction: "desc" },
        {
          field: "logo_url",
          direction: "desc",
        },
      ],
    })
    .all();

  // @ts-ignore
  records.forEach((record) => {
    if (!record.fields.slug) return;

    paths.push({ params: { slug: record.fields.slug } });
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: business } = await supabase
    .from("businesses")
    .select(`*`)
    .eq("slug", params?.slug)
    .single();

  if (!business) {
    return {
      notFound: true,
    };
  }

  return {
    props: { business, slug: params?.slug },
    revalidate: 5 * 60,
  };
};

export default Business;
