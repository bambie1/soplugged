import { Fragment, useState } from "react";
import Script from "next/script";
import PlacesAutocomplete from "react-places-autocomplete";
import { useField, useFormikContext } from "formik";

import styles from "./FormikInput.module.scss";

const FormikLocation = ({ label, ...props }: any) => {
  const { setFieldValue, values } = useFormikContext<any>();
  const [address, setAddress] = useState(values.business_location);
  const [_, meta] = useField(props);

  const isError = (meta.touched || !meta.initialValue) && meta.error;

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
            <label
              className={`mb-1 block text-sm font-medium uppercase lg:text-base ${
                isError && "text-red-500"
              }`}
            >
              {label}
              <input
                label="Business Location"
                {...getInputProps({
                  placeholder: "City, Province, Canada",
                  type: "search",
                })}
                autoComplete="off"
                className={`mt-2 block w-full rounded-xl border border-primary bg-white p-4 transition duration-150 placeholder:text-gray-300 focus:border-transparent focus:shadow-input-focus focus:outline-2 focus:outline-primary/70 ${
                  isError &&
                  "border-red-500 placeholder:text-red-200 focus:shadow-error-focus focus:outline-red-500/70"
                }`}
              />
              {isError ? (
                <div className="mt-[.125rem] text-xs font-normal normal-case text-red-500 lg:text-sm">
                  {meta.error}
                </div>
              ) : null}
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
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDjqMtZjTrCMfn7U4OHk00_wte02pcuaHs&libraries=places&callback=myCallbackFunc`}
      />
    </>
  );
};

export { FormikLocation };
