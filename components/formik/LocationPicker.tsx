import { Fragment, useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { useField, useFormikContext } from "formik";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

import styles from "./FormikInput/FormikInput.module.scss";

const LocationPicker = () => {
  const { setFieldValue, values } = useFormikContext<any>();
  const [address, setAddress] = useState(values.business_location);
  const [field, meta] = useField({ name: "business_location" });

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
              className={`mb-1 block text-base font-medium ${
                isError ? "text-red-500" : "text-gray-700"
              }`}
              htmlFor="business_location"
            >
              Where is your business located?
              <input
                {...field}
                {...getInputProps({
                  type: "search",
                })}
                id="business_location"
                autoComplete="off"
                className={`mt-1 block w-full rounded-md p-4 transition duration-150 ${
                  isError
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-400 focus:border-primary focus:ring-primary"
                }`}
                name="business_location"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                {isError && (
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                )}
              </div>
              {isError ? (
                <div className="mt-[.125rem] text-sm font-normal normal-case text-red-500">
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
    </>
  );
};

export default LocationPicker;
