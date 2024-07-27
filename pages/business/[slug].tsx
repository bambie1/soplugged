import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { BusinessPage } from "@/scenes/BusinessPage";
import SEO from "@/src/components/SEO";
import { IBusiness } from "@/types/Business";
import supabase from "@/utils/supabase";

const Business: NextPage<{ business: IBusiness }> = ({ business }) => {
  if (!business?.business_name) return null;

  return (
    <>
      <SEO
        description={`Discover and support local Black-owned businesses in ${business.business_location} with SoPlugged's online directory. Explore ${business?.business_name}'s page for ${business?.category}, and learn more about their products and services. Visit SoPlugged today and find your next favorite business.`}
        title={`${business?.business_name.toUpperCase()} | SoPlugged`}
      />

      <BusinessPage business={business} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: businesses } = await supabase
    .from("businesses")
    .select(`slug`)
    .eq("is_listed", true)
    .order("sample_images");

  const paths: {
    params: { slug: string };
  }[] = [];

  // @ts-ignore
  businesses.forEach((business) => {
    if (!business.slug) return;

    paths.push({ params: { slug: business.slug } });
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: business } = await supabase
    .from("businesses")
    .select(`*`)
    .eq("slug", params?.slug)
    .single();

  if (!business) {
    return {
      notFound: true,
    };
  }

  return {
    props: { business, slug: params?.slug },
    revalidate: 5 * 60,
  };
};

export default Business;
