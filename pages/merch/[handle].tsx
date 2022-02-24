import { GetStaticProps, NextPage } from "next";
import React from "react";

import { storefront } from "@/utils/shopify";
import { SEO } from "@/components/SEO";
import { ProductPage } from "@/scenes/ProductPage";

const gql = String.raw;

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
  const { data } = await storefront(gql`
    {
      collection(handle: "merch-full-collection") {
        products(first: 10) {
          edges {
            node {
              handle
            }
          }
        }
      }
    }
  `);

  return {
    paths: data.collection.products.edges.map((product: any) => ({
      params: { handle: product.node.handle },
    })),
    fallback: false,
  };
};

const singleProductQuery = gql`
  query SingleProduct($handle: String!) {
    productByHandle(handle: $handle) {
      title
      descriptionHtml
      handle
      updatedAt
      priceRange {
        minVariantPrice {
          amount
        }
      }
      featuredImage {
        url
      }
      media(first: 6) {
        edges {
          node {
            previewImage {
              url
            }
          }
        }
      }
      variants(first: 6) {
        edges {
          node {
            title
            image {
              altText
              url
            }
            priceV2 {
              amount
            }
          }
        }
      }
    }
  }
`;

export default Product;
