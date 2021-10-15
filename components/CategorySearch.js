import React, { useState } from "react";
import { CustomTextField } from "@material/mui-components";
import { Autocomplete } from "@material/mui-lab";
import { categories } from "../src/ListOfCategories";
import { useFormikContext } from "formik";

const CategorySearch = ({ name, ...otherProps }) => {
  const { setFieldValue, values } = useFormikContext();
  const [value, setValue] = useState(
    values ? { label: values.businessCategory } : null
  );
  const [inputValue, setInputValue] = useState("");

  return (
    <Autocomplete
      value={value}
      onChange={(e, newValue) => {
        setValue(newValue);
        setFieldValue(name, newValue.label);
      }}
      getOptionSelected={(option, value) => option.label == value.label}
      getOptionLabel={(option) => option.label}
      inputValue={inputValue}
      onInputChange={(e, newInputValue) => {
        setInputValue(newInputValue);
      }}
      options={categories}
      renderInput={(params) => (
        <CustomTextField color="secondary" {...params} {...otherProps} />
      )}
    />
  );
};

export default CategorySearch;
