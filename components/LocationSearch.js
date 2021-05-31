import React, { useState } from "react";
import { Autocomplete } from "@material/mui-lab";
import { LocationOnIcon } from "@material/mui-icons";
import { Grid, makeStyles, CustomTextField } from "@material/mui-components";
import parse from "autosuggest-highlight/parse";
import throttle from "lodash/throttle";
import { useFormikContext } from "formik";
import { useField } from "formik";

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
}));

//Google search box using Places API
const LocationSearch = ({ name, ...otherProps }) => {
  const classes = useStyles();
  const { setFieldValue, values } = useFormikContext();
  const [value, setValue] = useState(
    values
      ? {
          description: values.businessLocation,
        }
      : null
  );
  const [inputValue, setInputValue] = React.useState("");

  const [options, setOptions] = React.useState([]);
  const loaded = React.useRef(false);
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    ...otherProps,
    variant: "outlined",
    fullWidth: true,
  };
  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`,
        document.querySelector("head"),
        "google-maps"
      );
    }
    loaded.current = true;
  }

  const fetch = React.useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 200),
    []
  );

  React.useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch(
      {
        input: inputValue,
        types: ["(cities)"],
        componentRestrictions: { country: "ca" },
      },
      (results) => {
        if (active) {
          let newOptions = [];

          if (value) {
            newOptions = [value];
          }

          if (results) {
            newOptions = [...newOptions, ...results];
          }

          setOptions(newOptions);
        }
      }
    );
    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  return (
    <Autocomplete
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.description
      }
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      onChange={(e, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
        setFieldValue(name, newValue?.description || "");
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <CustomTextField
          {...params}
          {...otherProps}
          fullWidth
          {...configTextField}
        />
      )}
      renderOption={(option) => {
        // console.log({ option });
        // const matches =
        //   option.structured_formatting?.main_text_matched_substrings || [];
        // const parts = parse(
        //   option.structured_formatting?.main_text,
        //   matches.map((match) => [match.offset, match.offset + match.length])
        // );

        return (
          <Grid container alignItems="center">
            <Grid item>
              <LocationOnIcon className={classes.icon} />
            </Grid>
            <Grid item xs>
              {/* {parts.map((part, index) => ( */}
              <span
              // key={index}
              // style={{ fontWeight: part.highlight ? 700 : 400 }}
              >
                {option.description}
              </span>
              {/* ))} */}

              {/* <Typography variant="body2" color="textSecondary">
                {option.structured_formatting.secondary_text}
              </Typography> */}
            </Grid>
          </Grid>
        );
      }}
    />
  );
};

export default LocationSearch;
