import type { NextPage } from "next";
import useSWR from "swr";

import { ProfilePage } from "@/scenes/dashboard/ProfilePage";
import ProfileSkeleton from "@/scenes/dashboard/ProfilePage/ProfileSkeleton";
import { SEO } from "@/components/SEO";

import { DashboardLayout } from "layouts/Dashboard";

const Profile: NextPage = () => {
  const { data: dbUser, error } = useSWR("/api/user/getProfile");

  const renderPage = () => {
    if (error) return <ProfilePage dbUser={null} />;
    if (!dbUser) return <ProfileSkeleton />;
    return <ProfilePage dbUser={dbUser} />;
  };

  return (
    <>
      <SEO
        title="Profile | SoPlugged dashboard"
        description="Manage your business, favorites and profile."
      />
      <DashboardLayout>{renderPage()}</DashboardLayout>
    </>
  );
};

export default Profile;
