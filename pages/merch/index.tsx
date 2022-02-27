import type { NextPage } from "next";
import { useFlags } from "@happykit/flags/client";

import { MerchPage, OldMerchPage } from "@/scenes/MerchPage";
import { SEO } from "@/components/SEO";
import { getAllProductsInCollection } from "@/lib/shopify";

interface Props {
  products: any;
}

const Merch: NextPage<Props> = ({ products }) => {
  const { flags } = useFlags();

  return (
    <>
      <SEO
        description="Custom tees, sweatshirts and accessories to look fashionable while buying black"
        title="SoPlugged Merch"
      />
      {flags?.merch_page ? <MerchPage products={products} /> : <OldMerchPage />}
    </>
  );
};

export const getStaticProps = async () => {
  const products = await getAllProductsInCollection();

  return {
    props: {
      products,
    },
  };
};

export default Merch;
