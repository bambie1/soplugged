import type { NextPage } from "next";
import useSWR from "swr";

import { FavoritesPage } from "@/scenes/dashboard/FavoritesPage";
import FavoritesSkeleton from "@/scenes/dashboard/FavoritesPage/FavoritesSkeleton";
import { SEO } from "@/components/SEO";

import { DashboardLayout } from "layouts/Dashboard";

const Favorites: NextPage = () => {
  const { data: favorites, error } = useSWR("/api/user/favorites");

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

export default Favorites;
