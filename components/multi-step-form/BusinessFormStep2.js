import React, { useState } from "react";
import {
  Typography,
  makeStyles,
  Tooltip,
  FormControl,
} from "@material/mui-components";
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
  categoryInput: {
    position: "absolute",
    opacity: "0",
    "& ~ .categoryDivImage": {
      textAlign: "center",
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: "8px",
      padding: "8px",
      margin: "10px",
      cursor: "pointer",
      maxWidth: "100px",
    },
    "&:hover ~ .categoryDivImage": {
      background: theme.palette.primary.main,
      opacity: "0.7",
    },
    "&:checked ~ .categoryDivImage": {
      background: theme.palette.primary.main,
      borderColor: theme.palette.secondary.main,
    },
    "&:focus ~ .categoryDivImage": {
      border: `2px solid ${theme.palette.secondary.main}`,
      padding: "6px",
    },
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
    <>
      <Typography align="center">Please select a category below:</Typography>
      <FormControl component="fieldset">
        <div className={classes.categoriesWrapper}>
          {categories.map(({ label, imageSrc }) => (
            <label key={label}>
              <input
                type="radio"
                name="business-category"
                value={label}
                className={classes.categoryInput}
                checked={selectedCategory == label}
                onChange={() => handleClick(label)}
                aria-label={label}
              />
              <Tooltip key={label} title={label}>
                <div
                  className="categoryDivImage"
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
            </label>
          ))}
        </div>
      </FormControl>
      {selectedCategory && (
        <Typography align="center">
          <strong>Category selected: </strong> {selectedCategory}
        </Typography>
      )}
    </>
  );
};

export default BusinessFormStep2;
