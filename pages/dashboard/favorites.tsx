import type { GetServerSideProps, NextPage } from "next";
import nookies from "nookies";
import useSWR from "swr";

import { FavoritesPage } from "@/scenes/dashboard/FavoritesPage";
import FavoritesSkeleton from "@/scenes/dashboard/FavoritesPage/FavoritesSkeleton";
import { swrFetchWithToken } from "@/utils/swrFetchWithToken";
import { SEO } from "@/components/SEO";

import { verifyIdToken } from "@/src/firebase/firebaseAdmin";
import { DashboardLayout } from "layouts/Dashboard";

const Favorites: NextPage = () => {
  const { data: favorites, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/favorites`,
    swrFetchWithToken
  );

  const renderPage = () => {
    if (error) return <FavoritesPage favorites={[]} />;
    if (!favorites) return <FavoritesSkeleton />;
    return <FavoritesPage favorites={favorites} />;
  };

  return (
    <>
      <SEO
        title="Favorites | My SoPlugged dashboard"
        description="Manage your business, favorites and profile."
      />
      <DashboardLayout>{renderPage()}</DashboardLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);

    if (!token.email) throw new Error("no email in token");

    return { props: {} };
  } catch (error) {
    context.res.writeHead(302, { Location: "/join" });
    context.res.end();

    return { props: {} as never };
  }
};

export default Favorites;
