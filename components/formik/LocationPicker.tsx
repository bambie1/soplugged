import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { useField, useFormikContext } from "formik";

import { canadaCities } from "@/lib/canadaCities";

export default function LocationPicker() {
  const [query, setQuery] = useState("");
  const { setFieldValue, values } = useFormikContext<any>();
  const [field, meta] = useField({ name: "business_location" });
  const [selected, setSelected] = useState(values.business_location);

  const isError = (meta.touched || !meta.initialValue) && meta.error;

  const filteredCities =
    query === ""
      ? canadaCities
      : canadaCities.filter((city) =>
          city
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const handleChange = (value: string) => {
    setSelected(value);
    setFieldValue("business_location", value);
  };

  return (
    <div className="w-full">
      <label htmlFor="" className={`block text-sm text-gray-700 lg:text-base`}>
        Where is your business located?
      </label>
      <Combobox value={selected} onChange={handleChange}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-md border border-gray-400 bg-white text-left placeholder:text-gray-300 focus:border-primary focus:outline-none focus:ring-primary focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300">
            <Combobox.Input
              className="w-full border-none py-4 pl-4 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 lg:text-base"
              // onChange={(event) => setQuery(event.target.value)}
              placeholder="City, Province, Canada"
              {...field}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {filteredCities.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredCities.map((city) => (
                  <Combobox.Option
                    key={city}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-secondary text-white" : "text-gray-900"
                      }`
                    }
                    value={city}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {city}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-secondary"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>

      {isError && (
        <p className="text-xs text-red-600 lg:text-sm" id="email-error">
          {meta.error}
        </p>
      )}
    </div>
  );
}
