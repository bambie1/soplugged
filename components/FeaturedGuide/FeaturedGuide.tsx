import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./FeaturedGuide.module.scss";
import { Button } from "@/styled/Button";

interface Props {
  feature: any;
}

const FeaturedGuide: FC<Props> = ({ feature }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles.featuredImage}>
          <Image
            src="/images/business-woman.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <Link href={`/pro/guides/${feature.slug}`}>
            <a className={styles.content}>
              <p className={styles.tag}>FEATURED</p>
              <h3>{feature.title}</h3>
              <p>{feature.excerpt}</p>

              <Button variant="text">Continue reading</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGuide;
