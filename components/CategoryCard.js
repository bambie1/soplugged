import { Typography, makeStyles } from "./mui-components";
import { useSearch } from "../contexts/searchContext";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px",
    overflow: "hidden",
    height: "250px",
    "&:hover": {
      "& img": {
        transform: "scale(1.1)",
      },
    },
  },
  title: {
    position: "absolute",
    bottom: "0",
    left: "50%",
    width: "calc(100% - 10px)",
    textAlign: "center",
    transform: "translate(-50%, -50%)",
    display: "block",
    fontWeight: "bold",
    wordBreak: "break-word",
    fontSize: "1.2rem",
    textTransform: "uppercase",
  },
  overlay: {
    position: "absolute",
    top: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "#757575bd",
    borderRadius: "5px",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      backgroundColor: "#75757536",
    },
  },
  bgImg: {
    minWidth: "100%",
    borderRadius: "5px",
    height: "100%",
    transition: "all 2s ease-in-out",
  },
}));

const CategoryCard = ({ label, imgSrc, value }) => {
  const classes = useStyles();
  const { setContextCategory } = useSearch();
  const router = useRouter();

  const handleClick = () => {
    setContextCategory(label);
    router.push("/search");
  };

  return (
    <div className={classes.root} onClick={handleClick}>
      <img src={imgSrc} alt="category-display" className={classes.bgImg} />

      <div className={classes.overlay}></div>
      <Typography className={classes.title}>{label}</Typography>
    </div>
  );
};

export default CategoryCard;
