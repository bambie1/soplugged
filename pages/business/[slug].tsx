import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import SEO from "@/src/components/SEO";
import { IBusiness } from "@/types/Business";
import { BusinessPage } from "@/scenes/BusinessPage";

var Airtable = require("airtable");

const Business: NextPage<{ business: IBusiness }> = ({ business }) => {
  return (
    <>
      {!!business?.business_name ? (
        <SEO
          description={`Discover and support local Black-owned businesses in ${business.business_location} with SoPlugged's online directory. Explore ${business?.business_name}'s page for ${business?.category}, and learn more about their products and services. Visit SoPlugged today and find your next favorite business.`}
          title={`${business?.business_name.toUpperCase()} | SoPlugged`}
        />
      ) : (
        <SEO
          description="Online platform connecting you to Black-owned businesses across Canada. Find everything from restaurants, hairstylists and salons to tutoring, tech and healthcare services on our directory."
          title="SoPlugged | Discover Black-owned businesses in Canada"
        />
      )}

      <BusinessPage business={business} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const base = new Airtable({
    apiKey: process.env.AIRTABLE_SOPLUGGED_API_KEY,
  }).base("appMt18vrIMQC8k6h");

  const paths = [];

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
  let business = null;

  const base = new Airtable({
    apiKey: process.env.AIRTABLE_SOPLUGGED_API_KEY,
  }).base("appMt18vrIMQC8k6h");

  const formula = `slug = "${params?.slug}"`;

  const records = await base("Businesses")
    .select({
      maxRecords: 1,
      filterByFormula: formula,
    })
    .all();

  records.forEach((record) => {
    business = record.fields;
  });

  if (!business) {
    return {
      notFound: true,
    };
  }

  return {
    props: { business, slug: params?.slug },
  };
};

export default Business;
