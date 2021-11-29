import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { BusinessPage } from "@/scenes/BusinessPage";

import { fetchBusinessBySlug } from "@/utils/fetchBusinessBySlug";
import { getAllSlugs } from "@/utils/getAllSlugs";

interface Props {
  business: any;
}

const Business: NextPage<Props> = ({ business }) => {
  const router = useRouter();

  // TODO: Update loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <BusinessPage business={business} />
    </>
  );
};

export default Business;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    if (params?.slug && typeof params.slug === "string") {
      const business = await fetchBusinessBySlug(params.slug);
      return {
        props: { business },
        revalidate: 30,
      };
    } else throw new Error("weird slug");
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllSlugs();
  return {
    paths,
    fallback: true,
  };
};
