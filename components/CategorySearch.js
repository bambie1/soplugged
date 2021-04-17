import React, { forwardRef, useState } from "react";
import { TextField } from "./mui-components";
import { Autocomplete } from "./mui-lab";
import { categories } from "../src/ListOfCategories";

const CategorySearch = forwardRef((props, ref) => {
  const { defaultCategory, setInfoChanged, ...otherProps } = props;
  const [value, setValue] = useState(
    defaultCategory ? { label: defaultCategory } : null
  );
  const [inputValue, setInputValue] = useState("");

  return (
    <Autocomplete
      value={value}
      onChange={(e, newValue) => {
        setValue(newValue);
        setInfoChanged &&
          setInfoChanged(!(newValue?.label === defaultCategory));
      }}
      getOptionSelected={(option, value) => option.label == value.label}
      getOptionLabel={(option) => option.label}
      inputValue={inputValue}
      onInputChange={(e, newInputValue) => {
        setInputValue(newInputValue);
      }}
      options={categories}
      renderInput={(params) => (
        <TextField {...params} {...otherProps} inputRef={ref} />
      )}
    />
  );
});

export default CategorySearch;
