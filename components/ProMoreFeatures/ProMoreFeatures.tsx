import { FC } from "react";
import Image from "next/image";

import { ButtonLink } from "@/styled/ButtonLink";
import { rgbDataURL } from "@/lib/dataUrl";

import styles from "./ProMoreFeatures.module.scss";

const ProMoreFeatures: FC = () => {
  return (
    <>
      <h2 className="center">WAIT! THERE'S MORE...</h2>
      <section className={`${styles.section} ${styles.reverse} container`}>
        <div>
          <h3>Do you prefer to Do-It-Yourself?</h3>
          <p>
            You've come to the right place. Explore our free guides and
            resources that we've compiled to help you grow your business with
            ease.
          </p>
          <ButtonLink big variant="filled" href="/pro/guides">
            Start reading
          </ButtonLink>
        </div>
        <aside className={styles.image}>
          <Image
            placeholder="blur"
            blurDataURL={rgbDataURL(247, 244, 244)}
            src="/images/man_reading.png"
            layout="fill"
            objectFit="contain"
            alt="Free guides"
          />
        </aside>
      </section>
    </>
  );
};

export default ProMoreFeatures;
