import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  Button,
  TextField,
  Typography,
  Avatar,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import Form from "../../components/Form";
import FileDropzone from "../../components/FileDropzone";
import { useRouter } from "next/router";
import MultiStepLayout from "../../components/MultiStepLayout";
import CategorySearch from "../../components/CategorySearch";

const useStyles = makeStyles((theme) => ({
  form: {
    "& > *": {
      width: "100%",
      marginTop: "8px",
      marginBottom: "8px",
    },
  },
  submit: { width: "auto !important" },
  button: { margin: theme.spacing(1) },
}));

const BusinessInfo = () => {
  const classes = useStyles();
  const currentBusiness = {};
  const router = useRouter();
  const samples = currentBusiness?.sample_images || "";
  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: {
      businessDescription: "",
    },
  });
  const watchDescription = watch(
    "businessDescription",
    currentBusiness?.businessDescription || ""
  );

  const onSubmit = (data) => {
    router.push("/edit-business/step3");
  };

  return (
    <MultiStepLayout step={2}>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className={classes.form}
      >
        <CategorySearch
          label="Business Category"
          variant="outlined"
          name="businessCategory"
          ref={register({
            required: true,
          })}
          error={!!errors.businessCategory}
          helperText={!!errors.businessCategory && "Please select a category"}
          defaultCategory={currentBusiness?.category || ""}
        />
        <TextField
          label="Brief description of your services"
          name="businessDescription"
          placeholder="Enter a short summary about the service you provide, to give customers a better idea of your brand"
          rows={5}
          rowsMax={Infinity}
          multiline
          variant="outlined"
          defaultValue={currentBusiness?.business_description}
          inputRef={register({
            required: true,
            maxLength: 300,
          })}
          error={!!errors.businessDescription}
          helperText={
            errors.businessDescription?.type === "required"
              ? "Please enter a brief description of your services"
              : errors.businessDescription?.type === "maxLength"
              ? "You've exceeded the maximum character limit (300)"
              : `${watchDescription.length}/300`
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
