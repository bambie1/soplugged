import type { GetStaticPathsResult, GetStaticProps } from "next";

import Grid from "@/components/directory/Grid";
import { encodedLocations } from "@/lib/encodedLocations";
import SEO from "@/src/components/SEO";
import PageWrapper from "@/src/layouts/PageWrapper";
import supabase from "@/utils/supabase";

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

  const city = encodedLocations[params?.city];

  const { data: businesses } = await supabase
    .from("businesses")
    .select(`*`)
    .eq("business_location", city)
    .eq("is_listed", true)
    .order("sample_images");

  return {
    props: {
      city,
      businesses,
    },
    revalidate: 5 * 60,
  };
};
