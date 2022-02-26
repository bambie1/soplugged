import { GetStaticProps, NextPage } from "next";
import React from "react";

import {
  storefront,
  allHandlesQuery,
  singleProductQuery,
} from "@/utils/shopify";
import { SEO } from "@/components/SEO";
import { ProductPage } from "@/scenes/ProductPage";

interface Props {
  product: any;
}

const Product: NextPage<Props> = ({ product }) => {
  return (
    <>
      <SEO
        description="Custom tees, sweatshirts and accessories to look fashionable while buying black"
        title="SoPlugged Merch"
      />
      <ProductPage product={product} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await storefront(singleProductQuery, {
    handle: params?.handle,
  });

  return {
    props: {
      product: data.productByHandle,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await storefront(allHandlesQuery);

  return {
    paths: data.collection.products.edges.map((product: any) => ({
      params: { handle: product.node.handle },
    })),
    fallback: false,
  };
};

export default Product;
