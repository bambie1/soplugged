import type { NextPage } from "next";
import useSWR from "swr";
import { useSession } from "next-auth/react";

import { BusinessInfoPage } from "@/scenes/BusinessInfoPage";
import BusinessInfoSkeleton from "@/scenes/BusinessInfoPage/BusinessInfoSkeleton";
import { SEO } from "@/components/SEO";
import DashboardPage from "@/scenes/DashboardPage";
import UnauthDashboardView from "@/scenes/BusinessInfoPage/UnauthDashboardView";

const DashboardHome: NextPage = () => {
  const { data: session, status } = useSession();
  const { data: business, error } = useSWR("/api/user/getBusiness");

  const isLoading = status === "loading";

  const renderPage = () => {
    if (business === undefined || isLoading) return <BusinessInfoSkeleton />;
    if (!session?.user) return <UnauthDashboardView />;
    if (error) return <BusinessInfoPage business={null} />;
    return <BusinessInfoPage business={business} />;
  };

  return (
    <>
      <SEO
        title="Business Info | SoPlugged dashboard"
        description="Manage your business, favorites and profile."
      />
      <DashboardPage>{renderPage()}</DashboardPage>
    </>
  );
};

export default DashboardHome;
