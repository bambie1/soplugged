import { useEffect, useState } from "react";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { getSession } from "next-auth/react";

import { SEO } from "@/components/SEO";
import { useBusinessFormContext } from "@/context/businessFormContext";
import MyBusinessSkeleton from "@/scenes/MyBusinessPage/MyBusinessSkeleton";

const MyBusinessPage = dynamic(
  () => import("../../scenes/MyBusinessPage/MyBusinessPage")
);

const MyBusiness: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ business }) => {
  const router = useRouter();
  const [checkedAgreement, setCheckedAgreement] = useState(false);
  const { agreementSigned } = useBusinessFormContext();

  useEffect(() => {
    if (!agreementSigned && !business) {
      router.push("/my-business/welcome");
    } else {
      setCheckedAgreement(true);
    }
  }, [agreementSigned]);

  return (
    <>
      <SEO
        description="Register your business as an Black entrepreneur, and get featured on our platform, for FREE!"
        title="My Business | SoPlugged"
      />
      {!checkedAgreement ? (
        <MyBusinessSkeleton />
      ) : (
        <MyBusinessPage business={business} />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session?.user) {
    return {
      redirect: {
        destination: "/join",
        permanent: false,
      },
    };
  }

  try {
    const fetchPromise = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "User-Email": session.user.email!,
          "Super-Secret-Key": process.env.NEXT_SERVER_SECRET!,
        },
      }
    );
    const businesses = await fetchPromise.json();

    return {
      props: {
        business: businesses[0],
      },
    };
  } catch (error) {
    return {
      props: {
        business: null,
      },
    };
  }
};

export default MyBusiness;
