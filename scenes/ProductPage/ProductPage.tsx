import { FC, Fragment } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import { PageWrapper } from "@/components/PageWrapper";
import { MerchHeader } from "@/components/MerchHeader";

import styles from "./ProductPage.module.scss";
import { AddToCart } from "@/components/AddToCart";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

interface Props {
  product: any;
}

const ProductPage: FC<Props> = ({ product }) => {
  const { featuredImage, title, descriptionHtml, media, options, variants } =
    product;

  const variantId = variants.edges[0].node.id;

  return (
    <>
      <Header />
      <PageWrapper>
        <MerchHeader />
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
            <div className={styles.info}>
              <section>
                {options.map((option: any) => {
                  const { name, values } = option;
                  return (
                    <Fragment key={name}>
                      <label htmlFor="cars">{name}</label>
                      <select name="cars" id="cars">
                        {values.map((val: any) => (
                          <option value={val} key={val}>
                            {val}
                          </option>
                        ))}
                      </select>
                    </Fragment>
                  );
                })}
              </section>
              <AddToCart variantId={variantId} />
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
