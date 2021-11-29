import Image from "next/image";

import { ButtonLink } from "@/styled/ButtonLink";
import styles from "./TopCategories.module.scss";
import { categoryIcons } from "@/lib/topCategories";

const TopCategories = () => {
  return (
    <section className={styles.wrapper}>
      <h2>Top Categories</h2>
      <div className={styles.iconsList}>
        {categoryIcons.map((icon) => (
          <div key={icon.imageSrc} className={styles.categoryWrapper}>
            <Image
              src={icon.imageSrc}
              width={40}
              height={40}
              alt={`${icon.shortText}-icon`}
            />
            <span className={styles.categoryName}>{icon.shortText}</span>
          </div>
        ))}
      </div>
      <ButtonLink href="/search" variant="filled">
        Explore More
      </ButtonLink>
    </section>
  );
};

export default TopCategories;
