import { FC } from "react";
import Image from "next/image";

import { ButtonLink } from "@/styled/ButtonLink";
import { rgbDataURL } from "@/lib/dataUrl";

import styles from "./ProGuides.module.scss";

const ProGuides: FC = () => {
  return (
    <>
      <h2 className="center">WAIT! THERE'S MORE...</h2>
      <section className={`${styles.section} ${styles.reverse} container`}>
        <div>
          <h3>We have FREE guides for scaling your business</h3>
          <p>
            You've come to the right place. Explore our free guides and
            resources that we've compiled to help you grow your business with
            ease. You've come to the right place. Explore our free guides and
            resources that we've compiled to help you grow your business with
            ease.
          </p>
          <ButtonLink big variant="filled" href="/search">
            Start reading
          </ButtonLink>
        </div>
        <aside className={styles.image}>
          <Image
            placeholder="blur"
            blurDataURL={rgbDataURL(247, 244, 244)}
            src="/images/book.jpg"
            width={400}
            height={272}
            alt="Search for businesses"
            priority
          />
        </aside>
      </section>
    </>
  );
};

export default ProGuides;
