import { FC } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import { PageWrapper } from "@/components/PageWrapper";

import styles from "./ProductPage.module.scss";
import { Button } from "@/styled/Button";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

interface Props {
  product: any;
}

const ProductPage: FC<Props> = ({ product }) => {
  const { featuredImage, title, descriptionHtml } = product;

  return (
    <>
      <Header />
      <PageWrapper>
        <div className={styles.mainImage}>
          <Image
            src={featuredImage.url}
            alt="Featured"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <Button variant="outlined">Add to cart</Button>
        <div>
          <h3>{title}</h3>
          <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default ProductPage;
