import { FC, Fragment, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import PlacesAutocomplete from "react-places-autocomplete";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

import { Input } from "@/styled/Input";
import { BusinessForm } from "layouts/BusinessForm";
import { useBusinessStore } from "@/scenes/MyBusinessPage/MyBusinessPage";

interface IFormInput {
  business_name: string;
  business_location: string;
}

const NameLocation: FC = () => {
  const { handleNextStep, business, updateBusiness } = useBusinessStore();
  const [address, setAddress] = useState(business.business_location);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<IFormInput>();

  const isLocationError = errors.business_location;

  const handleSelect = (value: string) => {
    setAddress(value);
    setValue("business_location", value);
  };

  const handleChange = (value: string) => {
    if (!value) setValue("business_location", value);

    setAddress(value);
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    updateBusiness({
      ...business,
      ...data,
    });

    handleNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BusinessForm>
        <div className="grid gap-7">
          <Input
            label="What is the name of your business?"
            {...register("business_name", {
              required: {
                message: "Please enter a name for your business",
                value: true,
              },
              value: business.business_name,
            })}
            error={errors.business_name?.message}
          />

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
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div className="relative">
                <label
                  className={`mb-1 block text-sm font-bold uppercase ${
                    isLocationError ? "text-red-500" : ""
                  }`}
                  htmlFor="business_location"
                >
                  Where is your business located?
                  <input
                    {...register("business_location", {
                      required: true,
                      value: business.business_location,
                    })}
                    // @ts-ignore
                    {...getInputProps({
                      type: "search",
                    })}
                    id="business_location"
                    autoComplete="off"
                    className={`mt-1 block w-full rounded-xl p-4 font-normal transition duration-150 ${
                      isLocationError
                        ? "border-red-500 focus:border-red-500 focus:outline-2 focus:ring-red-500"
                        : "border-primary focus:border-primary focus:ring-primary"
                    }`}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 mt-4 flex items-center pr-3">
                    {isLocationError && (
                      <ExclamationCircleIcon
                        className="h-5 w-5 text-red-500"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  {isLocationError ? (
                    <div className="mt-[.125rem] text-sm font-normal normal-case text-red-500">
                      {isLocationError.message}
                    </div>
                  ) : null}
                </label>

                <div className="location-suggestions absolute left-0 block w-full overflow-hidden rounded-xl bg-white">
                  {loading ? (
                    <div className="cursor-pointer p-2">...loading</div>
                  ) : null}

                  {suggestions.map((suggestion) => {
                    const className = `p-2 cursor-pointer ${
                      suggestion.active && "bg-secondary/20"
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
        </div>
      </BusinessForm>
    </form>
  );
};

export default NameLocation;