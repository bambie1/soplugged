import { Typography } from "@material-ui/core";
import styles from "../styles/Home.module.css";

const CategoryCard = ({ label, imgSrc, value }) => {
  const handleClick = () => {};
  return (
    <div className={styles.cardRoot} onClick={handleClick}>
      <img src={imgSrc} alt="category-display" className={styles.cardImage} />
      <div className={styles.cardOverlay}></div>
      <Typography className={styles.cardTitle}>{label}</Typography>
    </div>
  );
};

export default CategoryCard;
