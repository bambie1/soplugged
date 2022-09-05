import type { NextPage } from "next";
import { useRouter } from "next/router";
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

const Business: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data: business, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business?slug=${slug}`,
    swrFetcher,
    {
      refreshInterval: 1000000000,
    }
  );

  if (error) return <PageNotFound />;

  const renderContent = () => {
    if (!business) return <BusinessPageSkeleton />;

    // return <BusinessPageSkeleton />;
    return <BusinessPage business={business} />;
  };

  return (
    <>
      <SEO
        description={`SoPlugged page for ${
          business?.business_name || "a business"
        }`}
        title={`${business?.business_name.toUpperCase() || ""} | SoPlugged`}
      />
      {renderContent()}
    </>
  );
};

export default Business;
