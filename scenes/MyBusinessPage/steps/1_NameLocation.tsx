import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import { useForm, Controller } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import PlacesAutocomplete from "react-places-autocomplete";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "yup";

import { Input } from "@/styled/Input";
import { IBusiness } from "@/types/Business";

import { updateAction } from "../littleStateMachine/updateAction";
import styles from "../MyBusinessPage.module.scss";
import { BusinessForm } from "layouts/BusinessForm";

const schema = yup
  .object()
  .shape({
    business_name: yup.string().required(),
    business_location: yup.string().required(),
  })
  .required();

const NameLocation = () => {
  const router = useRouter();

  const { state, actions } = useStateMachine({ updateAction });
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm<IBusiness>({
    defaultValues: state.businessDetails,

    resolver: yupResolver(schema),
  });

  const [address, setAddress] = useState(
    state.businessDetails.business_location
  );

  const handleSelect = async (value: any) => {
    setAddress(value);
    setValue("business_location", value);
  };

  // const handleChange = (e: any) => {
  //   setAddress(e.target.value);
  // };

  const onSubmit = (data: any) => {
    actions.updateAction({
      businessDetails: data,
    });
    router.push("/my-business?step=category", undefined, { shallow: true });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BusinessForm>
          <section className={styles.form}>
            <Input
              label="Business Name"
              {...register("business_name", { required: true, minLength: 2 })}
              placeholder="ABC Business"
              error={
                errors.business_name &&
                "Please enter a name for your business with at least 2 letters"
              }
            />

            <Controller
              name="business_location"
              control={control}
              render={({ ...props }) => (
                <PlacesAutocomplete
                  {...props}
                  value={address}
                  onChange={setAddress}
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
                    <div className={styles.autocomplete}>
                      <Input
                        label="Business Location"
                        {...getInputProps({
                          placeholder: "City, Province, Canada",
                          type: "search",
                        })}
                        autoComplete="off"
                        error={
                          errors.business_location &&
                          "Please enter a location for your business"
                        }
                      />

                      <div className={styles.suggestions}>
                        {loading ? <div>...loading</div> : null}

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
              )}
              defaultValue={state.businessDetails.business_location}
              rules={{ required: true }}
            />

            <Input
              label="Street Address (Optional)"
              {...register("street_address")}
              placeholder="123 Street"
            />
          </section>
        </BusinessForm>
      </form>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places&callback=myCallbackFunc`}
      />
    </>
  );
};

export default NameLocation;
