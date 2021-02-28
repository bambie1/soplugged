import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import LocationSearch from "../../components/LocationSearch";
import Form from "../../components/Form";
import { useRouter } from "next/router";
import MultiStepLayout from "../../components/MultiStepLayout";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../src/updateAction";

const useStyles = makeStyles((theme) => ({
  form: {
    "& > *": {
      width: "100%",
      marginTop: "8px",
      marginBottom: "8px",
    },
  },
}));

const BusinessInfo = () => {
  const classes = useStyles();
  const { state, action } = useStateMachine(updateAction);
  const currentUser = null;
  const currentBusiness = {};
  const router = useRouter();
  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: {
      businessName: "",
      ownerName: "",
    },
    // mode: "onBlur",
  });
  // console.log({ state });
  const [checked, setChecked] = useState(
    !currentBusiness?.fixed_to_one_location
  );

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  const onSubmit = (data) => {
    console.log(data);
    // action(data);
    router.push("/my-business/step2");
  };

  return (
    <MultiStepLayout step={1}>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className={classes.form}
      >
        <TextField
          name="ownerName"
          label="Full Name"
          variant="outlined"
          inputRef={register({
            required: true,
            minLength: 2,
          })}
          error={!!errors.ownerName}
          helperText={
            errors.ownerName?.type === "required"
              ? "Please enter your name"
              : errors.ownerName?.type === "minLength" &&
                "Your name must have a minimum of 2 characters"
          }
        />
        <TextField
          name="businessName"
          label="Name of Business"
          variant="outlined"
          inputRef={register({
            required: {
              value: true,
              message: "Please enter a name for your business",
            },
            minLength: {
              value: 2,
              message: "Your business name must have a minimum of 2 characters",
            },
          })}
          error={!!errors.businessName}
          helperText={errors.businessName?.message}
        />

        <LocationSearch
          label="Location of Business"
          name="businessLocation"
          ref={register({
            required: !checked,
          })}
          variant="outlined"
          error={!!errors.businessLocation && !checked}
          helperText={
            !!errors.businessLocation &&
            !checked &&
            "Please enter a location for your services"
          }
          defaultLocation={currentBusiness?.business_location || ""}
          // setInfoChanged={setInfoChanged}
        />
        <TextField
          variant="outlined"
          label="Street Address (optional)"
          name="streetAddress"
          inputRef={register}
          autoComplete="off"
        />
        <FormControlLabel
          label="Canada-wide / Remote?"
          control={
            <Checkbox
              color="primary"
              name="canadaWide"
              inputRef={register}
              onChange={handleChange}
              checked={checked}
            />
          }
        />
        <Button variant="contained" type="submit">
          Continue
        </Button>
      </Form>
    </MultiStepLayout>
  );
};

export default BusinessInfo;
