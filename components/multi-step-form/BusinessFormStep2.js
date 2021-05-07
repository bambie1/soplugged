import React, { useState } from "react";
import { Typography, makeStyles, Tooltip } from "@material/mui-components";
import Image from "next/image";
import { categories } from "../../src/ListOfCategories";
import { useFormikContext } from "formik";

const useStyles = makeStyles((theme) => ({
  categoriesWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "24px",
  },
  categoryDiv: {
    textAlign: "center",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "8px",
    padding: "8px",
    margin: "10px",
    cursor: "pointer",
    maxWidth: "100px",
    "&:hover": {
      background: theme.palette.primary.main,
      opacity: "0.7",
    },
  },
  selectedCategoryDiv: {
    background: theme.palette.primary.main,
    borderColor: theme.palette.secondary.main,
  },
}));
const BusinessFormStep2 = () => {
  const classes = useStyles();
  const { setFieldValue, values } = useFormikContext();
  const [selectedCategory, setSelectedCategory] = useState(
    values.businessCategory
  );

  const handleClick = (label) => {
    if (isSelected(label)) {
      setSelectedCategory(null);
      setFieldValue("businessCategory", "");
    } else {
      setSelectedCategory(label);
      setFieldValue("businessCategory", label);
    }
  };
  const isSelected = (val) => selectedCategory == val;

  return (
    <div>
      <Typography align="center">Please select a category below:</Typography>
      <div className={classes.categoriesWrapper}>
        {categories.map(({ label, imageSrc }) => (
          <Tooltip key={label} title={label}>
            <div
              className={`${classes.categoryDiv} ${
                isSelected(label) && classes.selectedCategoryDiv
              }  
            `}
              onClick={() => handleClick(label)}
            >
              <Image src={imageSrc} width={40} height={40} />
              <Typography
                variant="caption"
                display="block"
                className={classes.categoryText}
                noWrap={true}
              >
                {label}
              </Typography>
            </div>
          </Tooltip>
        ))}
      </div>
      {selectedCategory && (
        <Typography align="center">
          <strong>Category selected: </strong> {selectedCategory}
        </Typography>
      )}
    </div>
  );
};

export default BusinessFormStep2;
