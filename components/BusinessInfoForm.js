import React, { useState } from "react";
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
  makeStyles,
} from "./mui-components";
import { theme } from "../src/theme";
import { useForm } from "react-hook-form";
import LocationSearch from "./LocationSearch";
import Form from "./Form";
import CategorySearch from "./CategorySearch";
import FileDropzone from "./FileDropzone";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "8px",
    marginBottom: "10px",
  },
  grid: {
    "& .MuiFormControl-root": {
      width: "100%",
    },
  },
  heading: { fontWeight: 600, textAlign: "center", textTransform: "uppercase" },
  submit: { width: "auto !important" },
  input: { display: "none" },
  help: {
    backgroundColor: theme.palette.secondary.light,
    margin: "30px auto 0px",
    padding: "15px",
    maxWidth: "650px",
    [theme.breakpoints.up("md")]: {
      margin: "60px auto 0px",
    },
    "& > *": {
      margin: "8px 0px",
    },
  },
  paperHeading: {
    background: "#fffaf2",
    borderRadius: "5px",
    height: "68px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const BusinessInfoForm = ({ submitHandler, currentBusiness }) => {
  const classes = useStyles();
  const samples = currentBusiness?.sample_images || "";
  const fbUrls = !samples ? [] : samples.split(",");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    errors,
    watch,
    setError,
    clearErrors,
  } = useForm({
    mode: "onBlur",
  });
  const watchDescription = watch(
    "businessDescription",
    currentBusiness?.businessDescription || ""
  );
  const [logo, setLogo] = useState(null);
  const [infoChanged, setInfoChanged] = useState(false);
  const [files, setFiles] = useState(fbUrls);
  const [checked, setChecked] = useState(
    !currentBusiness?.fixed_to_one_location
  );
  const [nameInput, setNameInput] = useState(
    currentBusiness?.business_name || ""
  );

  const handleNameInput = (val) => {
    let trimmedInput = val.trim();
    let special = "/!@#$%^*()'<>`=+;,{}".split("");
    if (trimmedInput === "") {
      setError("businessName", {
        type: "manual",
        message: "Please enter a name for your business",
      });
    } else if (trimmedInput.split("").some((item) => special.includes(item))) {
      setError("businessName", {
        type: "manual",
        message: "You have invalid characters",
      });
    } else if (trimmedInput.length < 4) {
      setError("businessName", {
        type: "manual",
        message: "Your business name is too short (min. 4 characters)",
      });
    } else {
      clearErrors("businessName");
    }
    setNameInput(trimmedInput);
  };
  const handleChange = (e) => {
    setInfoChanged(true);
    setChecked(e.target.checked);
  };
  const onSubmit = (data) => {
    submitHandler(data, files);
  };

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: theme.spacing(2) }}>
        {currentBusiness ? (
          <>
            <Typography variant="h5">
              Welcome back, {currentBusiness.creator.full_name.split(" ")[0]}!
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
                <Grid item xs={12} className={classes.paperHeading}>
                  <Typography variant="h6" className={classes.heading}>
                    Business Info
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} key={currentBusiness?.business_name}>
                  <TextField
                    name="businessName"
                    label="Name of Business"
                    variant="outlined"
                    value={nameInput}
                    inputRef={register}
                    onChange={(e) => {
                      setNameInput(e.target.value);
                      setInfoChanged(true);
                    }}
                    onBlur={(e) => {
                      handleNameInput(e.target.value);
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
                    label="Street Address"
                    name="streetAddress"
                    inputRef={register}
                    autoComplete="off"
                    defaultValue={currentBusiness?.street_address || ""}
                    onChange={() => setInfoChanged(true)}
                    helperText="Optional"
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

                <Grid item xs={12} key={currentBusiness?.business_description}>
                  <TextField
                    label="Description of your services"
                    name="businessDescription"
                    placeholder="...explain the service you provide, to give customers a better idea of your brand"
                    rows={5}
                    rowsMax={7}
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
                      maxLength: 1500,
                    })}
                    error={!!errors.businessDescription}
                    helperText={
                      errors.businessDescription?.type === "required"
                        ? "Please enter a brief description of your services"
                        : errors.businessDescription?.type === "maxLength"
                        ? "You've exceeded the maximum character limit (1500)"
                        : `${watchDescription.length}/1500`
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="url" error={!!errors.businessUrl}>
                      Business Website
                    </InputLabel>
                    <OutlinedInput
                      id="url"
                      startAdornment={
                        <InputAdornment position="start">
                          http://
                        </InputAdornment>
                      }
                      labelWidth={120}
                      placeholder="www.businesspage.com"
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
                        : "Recommended"}
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
                      placeholder="Instagram account"
                      defaultValue={currentBusiness?.ig_handle}
                      name="igHandle"
                      error={!!errors.igHandle}
                      inputRef={register({
                        pattern: /^[a-zA-Z0-9_]*$/,
                      })}
                      onChange={() => {
                        setInfoChanged(true);
                      }}
                    />
                    <FormHelperText error={!!errors.igHandle}>
                      {!!errors.igHandle
                        ? "You have entered invalid characters"
                        : "Recommended"}
                    </FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} className={classes.paper}>
              <Grid container spacing={2} className={classes.grid}>
                <Grid item xs={12} className={classes.paperHeading}>
                  <Typography variant="h6" className={classes.heading}>
                    Images <br></br>
                    <span style={{ fontSize: "0.7rem" }}>
                      (Strongly Recommended)
                    </span>
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: "8px",
                    alignItems: "center",
                  }}
                >
                  <InputLabel style={{ marginRight: "8px" }}>
                    Business logo:
                  </InputLabel>
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
                  <label htmlFor="business-logo" style={{ marginLeft: "8px" }}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      component="span"
                    >
                      {logo || currentBusiness?.logo_url
                        ? "Change Logo"
                        : "Upload Logo"}
                    </Button>
                  </label>
                </Grid>
                <Grid item xs={12}>
                  <InputLabel style={{ marginBottom: "8px" }}>
                    Sample Images
                  </InputLabel>
                  <FileDropzone
                    fbUrls={fbUrls}
                    setInfoChanged={setInfoChanged}
                    setFiles={(files) => {
                      setFiles(files);
                    }}
                  />
                  <br></br>
                </Grid>
              </Grid>
            </Paper>
            {!infoChanged && currentBusiness ? (
              <Button
                variant="outlined"
                className={classes.submit}
                onClick={() => {
                  router.push(`/business/${currentBusiness.slug}`);
                }}
              >
                View Page
              </Button>
            ) : (
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                {currentBusiness
                  ? "Save and View Page"
                  : "Register and View Page"}
              </Button>
            )}
          </Grid>
          <Paper className={classes.help}>
            <Typography>
              Have an issue completing the form? Please hit the button below and
              let us know. We'll get back to you as soon as possible
            </Typography>
            <a href="mailto:hello@soplugged.com">
              <Button variant="outlined">Contact Us</Button>
            </a>
          </Paper>
        </Grid>
      </Form>
    </>
  );
};

export default BusinessInfoForm;
