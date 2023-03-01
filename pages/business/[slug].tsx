import type { GetStaticProps, NextPage } from "next";
import useSWR from "swr";
import dynamic from "next/dynamic";

import SEO from "@/src/components/SEO";
import { IBusiness } from "@/types/Business";

const BusinessPageSkeleton = dynamic(
  () => import("../../src/scenes/BusinessPage/BusinessPageSkeleton")
);
const BusinessPage = dynamic(
  () => import("../../src/scenes/BusinessPage/BusinessPage")
);
const PageNotFound = dynamic(() => import("../../src/scenes/404Page"));

const Business: NextPage<{ slug: string; fallbackData: IBusiness }> = ({
  slug,
  fallbackData,
}) => {
  const { data: business, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business?slug=${slug}`,
    {
      fallbackData,
      revalidateOnMount: false,
    }
  );

  if (error) return <PageNotFound />;

  const renderContent = () => {
    if (!business) return <BusinessPageSkeleton />;

    return <BusinessPage business={business} />;
  };

  return (
    <>
      {!!business?.business_name ? (
        <SEO
          description={`Discover and support local Black-owned businesses in ${business.business_location} with SoPlugged's online directory. Explore ${business?.business_name}'s page for ${business?.category}, and learn more about their products and services. Join us in promoting economic diversity and empowering Black-owned businesses. Visit SoPlugged today and find your next favorite business.`}
          title={`${business?.business_name.toUpperCase()} | SoPlugged`}
        />
      ) : (
        <SEO
          description="Online platform connecting you to Black-owned businesses across Canada. Find everything from restaurants, hairstylists and salons to tutoring, tech and healthcare services on our directory."
          title="SoPlugged | Discover Black-owned businesses in Canada"
        />
      )}

      {renderContent()}
    </>
  );
};

export const getStaticPaths = async () => {
  const businesses = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/businesses`
  ).then((res) => res.json());

  const filteredBusinesses = businesses.filter(
    ({ verified, slug }: IBusiness) => verified && !!slug
  );

  return {
    paths: filteredBusinesses.map(({ slug }: IBusiness) => ({
      params: { slug },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let business = null;
  try {
    business = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business?slug=${params?.slug}`
    ).then((res) => res.json());
  } catch (error) {
    console.error(error);
    business = null;
  }

  return {
    props: { fallbackData: business, slug: params?.slug },
  };
};

export default Business;
