import type { GetServerSideProps, NextPage } from "next";
import nookies from "nookies";
import useSWR from "swr";

import { FavoritesPage } from "@/scenes/dashboard/FavoritesPage";
import { swrFetchWithToken } from "@/utils/swrFetchWithToken";

import { verifyIdToken } from "../../firebase/firebaseAdmin";
import { DashboardLayout } from "layouts/Dashboard";

const Favorites: NextPage = () => {
  const { data: favorites, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/favorites`,
    swrFetchWithToken
  );

  const renderPage = () => {
    if (!favorites) return <p>Loading...</p>;
    return <FavoritesPage favorites={favorites} />;
  };

  return (
    <>
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
    return {
      redirect: {
        destination: "/join",
        permanent: false,
      },
    };
  }
};

export default Favorites;
