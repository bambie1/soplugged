import React from "react";
import SEO from "@components/SEO";
import { ProHero } from "@components/index";
import { Typography, Grid } from "@material/mui-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";

import styles from "styles/Pro.module.scss";

const SectionTitle = ({ title }) => (
  <Typography variant="h5" color="secondary" className={styles.sectionTitle}>
    {title}
  </Typography>
);

const Pro = () => {
  return (
    <>
      <SEO title="Professional help for your business' digital needs | SoPluggedPRO" />
      <ProHero />
      <main className="body_content">
        <SectionTitle title="PRO FEATURES" />
        <section className={styles.pageSection}>
          <div className={styles.features}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <div className={styles.feature}>
                  <FontAwesomeIcon icon={faHandshake} />
                  Consulting sessions with our marketing expert
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className={styles.feature}>
                  Website design by one of our specialists{" "}
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className={styles.feature}>
                  FREE guides on how build or improve your digital presence
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className={styles.feature}>
                  FREE guides on how build or improve your digital presence
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
      </main>
    </>
  );
};

export default Pro;
