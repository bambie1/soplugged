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
import { useBusinessFormContext } from "@contexts/businessFormContext";

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
  const defaultCategory = categories.find(
    (item) => item.label === selectedCategory
  );
  const [tags, setTags] = useState(defaultCategory?.tags || "");
  const { setFormWasChanged } = useBusinessFormContext();

  const handleClick = (label, tags) => {
    setSelectedCategory(label);
    setTags(tags);
    setFieldValue("businessCategory", label);
    setFormWasChanged(true);
  };

  return (
    <>
      <Typography align="center">Please select a category below:</Typography>
      <FormControl component="fieldset">
        <div className={classes.categoriesWrapper}>
          {categories.map(({ tags, label, imageSrc }) => (
            <label key={label}>
              <input
                type="radio"
                name="business-category"
                value={label}
                className={classes.categoryInput}
                checked={selectedCategory == label}
                onChange={() => handleClick(label, tags)}
                aria-label={label}
              />
              <Tooltip key={label} title={label}>
                <div
                  className="categoryDivImage"
                  onClick={() => handleClick(label, tags)}
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
        <>
          <Typography align="center">
            <strong>Category selected: </strong> {selectedCategory}
          </Typography>
          <Typography
            align="center"
            style={{ fontStyle: "italic", fontSize: "0.7rem" }}
          >
            {tags}
          </Typography>
        </>
      )}
    </>
  );
};

export default BusinessFormStep2;
