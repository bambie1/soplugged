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
  const { featuredImage, title, descriptionHtml, media } = product;

  return (
    <>
      <Header />
      <PageWrapper>
        <div className={styles.grid}>
          <div className="column">
            <div className={styles.mainImage}>
              <Image
                src={featuredImage.url}
                alt="Featured"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <ul className={styles.thumbnailList}>
              {media.edges.map((item: any) => {
                const { url } = item.node.previewImage;
                return (
                  <li key={url} className={styles.thumbnail}>
                    <Image
                      width={100}
                      height={100}
                      src={url}
                      alt="Media image"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h1>{title}</h1>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            />
            <Button variant="outlined">Add to cart</Button>
          </div>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default ProductPage;
