import Image from "next/image";
import { useRouter } from "next/router";

import { createURL } from "@/components/algolia/AlgoliaSearch";
import { ButtonLink } from "@/styled/ButtonLink";
import { categoryIcons } from "@/lib/topCategories";

import styles from "./TopCategories.module.scss";

const TopCategories = () => {
  const router = useRouter();

  const handleClick = (label: string) => {
    router.push(
      `/search${createURL({
        refinementList: {
          category: [label],
        },
      })}`
    );
  };

  return (
    <section className={styles.wrapper}>
      <h2>Top Categories</h2>
      <div className={styles.iconsList}>
        {categoryIcons.map((icon) => (
          <button
            key={icon.imageSrc}
            className={styles.categoryWrapper}
            title={icon.categoryText}
            onClick={() => handleClick(icon.categoryText)}
          >
            <div className={styles.image}>
              <Image
                src={icon.imageSrc}
                width={40}
                height={40}
                alt={`${icon.shortText}-icon`}
              />
            </div>
            <span className={styles.categoryName}>{icon.shortText}</span>
          </button>
        ))}
      </div>
      <ButtonLink href="/search" variant="filled">
        Explore More
      </ButtonLink>
    </section>
  );
};

export default TopCategories;
