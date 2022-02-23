import type { NextPage } from "next";

import { MerchPage } from "@/scenes/MerchPage";
import { SEO } from "@/components/SEO";
import { storefront } from "@/utils/shopify";

interface Props {
  products: any;
}

const Merch: NextPage<Props> = ({ products }) => {
  return (
    <>
      <SEO
        description="Custom tees, sweatshirts and accessories to look fashionable while buying black"
        title="SoPlugged Merch"
      />
      <MerchPage products={products} />
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

const gql = String.raw;

const collectionQuery = gql`
  query Collection {
    collection(handle: "merch-full-collection") {
      products(first: 10) {
        edges {
          node {
            title
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 1) {
              edges {
                node {
                  altText
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Merch;
