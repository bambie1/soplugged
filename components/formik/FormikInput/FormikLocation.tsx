import { Fragment, useState } from "react";
import Script from "next/script";
import PlacesAutocomplete from "react-places-autocomplete";
import { useField, useFormikContext } from "formik";

import styles from "./FormikInput.module.scss";

const FormikLocation = ({ label, ...props }: any) => {
  const { setFieldValue, values } = useFormikContext<any>();
  const [address, setAddress] = useState(values.business_location);
  const [_, meta] = useField(props);

  const isError = meta.touched && meta.error;

  const handleSelect = (value: string) => {
    setAddress(value);
    setFieldValue("business_location", value);
  };

  const handleChange = (value: string) => {
    if (!value) setFieldValue("business_location", value);

    setAddress(value);
  };

  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
        googleCallbackName="myCallbackFunc"
        searchOptions={{
          types: ["(cities)"],
          componentRestrictions: { country: "ca" },
        }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className={styles.autocomplete}>
            <label className={`${styles.label} ${isError && styles.error}`}>
              {label}
              <input
                label="Business Location"
                {...getInputProps({
                  placeholder: "City, Province, Canada",
                  type: "search",
                })}
                autoComplete="off"
                className={`${styles.input} ${isError && styles.error}`}
              />
              {isError ? <div className="error">{meta.error}</div> : null}
            </label>

            <div className={styles.suggestions}>
              {loading ? (
                <div className={styles.suggestion}>...loading</div>
              ) : null}

              {suggestions.map((suggestion) => {
                const className = `${styles.suggestion} ${
                  suggestion.active && styles.activeSuggestion
                }`;

                return (
                  <Fragment key={suggestion.description}>
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                      })}
                    >
                      {suggestion.description}
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places&callback=myCallbackFunc`}
      />
    </>
  );
};

export { FormikLocation };
