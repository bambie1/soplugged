import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Avatar, IconButton } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LanguageIcon from "@material-ui/icons/Language";
import { Highlight, Snippet } from "react-instantsearch-dom";
// import BusinessCardModal from "../BusinessCardModal";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    cursor: "pointer",
  },
  businessName: {
    textTransform: "uppercase",
    fontWeight: "normal",
    marginLeft: theme.spacing(1),
  },
  btnGroup: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    borderTop: `1px solid ${theme.palette.primary.main}`,
  },
}));

const AlgoliaHit = ({ hit }) => {
  const classes = useStyles();
  const [selectedBusiness, setSelectedBusiness] = React.useState(null);

  return (
    <>
      <div className={classes.root} onClick={() => setSelectedBusiness(hit)}>
        <div
          className="business-header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar alt="Business Logo" src={hit.logo_url} variant="square">
            {hit.business_name.charAt(0)}
          </Avatar>
          <Typography variant="h6" className={classes.businessName}>
            <Highlight attribute="business_name" hit={hit} />
          </Typography>
        </div>
        <Typography variant="body1" style={{ fontWeight: "bold" }}>
          CATEGORY: <Highlight attribute="category" hit={hit} />
        </Typography>
        <Typography variant="body2">
          <Snippet attribute="business_description" hit={hit} />
        </Typography>
        <br></br>
        <Typography style={{ marginTop: "auto" }}>
          {hit.street_address &&
            hit.fixed_to_one_location &&
            `LOCATION: ${hit.street_address}`}
          {hit.street_address && hit.fixed_to_one_location && <br></br>}
          {hit.business_location}
          <br></br>
          {!hit.fixed_to_one_location && (
            <span
              style={{
                fontWeight: "bold",
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckIcon fontSize="small" style={{ height: "0.9rem" }} />
              CANADA-WIDE
            </span>
          )}
        </Typography>

        <div className={classes.btnGroup}>
          <a href={`mailto:${hit.email}`}>
            <IconButton aria-label="email">
              <MailOutlineIcon />
            </IconButton>
          </a>
          {hit.business_url && (
            <a href={`http://${hit.business_url}`} target="__blank">
              <IconButton aria-label="website">
                <LanguageIcon />
              </IconButton>
            </a>
          )}
          {hit.ig_handle && (
            <a href={`https://www.instagram.com/${hit.ig_handle}`}>
              <IconButton aria-label="instagram">
                <InstagramIcon />
              </IconButton>
            </a>
          )}
        </div>
      </div>
      {/* {selectedBusiness && (
        <BusinessCardModal
          business={selectedBusiness}
          closeModal={setSelectedBusiness}
        />
      )} */}
    </>
  );
};

export default AlgoliaHit;
