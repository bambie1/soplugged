import { FC, useState } from "react";
import dynamic from "next/dynamic";

import { PageWrapper } from "@/components/PageWrapper";
import { MerchHeader } from "@/components/MerchHeader";
import { AddToCart } from "@/components/AddToCart";

import styles from "./ProductPage.module.scss";
import { ProductImage } from "@/components/ProductImage";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

interface Props {
  product: any;
}

const ProductPage: FC<Props> = ({ product }) => {
  const [variantPrice, setVariantPrice] = useState(
    product.variants.edges[0].node.price
  );

  const { images, title, descriptionHtml, options, variants } = product;

  return (
    <>
      <Header />
      <PageWrapper>
        <MerchHeader />
        <div className={styles.grid}>
          <div className="column hideOverflow">
            <ProductImage images={images.edges} />
          </div>
          <div>
            <h1>{title}</h1>
            <div className={styles.info}>
              <AddToCart variants={variants} options={options} />
              <section>
                <b>Description</b>
                <div
                  className={styles.description}
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                />
              </section>
            </div>
          </div>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default ProductPage;
