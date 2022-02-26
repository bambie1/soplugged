import type { NextPage } from "next";
import { useFlags } from "@happykit/flags/client";

import { MerchPage, OldMerchPage } from "@/scenes/MerchPage";
import { SEO } from "@/components/SEO";
import { storefront, collectionQuery } from "@/utils/shopify";

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
  const { data } = await storefront(collectionQuery);

  return {
    props: {
      products: data.collection.products,
    },
  };
};

export default Merch;
