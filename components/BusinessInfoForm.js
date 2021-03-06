import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  Button,
  Grid,
  TextField,
  Typography,
  Paper,
  Avatar,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputAdornment,
  OutlinedInput,
  FormHelperText,
} from "@material-ui/core";
import { theme } from "../src/theme";
import { useForm } from "react-hook-form";
import LocationSearch from "./LocationSearch";
import Form from "./Form";
import CategorySearch from "./CategorySearch";
import FileDropzone from "./FileDropzone";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "15px",
    marginBottom: "10px",
  },
  grid: {
    "& .MuiFormControl-root": {
      width: "100%",
    },
  },
  headings: { fontWeight: 600 },
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  submit: { width: "auto !important" },
  input: { display: "none" },
  button: { margin: theme.spacing(1) },
}));

const BusinessInfoForm = ({ submitHandler, currentBusiness, email }) => {
  const classes = useStyles();
  const samples = currentBusiness?.sample_images || "";
  const fbUrls = !samples ? [] : samples.split(",");
  const router = useRouter();

  const { register, handleSubmit, errors, watch } = useForm();
  const watchDescription = watch(
    "businessDescription",
    currentBusiness?.businessDescription || ""
  );
  const [logo, setLogo] = useState(null);
  const [infoChanged, setInfoChanged] = useState(false);
  const [files, setFiles] = useState([]);
  const [checked, setChecked] = useState(
    !currentBusiness?.fixed_to_one_location
  );

  const handleChange = (e) => {
    setInfoChanged(true);
    setChecked(e.target.checked);
  };
  const onSubmit = (data) => {
    console.log(data);
    console.log(files);
    submitHandler(data, files);
  };

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: theme.spacing(2) }}>
        {currentBusiness ? (
          <>
            <Typography variant="h5">
              Welcome back, {currentBusiness.owner_name}!
            </Typography>
            <Typography variant="body1" style={{ marginTop: "5px" }}>
              Edit your business info as you wish
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h5">Welcome to SoPlugged!</Typography>
            <Typography variant="body1" style={{ marginTop: "5px" }}>
              Your business will be available in our directory after completing
              our quick setup form below:
            </Typography>
          </>
        )}
      </div>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Grid className={classes.grid} container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className={classes.paper}>
              <Grid className={classes.grid} container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6" className={classes.headings}>
                    Business Info
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} key={currentBusiness?.business_name}>
                  <TextField
                    name="businessName"
                    label="Name of Business"
                    variant="outlined"
                    defaultValue={currentBusiness?.business_name || ""}
                    inputRef={register({
                      required: {
                        value: true,
                        message: "Please enter a name for your business",
                      },
                      minLength: {
                        value: 2,
                        message:
                          "Your business name must have a minimum of 2 characters",
                      },
                    })}
                    onChange={(e) => {
                      setInfoChanged(
                        !(e.target.value === currentBusiness?.business_name)
                      );
                    }}
                    error={!!errors.businessName}
                    helperText={errors.businessName?.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6} key={currentBusiness?.category}>
                  <CategorySearch
                    label="Business Category"
                    variant="outlined"
                    name="businessCategory"
                    ref={register({
                      required: true,
                    })}
                    error={!!errors.businessCategory}
                    helperText={
                      !!errors.businessCategory && "Please select a category"
                    }
                    defaultCategory={currentBusiness?.category || ""}
                    setInfoChanged={setInfoChanged}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={6}
                  key={currentBusiness?.business_location}
                >
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
                    setInfoChanged={setInfoChanged}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    label="Street Address (optional)"
                    name="streetAddress"
                    inputRef={register}
                    autoComplete="off"
                    defaultValue={currentBusiness?.street_address || ""}
                    onChange={() => setInfoChanged(true)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
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
                </Grid>
                <Grid item xs={12} sm={6}>
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
                        setInfoChanged(true);
                      }}
                    />
                    <label htmlFor="business-logo">
                      <Button
                        variant="outlined"
                        color="primary"
                        component="span"
                      >
                        {logo || currentBusiness?.logo_url
                          ? "Change Logo"
                          : "Upload Logo"}
                      </Button>
                    </label>
                    <Typography
                      display="inline"
                      style={{ marginLeft: "8px", fontSize: "0.7rem" }}
                    >
                      {logo && logo.name}
                    </Typography>
                    {currentBusiness?.logo_url && !logo && (
                      <Avatar src={currentBusiness?.logo_url} variant="square">
                        {currentBusiness?.business_name.charAt(0)}
                      </Avatar>
                    )}
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <FileDropzone
                    fbUrls={fbUrls}
                    setInfoChanged={setInfoChanged}
                    setFiles={setFiles}
                  />
                </Grid>

                <Grid item xs={12} key={currentBusiness?.business_description}>
                  <TextField
                    label="Brief description of your services"
                    name="businessDescription"
                    placeholder="Enter a short summary about the service you provide, to give customers a better idea of your brand"
                    rows={5}
                    rowsMax={Infinity}
                    multiline
                    variant="outlined"
                    defaultValue={currentBusiness?.business_description}
                    onChange={(e) => {
                      setInfoChanged(
                        !(
                          e.target.value ===
                          currentBusiness?.business_description
                        )
                      );
                    }}
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
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="url" error={!!errors.businessUrl}>
                      Business Page
                    </InputLabel>
                    <OutlinedInput
                      id="url"
                      startAdornment={
                        <InputAdornment position="start">
                          http://
                        </InputAdornment>
                      }
                      labelWidth={120}
                      placeholder="www.businesspage.com (optional)"
                      defaultValue={currentBusiness?.business_url}
                      name="businessUrl"
                      inputRef={register({
                        pattern: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
                      })}
                      error={!!errors.businessUrl}
                      onChange={(e) => {
                        setInfoChanged(
                          !(e.target.value === currentBusiness?.business_url)
                        );
                      }}
                    />
                    <FormHelperText error={!!errors.businessUrl}>
                      {!!errors.businessUrl
                        ? "Please enter a valid url"
                        : "Cusomers will be taken to this page to view your business"}
                    </FormHelperText>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="igHandle" error={!!errors.igHandle}>
                      Instagram Handle
                    </InputLabel>
                    <OutlinedInput
                      id="igHandle"
                      startAdornment={
                        <InputAdornment position="start">@</InputAdornment>
                      }
                      labelWidth={130}
                      placeholder="Instagram account (optional)"
                      defaultValue={currentBusiness?.ig_handle}
                      name="igHandle"
                      error={!!errors.igHandle}
                      inputRef={register({
                        pattern: /^\S*$/,
                      })}
                      onChange={() => {
                        setInfoChanged(true);
                      }}
                    />
                    <FormHelperText error={!!errors.igHandle}>
                      {!!errors.igHandle && "IG Handle cannot have spaces"}
                    </FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className={classes.paper}>
              <Grid container spacing={2} className={classes.grid}>
                <Grid item xs={12}>
                  <Typography variant="h6">Owner Info</Typography>
                </Grid>
                <Grid item xs={12} key={currentBusiness?.owner_name}>
                  <TextField
                    name="ownerName"
                    label="Full Name"
                    variant="outlined"
                    inputRef={register({
                      required: true,
                      minLength: 2,
                    })}
                    defaultValue={currentBusiness?.owner_name}
                    error={!!errors.ownerName}
                    helperText={
                      errors.ownerName?.type === "required"
                        ? "Please enter your name"
                        : errors.ownerName?.type === "minLength" &&
                          "Your name must have a minimum of 2 characters"
                    }
                    onChange={(e) => {
                      setInfoChanged(
                        !(e.target.value === currentBusiness?.owner_name)
                      );
                    }}
                  />
                </Grid>
                <Grid item xs={12} key={email}>
                  <TextField
                    name="ownerEmail"
                    label="E-mail"
                    variant="outlined"
                    defaultValue={email}
                    inputRef={register({
                      required: true,
                    })}
                    disabled={true}
                    helperText="Customers will reach out to you via this e-mail"
                  />
                </Grid>
              </Grid>
            </Paper>
            {!infoChanged && currentBusiness ? (
              <Button
                variant="contained"
                className={classes.submit}
                onClick={() => {
                  // setIsNewBusiness(false);
                  router.push("/preview");
                }}
              >
                View card
              </Button>
            ) : (
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                {currentBusiness
                  ? "Save and view card"
                  : "Register and view card"}
              </Button>
            )}
          </Grid>
        </Grid>
      </Form>
    </>
  );
};

export default BusinessInfoForm;
