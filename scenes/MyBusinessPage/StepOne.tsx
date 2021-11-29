import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import PlacesAutocomplete from "react-places-autocomplete";

import { Button } from "@/styled/Button";
import { Input } from "@/styled/Input";
import { IBusiness } from "@/types/Business";

import { updateAction } from "./littleStateMachine/updateAction";
import styles from "./MyBusinessPage.module.scss";
import { Fragment, useState } from "react";

const StepOnePage = () => {
  const router = useRouter();

  const { state, actions } = useStateMachine({ updateAction });
  const { handleSubmit, register } = useForm<IBusiness>({
    defaultValues: state.businessDetails,
  });

  const [address, setAddress] = useState("");

  const handleSelect = async (value: any) => {
    setAddress(value);
  };

  const onSubmit = (data: any) => {
    actions.updateAction({
      businessDetails: data,
    });
    router.push("/my-business?step=two", undefined, { shallow: true });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input label="Business Name" {...register("business_name")} />
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={setAddress}
          searchOptions={{ types: ["(cities)"] }}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <Input
                label="Business Location"
                {...getInputProps({
                  placeholder: "Type address",
                  type: "search",
                })}
              />

              <div className={styles.suggestions}>
                {loading ? <div>...loading</div> : null}

                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                  };

                  return (
                    <Fragment key={suggestion.description}>
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <Input label="Street Address" {...register("street_address")} />
        <Button type="submit">Next</Button>
      </form>
    </>
  );
};

export default StepOnePage;
