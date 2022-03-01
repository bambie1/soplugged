import { GetStaticProps, NextPage } from "next";
import React from "react";

import { SEO } from "@/components/SEO";
import { ProductPage } from "@/scenes/ProductPage";
import { getProduct, getProductSlugs } from "@/lib/shopify";

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
  const product = await getProduct(params?.handle);

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = async () => {
  const productSlugs = await getProductSlugs();

  const paths = productSlugs.map((slug: any) => {
    const handle = String(slug.node.handle);
    return {
      params: { handle },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default Product;
