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
    <>
      {/* mobile */}
      <div className={styles.mobileCarousel}>
        <ul>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <li key={item} className={styles.item}></li>
          ))}
        </ul>
      </div>

      {/* laptop */}
      <div className={styles.categoryImages}>
        <ul className={styles.column}>
          {[1, 2, 3].map((item) => (
            <li key={item} className={styles.item}></li>
          ))}
        </ul>
        <ul className={styles.column}>
          {[1, 2, 3].map((item) => (
            <li key={item} className={styles.item}></li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TopCategories;
