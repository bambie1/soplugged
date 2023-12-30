import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import type { GetStaticPathsResult, GetStaticProps } from "next";

import SEO from "@/src/components/SEO";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { encodedCategories } from "@/lib/encodedCategories";
import Airtable from "airtable";
import Grid from "@/components/directory/Grid";
import { IBusiness } from "@/types/Business";
import { getCategoryName } from "@/utils/getCategoryName";
import { encodedLocations } from "@/lib/encodedLocations";

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
      <Header whiteBg />
      <main className="mb-16 min-h-screen pt-12">
        <div className="flex flex-col items-center">
          <div className="my-container mb-8 flex flex-col items-center">
            <Link href="/directory">
              <a className="mb-5 -mt-4 flex gap-2 self-start rounded-3xl text-gray-500">
                <ArrowLeftIcon className="h-6 w-6" strokeWidth={0.8} />
                Back to all categories
              </a>
            </Link>

            <h1 className="relative inline-block max-w-lg break-words text-center text-4xl font-semibold text-primary lg:text-5xl">
              {city || "Explore"}
            </h1>
            <span className="mt-2 text-lg lg:mt-4 lg:text-2xl">
              Businesses in Canada
            </span>
          </div>

          <div className="my-container mt-10 w-full">
            <Grid businesses={businesses} />
          </div>
        </div>
      </main>
      <Footer />
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
    businesses.push(record.fields);
  });

  return {
    props: {
      city,
      businesses,
    },
    revalidate: 5 * 60 * 60,
  };
};
