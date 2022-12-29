import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
import useSWR from "swr";
import { useSession } from "next-auth/react";

import SEO from "@/src/components/SEO";

const MyBusinessPage = dynamic(
  () => import("../src/scenes/MyBusinessPage/MyBusinessPage")
);
const SignInModal = dynamic(() => import("../src/components/SignInModal"));
const MyBusinessSkeleton = dynamic(
  () => import("../src/scenes/MyBusinessPage/MyBusinessSkeleton")
);

const MyBusiness: NextPage = () => {
  const { data: session, status } = useSession();
  const { data: business, error } = useSWR("/api/user/getBusiness");

  const isLoading = status === "loading";

  const renderPage = () => {
    if (business === undefined || isLoading) return <MyBusinessSkeleton />;
    if (!session?.user)
      return (
        <>
          <MyBusinessSkeleton />
          <SignInModal />
        </>
      );

    if (error) return <MyBusinessPage business={null} />;
    return <MyBusinessPage business={business} />;
  };

  return (
    <>
      <SEO
        description="Register your business as an Black entrepreneur, and get featured on our platform, for FREE!"
        title="My Business | SoPlugged"
      />

      {renderPage()}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`}
      />
    </>
  );
};

export default MyBusiness;
