import type { NextPage } from "next";
import useSWR from "swr";

import { BusinessInfoPage } from "@/scenes/dashboard/BusinessInfoPage";
import BusinessInfoSkeleton from "@/scenes/dashboard/BusinessInfoPage/BusinessInfoSkeleton";
import { SEO } from "@/components/SEO";

import { DashboardLayout } from "layouts/Dashboard";

const DashboardHome: NextPage = () => {
  const { data: business, error } = useSWR("/api/user/getBusiness");

  const renderPage = () => {
    if (error) return <BusinessInfoPage business={null} />;
    if (!business) return <BusinessInfoSkeleton />;
    return <BusinessInfoPage business={business} />;
  };

  return (
    <>
      <SEO
        title="Business Info | SoPlugged dashboard"
        description="Manage your business, favorites and profile."
      />
      <DashboardLayout>{renderPage()}</DashboardLayout>
    </>
  );
};

export default DashboardHome;
