import type { GetServerSideProps, NextPage } from "next";
import useSWR from "swr";
import { getSession } from "next-auth/react";

import { ProfilePage } from "@/scenes/dashboard/ProfilePage";
import ProfileSkeleton from "@/scenes/dashboard/ProfilePage/ProfileSkeleton";
import { SEO } from "@/components/SEO";

import { DashboardLayout } from "layouts/Dashboard";

const Profile: NextPage = () => {
  const { data: dbUser, error } = useSWR("/api/user/getProfile");

  const renderPage = () => {
    if (error) return <ProfilePage dbUser={null} />;
    if (dbUser === undefined) return <ProfileSkeleton />;
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session?.user?.email)
    return {
      redirect: {
        destination: "/join",
        permanent: false,
      },
    };

  return {
    props: {},
  };
};

export default Profile;
