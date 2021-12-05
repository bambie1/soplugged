import type { GetServerSideProps, NextPage } from "next";
import nookies from "nookies";
import useSWR from "swr";

import { ProfilePage } from "@/scenes/dashboard/ProfilePage";
import ProfileSkeleton from "@/scenes/dashboard/ProfilePage/ProfileSkeleton";
import { swrFetchWithToken } from "@/utils/swrFetchWithToken";

import { verifyIdToken } from "../../firebase/firebaseAdmin";
import { DashboardLayout } from "layouts/Dashboard";

const Profile: NextPage = () => {
  const { data: dbUser, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user`,
    swrFetchWithToken
  );

  const renderPage = () => {
    if (!dbUser) return <ProfileSkeleton />;
    return <ProfilePage dbUser={dbUser} />;
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

    return {
      props: {},
    };
  } catch (error) {
    console.log({ error });
    return {
      redirect: {
        destination: "/join",
        permanent: false,
      },
    };
  }
};

export default Profile;
