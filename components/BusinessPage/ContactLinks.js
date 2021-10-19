import React from "react";
import dynamic from "next/dynamic";

import { Typography, Box, IconButton, Tooltip } from "@material/mui-components";
import { InstagramIcon, LanguageIcon, CallIcon } from "@material/mui-icons";

const DynamicContact = dynamic(() => import("../ContactForm/ContactForm"));

import styles from "./BusinessPage.module.scss";

const ContactLinks = ({ business, user }) => {
  const { verified, business_url, ig_handle, phone_number, creator } = business;

  return (
    <>
      {verified && (
        <div className={styles.contact}>
          <Typography
            variant="h6"
            color="secondary"
            align="center"
            gutterBottom
          >
            Contact
          </Typography>
          <Box display="flex" justifyContent="center" flexWrap="wrap">
            {phone_number && (
              <a href={`tel:${phone_number}`} className={styles.linkButton}>
                <Tooltip title="Call Business" aria-label="call business">
                  <IconButton>
                    <CallIcon />
                  </IconButton>
                </Tooltip>
              </a>
            )}
            {business_url && (
              <a
                href={business_url}
                target="_blank"
                rel="noopener"
                className={styles.linkButton}
              >
                <Tooltip title="Visit Website" aria-label="visit website">
                  <IconButton>
                    <LanguageIcon />
                  </IconButton>
                </Tooltip>
              </a>
            )}
            {ig_handle && (
              <a
                href={`https://www.instagram.com/${ig_handle}`}
                target="_blank"
                rel="noopener"
                className={styles.linkButton}
              >
                <Tooltip title="View IG page" aria-label="view IG page">
                  <IconButton>
                    <InstagramIcon />
                  </IconButton>
                </Tooltip>
              </a>
            )}
          </Box>

          <DynamicContact user={user} business_email={creator.email} />
        </div>
      )}
    </>
  );
};

export default ContactLinks;
