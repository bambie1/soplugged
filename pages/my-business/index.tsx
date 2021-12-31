import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import nookies from "nookies";
import useSWR from "swr";

import { swrFetchWithToken } from "@/utils/swrFetchWithToken";
import { SEO } from "@/components/SEO";
import MyBusinessSkeleton from "@/scenes/MyBusinessPage/MyBusinessSkeleton";
import { useBusinessFormContext } from "@/context/businessFormContext";
import { verifyIdToken } from "@/src/firebase/firebaseAdmin";

const MyBusinessPage = dynamic(
  () => import("../../scenes/MyBusinessPage/MyBusinessPage")
);

const emptyBusiness = {
  phone_number: "",
  business_name: "",
  business_url: "",
  ig_handle: "",
  street_address: "",
  business_location: "",
  business_description: "",
  logo_url: "",
  sample_images: "",
  category: "",
};

const MyBusiness: NextPage = () => {
  const { query, push } = useRouter();
  const { agreementSigned, isNew, setIsNew } = useBusinessFormContext();

  const { data: businesses, error } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business`,
    swrFetchWithToken
  );

  if (error && !agreementSigned) {
    setIsNew(true);
    push("/my-business/welcome");
  }

  if (isNew) return <MyBusinessPage business={null} step={query.step} />;

  const renderPage = () => {
    if (!businesses) return <MyBusinessSkeleton />;

    if (error)
      return <MyBusinessPage business={emptyBusiness} step={query.step} />;

    return <MyBusinessPage business={businesses[0]} step={query.step} />;
  };

  return (
    <>
      <SEO
        description="Register your business as an Black entrepreneur, and get featured on our platform, for FREE!"
        title="My Business | SoPlugged"
      />
      {renderPage()}
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

export default MyBusiness;
