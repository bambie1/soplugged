import React from "react";
import { categoryIcons } from "../src/categoryIcons";
import Image from "next/image";
import {
  Typography,
  Button,
  makeStyles,
  useMediaQuery,
} from "@material/mui-components";
import { useSearch } from "@contexts/searchContext";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  categoriesDiv: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "16px",
    margin: "auto",
  },
  categoryWrapper: {
    borderRadius: "50%",
    border: "2px solid #cdb693",
    minHeight: "100px",
    minWidth: "100px",
    width: "130px",
    height: "130px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
    cursor: "pointer",
    opacity: "0.7",
    transition: "0.3s linear",
    backgroundColor: "#fffaf2",
    // [theme.breakpoints.up("sm")]: {
    //   margin: "2vh",
    // },
    [theme.breakpoints.up("sm")]: {
      width: "160px",
      height: "160px",
      margin: "13px",
    },
    [theme.breakpoints.up("md")]: {
      width: "120px",
      height: "120px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "160px",
      height: "160px",
      margin: "13px",
    },
    "&:hover": {
      opacity: "1",
      backgroundColor: "#CD9993",
      borderColor: "#CD9993",
      "& > p": {
        visibility: "visible",
        opacity: "1",
        height: "auto",
      },
    },
  },
  categoryName: {
    marginTop: "16px",
    textTransform: "uppercase",
    fontWeight: "bold",
    visibility: "hidden",
    opacity: "0",
    height: "0",
    transition: "visibility 0.3s, opacity 0.3s, border 0.3s linear",
    fontSize: "0.8rem",
  },
}));

const TopCategories = () => {
  const classes = useStyles();
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
      <Typography
        align="center"
        gutterBottom={true}
        variant="h5"
        component="h2"
      >
        Top Categories
      </Typography>
      <div className={classes.categoriesDiv}>
        {categoryIcons.map((icon) => (
          <div
            key={icon.imageSrc}
            className={classes.categoryWrapper}
            onClick={() => handleClick(icon.categoryText)}
          >
            <Image
              src={icon.imageSrc}
              width={bigScreen ? 70 : 50}
              height={bigScreen ? 70 : 50}
            />
            <Typography
              align="center"
              className={classes.categoryName}
              variant="body1"
            >
              {icon.shortText}
            </Typography>
          </div>
        ))}
      </div>
      <Link href="/search">
        <a style={{ alignSelf: "center", marginBottom: "24px" }}>
          <Button variant="outlined" color="secondary">
            Search More
          </Button>
        </a>
      </Link>
    </>
  );
};

export default TopCategories;
