import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputLabel, Button, Typography, Avatar } from "@material-ui/core";
import { useForm } from "react-hook-form";
import Form from "../../components/Form";
import FileDropzone from "../../components/FileDropzone";
import { useRouter } from "next/router";
import MultiStepLayout from "../../components/MultiStepLayout";

const useStyles = makeStyles((theme) => ({
  form: {
    "& > *": {
      width: "100%",
      marginTop: "8px",
      marginBottom: "8px",
    },
  },
  input: { display: "none" },
  button: { margin: theme.spacing(1) },
}));

const BusinessInfo = () => {
  const classes = useStyles();
  const currentBusiness = {};
  const router = useRouter();
  const samples = currentBusiness?.sample_images || "";
  const fbUrls = !samples ? [] : samples.split(",");

  const { register, handleSubmit } = useForm();
  const [logo, setLogo] = useState(data?.logo?.item(0) || null);
  const [logoFileRead, setLogoFileRead] = useState(null);
  const [files, setFiles] = useState(data.files || []);

  const onSubmit = (data) => {
    router.push("/my-business/step4");
  };

  useEffect(() => {
    if (logo) {
      var reader = new FileReader();
      reader.onload = function (e) {
        setLogoFileRead(e.target.result);
      };
      reader.readAsDataURL(logo);
    }
  }, [logo]);

  return (
    <MultiStepLayout step={3}>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className={classes.form}
      >
        <InputLabel shrink>Business logo:</InputLabel>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <input
            accept="image/png, image/jpeg"
            className={classes.input}
            id="business-logo"
            name="logo"
            ref={register}
            type="file"
            onChange={(e) => {
              setLogo(e.target.files[0]);
            }}
          />
          <label htmlFor="business-logo">
            <Button
              variant="contained"
              color="primary"
              component="span"
              style={{ marginRight: "8px" }}
            >
              {logo || currentBusiness?.logo_url
                ? "Change Logo"
                : "Upload Logo"}
            </Button>
          </label>
          {logoFileRead && (
            <Avatar src={logoFileRead} variant="square"></Avatar>
          )}
          {currentBusiness?.logo_url && !logo && (
            <Avatar src={currentBusiness?.logo_url} variant="square">
              {currentBusiness?.business_name.charAt(0)}
            </Avatar>
          )}
        </div>
        <FileDropzone fbUrls={files} setFiles={setFiles} />
        <Button variant="contained" type="submit">
          Continue
        </Button>
      </Form>
    </MultiStepLayout>
  );
};

export default BusinessInfo;
