import React from "react";
import { makeStyles, Typography, Avatar, IconButton } from "../mui-components";
import {
  CheckIcon,
  InstagramIcon,
  MailOutlineIcon,
  LanguageIcon,
} from "../mui-icons";
import { Highlight, Snippet } from "react-instantsearch-dom";
import BusinessCardModal from "../BusinessCardModal";
import Link from "next/link";

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
  let slug = hit.slug || "biz-slug";
  return (
    <>
      <Link href={`/business/${slug}`}>
        <a>
          <div className={classes.root}>
            <div
              className="business-header"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar alt="Business Logo" src={hit.logo_url} variant="square">
                {hit.business_name.toUpperCase().charAt(0)}
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
          </div>
        </a>
      </Link>
    </>
  );
};

export default AlgoliaHit;
