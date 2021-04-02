import React from "react";
import { makeStyles, Typography, Avatar, IconButton } from "../mui-components";
import { CheckIcon } from "../mui-icons";
import { Highlight, Snippet } from "react-instantsearch-dom";
import Link from "next/link";
import { useAuthUser, withAuthUser } from "next-firebase-auth";
import FavoriteButton from "../FavoriteButton";
import BusinessHeader from "../BusinessHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
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
  const user = useAuthUser();
  const [likes, setLikes] = React.useState(0);
  let slug = hit.slug || "biz-slug";
  let res = fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/business?slug=${hit.slug}`
  )
    .then((r) => r.json())
    .then((business) => setLikes(business.number_of_likes));
  const businessOwner = user?.email === hit.creator.email;
  return (
    <>
      <div className={classes.root}>
        <Link href={`/business/${slug}`}>
          <a>
            <BusinessHeader>
              <Avatar alt="Business Logo" src={hit.logo_url} variant="square">
                {hit.business_name.toUpperCase().charAt(0)}
              </Avatar>
              <Typography variant="h6" className={classes.businessName}>
                <Highlight attribute="business_name" hit={hit} />
              </Typography>
            </BusinessHeader>

            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              CATEGORY: <Highlight attribute="category" hit={hit} />
            </Typography>
            <Typography variant="body2">
              <Snippet attribute="business_description" hit={hit} />
            </Typography>
          </a>
        </Link>
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
        <FavoriteButton
          business_id={hit.id}
          user={user}
          numberOfLikes={likes}
          disabled={businessOwner}
          mini={true}
        />
      </div>
    </>
  );
};

export default withAuthUser()(AlgoliaHit);
