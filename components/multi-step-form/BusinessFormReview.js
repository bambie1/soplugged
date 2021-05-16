import React from "react";
import { useFormikContext } from "formik";
import {
  Avatar,
  Typography,
  makeStyles,
  Box,
  TextField,
  Grid,
} from "@material/mui-components";
import { CheckIcon } from "@material/mui-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    "& > *": {
      marginTop: "8px",
      marginBottom: "8px",
    },
  },
  sectionTitle: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  description: {
    maxHeight: "250px",
    overflowY: "scroll",
    padding: "8px 0px",
    "& > ul": {
      display: "table",
      margin: "auto",
    },
    "& > ol": {
      display: "table",
      margin: "auto",
    },
  },
}));

const BusinessFormReview = () => {
  const { setFieldValue, values } = useFormikContext();
  const classes = useStyles();
  const {
    businessCategory,
    businessDescription,
    businessLocation,
    businessName,
    businessUrl,
    canadaWide,
    igHandle,
    sampleImages,
    logoUrl,
    streetAddress,
    phoneNumber,
  } = values;
  const sampleImagesArray = sampleImages === "" ? [] : sampleImages.split(",");
  return (
    <Grid container spacing={2} style={{ marginTop: "8px" }}>
      <Grid item xs={12} sm={6}>
        <TextField
          disabled
          value={businessName.toUpperCase()}
          label="Business Name"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          disabled
          value={businessCategory}
          label="Business Category"
          variant="outlined"
          fullWidth
        />
      </Grid>
      {businessUrl && (
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            value={businessUrl}
            label="Business Website"
            variant="outlined"
            fullWidth
          />
        </Grid>
      )}
      {igHandle && (
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            value={igHandle}
            label="IG Handle"
            variant="outlined"
            fullWidth
          />
        </Grid>
      )}

      {phoneNumber && (
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            value={phoneNumber}
            label="Business Phone"
            variant="outlined"
            fullWidth
          />
        </Grid>
      )}

      <Grid item xs={12}>
        <TextField
          value={businessDescription.replace(/<[^>]*>?/gm, "")}
          multiline={true}
          label="Business Description"
          disabled
          fullWidth
          variant="outlined"
          rowsMax={5}
          helperText="P.S: This is a stripped-down version of the text. Any formatting pre-applied will persist upon save"
        />
      </Grid>
      {businessLocation && (
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            value={businessLocation}
            label="Business Location"
            variant="outlined"
            fullWidth
          />
        </Grid>
      )}
      {streetAddress && (
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            value={streetAddress}
            label="Street Address"
            variant="outlined"
            fullWidth
          />
        </Grid>
      )}
      {canadaWide && (
        <Grid item xs={12}>
          <Typography variant="body2" align="center">
            <CheckIcon fontSize="small" style={{ height: "0.9rem" }} />
            CANADA-WIDE
          </Typography>
        </Grid>
      )}
      <Grid item xs={12}>
        {(sampleImagesArray.length > 0 || logoUrl) && (
          <>
            <Typography
              className={classes.sectionTitle}
              gutterBottom={true}
              align="center"
            >
              Logo and Sample Images:
            </Typography>
            <Box display="flex" justifyContent="center">
              <Avatar alt="Business Logo" src={logoUrl}>
                {businessName.toUpperCase().charAt(0)}
              </Avatar>
              {sampleImagesArray.map((image, index) => (
                <Avatar key={index} src={image} variant="square" />
              ))}
            </Box>
          </>
        )}
      </Grid>
      <hr style={{ width: "60%" }}></hr>
    </Grid>
  );
};

export default BusinessFormReview;
