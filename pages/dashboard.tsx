import type { NextPage } from "next";
import useSWR from "swr";
import { useSession } from "next-auth/react";

import { BusinessInfoPage } from "@/src/scenes/BusinessInfoPage";
import BusinessInfoSkeleton from "@/src/scenes/BusinessInfoPage/BusinessInfoSkeleton";
import SEO from "@/src/components/SEO";
import DashboardPage from "@/src/scenes/DashboardPage";
import UnauthDashboardView from "@/src/scenes/BusinessInfoPage/UnauthDashboardView";

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
