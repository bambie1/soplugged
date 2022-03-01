import { FC } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

import { PageWrapper } from "@/components/PageWrapper";

import styles from "./MerchPage.module.scss";
import { MerchHeader } from "@/components/MerchHeader";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

interface Props {
  products: any;
}

const MerchPage: FC<Props> = ({ products }) => {
  return (
    <>
      <Header />
      <PageWrapper center>
        <MerchHeader />
        <h1>merch</h1>
        <p className="noMargin">
          Normalize <b>#buyingblack</b>, but make it fashionable
        </p>

        <div className={styles.productsWrapper}>
          {products?.map((item: any) => {
            const product = item.node;
            const image = product.images.edges[0].node;

            return (
              <Link key={product.handle} href={`/merch/${product.handle}`}>
                <a className={styles.product}>
                  <div className={styles.productImage}>
                    <div>
                      <Image
                        src={image.originalSrc}
                        alt="Placeholder"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>

                  <div className={styles.productInfo}>
                    <p className={styles.title} title={product.title}>
                      {product.title}
                    </p>
                    <p>${product.priceRange.minVariantPrice.amount}</p>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
};

export { MerchPage };
