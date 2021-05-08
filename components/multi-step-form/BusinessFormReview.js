import React from "react";
import { useFormikContext } from "formik";
import { Avatar, Typography, makeStyles, Box } from "@material/mui-components";
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
  } = values;
  const sampleImagesArray = sampleImages === "" ? [] : sampleImages.split(",");
  return (
    <div className={classes.root}>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        <Typography>
          <span className={classes.sectionTitle}>Business Name:</span>{" "}
          {businessName.toUpperCase()}
        </Typography>
        <Avatar
          alt="Business Logo"
          src={logoUrl}
          style={{ marginLeft: "16px" }}
        >
          {businessName.toUpperCase().charAt(0)}
        </Avatar>
      </Box>

      <Typography>
        <span className={classes.sectionTitle}>CATEGORY:</span>{" "}
        {businessCategory}
      </Typography>
      <Typography>
        {streetAddress && !canadaWide && `LOCATION: ${streetAddress}`}
        {businessLocation}{" "}
        {canadaWide && (
          <span>
            (<CheckIcon fontSize="small" style={{ height: "0.9rem" }} />
            CANADA-WIDE)
          </span>
        )}
      </Typography>
      <div>
        <Typography className={classes.sectionTitle} gutterBottom={true}>
          Sample Images:
        </Typography>
        {sampleImagesArray.length > 0 && (
          <Box display="flex" justifyContent="center">
            {sampleImagesArray.map((image, index) => (
              <Avatar key={index} src={image} />
            ))}
          </Box>
        )}
      </div>

      <div>
        <Typography className={classes.sectionTitle}>
          <span>ABOUT BUSINESS:</span>
        </Typography>
        <div
          className={classes.description}
          dangerouslySetInnerHTML={{ __html: businessDescription }}
        ></div>
      </div>
      <hr style={{ width: "60%" }}></hr>
      {businessUrl && (
        <Typography>
          Website url: <span>{businessUrl}</span>
        </Typography>
      )}
      {igHandle && (
        <Typography>
          IG Handle: <span>@{igHandle}</span>
        </Typography>
      )}
    </div>
  );
};

export default BusinessFormReview;
