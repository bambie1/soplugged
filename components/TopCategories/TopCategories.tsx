import Image from "next/image";
import { useRouter } from "next/router";

import { ButtonLink } from "@/styled/ButtonLink";
import styles from "./TopCategories.module.scss";
import { categoryIcons } from "@/lib/topCategories";
import { useAlgoliaSearch } from "@/context/algoliaSearchContext";

const TopCategories = () => {
  const router = useRouter();
  const { setCategory } = useAlgoliaSearch();

  const handleClick = (label: string) => {
    setCategory(label);
    router.push("/search");
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
