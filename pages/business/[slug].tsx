import type { GetStaticProps, NextPage } from "next";
import useSWR from "swr";
import dynamic from "next/dynamic";

import { SEO } from "@/components/SEO";
import { swrFetcher } from "@/utils/swrFetcher";

const BusinessPageSkeleton = dynamic(
  () => import("../../scenes/BusinessPage/BusinessPageSkeleton")
);
const BusinessPage = dynamic(
  () => import("../../scenes/BusinessPage/BusinessPage")
);
const PageNotFound = dynamic(() => import("../../scenes/404Page/404Page"));

const Business: NextPage = ({ slug, fallbackData }: any) => {
  const { data: business, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business?slug=${slug}`,
    swrFetcher,
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
          description={`SoPlugged page for ${
            business?.business_name || "a business"
          }. A ${business?.category?.toLowerCase()} business based in ${
            business?.business_location
          }.`}
          title={`${business?.business_name.toUpperCase()} | SoPlugged`}
        />
      ) : (
        <SEO
          description="Online platform connecting you to black-owned businesses across Canada. Find everything from restaurants, hairstylists and salons to tutoring, tech and healthcare services on our directory."
          title="SoPlugged | Discover black-owned businesses in Canada"
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
    ({ verified, slug }: any) => verified && !!slug
  );

  return {
    paths: filteredBusinesses.map(({ slug }: any) => ({
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
