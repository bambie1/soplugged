import type { GetServerSideProps, NextPage } from "next";
import useSWR from "swr";
import { getSession } from "next-auth/react";

import { FavoritesPage } from "@/scenes/dashboard/FavoritesPage";
import FavoritesSkeleton from "@/scenes/dashboard/FavoritesPage/FavoritesSkeleton";
import { SEO } from "@/components/SEO";

import { DashboardLayout } from "layouts/Dashboard";

const Favorites: NextPage = () => {
  const { data: favorites, error } = useSWR("/api/user/getFavorites");

  const renderPage = () => {
    if (error) return <FavoritesPage favorites={[]} />;
    if (!favorites) return <FavoritesSkeleton />;
    return <FavoritesPage favorites={favorites} />;
  };

  return (
    <>
      <SEO
        title="Favorites | SoPlugged dashboard"
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

export default Favorites;
