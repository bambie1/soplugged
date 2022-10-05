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
      <SEO
        description={`SoPlugged page for ${
          business?.business_name || "a business"
        }. A ${business?.category?.toLowerCase() || ""} business based in ${
          business?.business_location
        }.`}
        title={`${
          business?.business_name.toUpperCase() || "SoPlugged"
        } | SoPlugged`}
      />
      {renderContent()}
    </>
  );
};

export const getStaticPaths = async () => {
  const businesses = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/businesses`
  ).then((res) => res.json());

  return {
    paths: businesses.map(({ slug }: any) => ({
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
    props: { business, slug: params?.slug },
  };
};

export default Business;
