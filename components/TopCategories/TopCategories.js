import React from "react";
import { categoryIcons } from "../../src/categoryIcons";
import Image from "next/image";
import { Typography, Button, useMediaQuery } from "@material/mui-components";
import { useSearch } from "@contexts/searchContext";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "@material-ui/core/styles";
import { NavigateNextIcon } from "@material/mui-icons";

import * as styles from "./TopCategoriesStyles.module.scss";

const TopCategories = () => {
  const { setContextCategory } = useSearch();
  const router = useRouter();
  const theme = useTheme();
  const bigScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const handleClick = (label) => {
    setContextCategory(label);
    router.push("/search");
  };

  return (
    <>
      <Typography align="center" gutterBottom={true} variant="h2">
        Top Categories
      </Typography>
      <div className={styles.top_categories}>
        {categoryIcons.map((icon) => (
          <div
            key={icon.imageSrc}
            className={styles.category_wrapper}
            onClick={() => handleClick(icon.categoryText)}
          >
            <Image
              src={icon.imageSrc}
              width={bigScreen ? 50 : 35}
              height={bigScreen ? 50 : 35}
              alt={`${icon.shortText}-icon`}
            />
            <Typography
              align="center"
              className={styles.category_name}
              variant="body1"
            >
              {icon.shortText}
            </Typography>
          </div>
        ))}
      </div>
      <Link href="/search" passHref>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<NavigateNextIcon />}
        >
          Explore More
        </Button>
      </Link>
    </>
  );
};

export default TopCategories;
