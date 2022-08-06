import type { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from "swr";

import { BusinessPage } from "@/scenes/BusinessPage";
import { SEO } from "@/components/SEO";
import { swrFetcher } from "@/utils/swrFetcher";
import { PageNotFound } from "@/scenes/404Page";
import BusinessPageSkeleton from "@/scenes/BusinessPage/BusinessPageSkeleton";

const Business: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data: business, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business?slug=${slug}`,
    swrFetcher
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
