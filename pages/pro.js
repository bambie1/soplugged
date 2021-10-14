import React, { useState } from "react";
import Image from "next/image";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material/mui-components";
import SEO from "@components/SEO";

import styles from "styles/Pro.module.scss";

const ProPage = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => setShowMore(!showMore);

  return (
    <>
      <SEO title="Professional help for your business digital needs | SoPlugged-PRO" />
      <Container className={styles.page}>
        <Grid container spacing={3} className={styles.hero}>
          <Grid item xs={12} md={6}>
            <Typography className={styles.comingSoon}>
              COMING SOON...
            </Typography>
            <Typography variant="h1" className={styles.heading}>
              SoPlugged<sup>PRO</sup>
            </Typography>
            <Typography className={styles.tagLine}>
              Professional help for your business digital needs
            </Typography>

            <section className={styles.info}>
              <Typography>
                Everything you need to launch and improve your digital presence
                as a small to medium-sized business.
              </Typography>
              {showMore && (
                <Typography className={styles.mobileOnly}>
                  We offer a range of products and services to support your
                  business goals by tapping into new online audiences, creating
                  lasting engagement, and driving results.
                </Typography>
              )}

              <Typography className={styles.laptopOnly}>
                We offer a range of products and services to support your
                business goals by tapping into new online audiences, creating
                lasting engagement, and driving results.
              </Typography>
              <Button
                size="small"
                color="secondary"
                className={styles.mobileOnly}
                onClick={handleShowMore}
              >
                {showMore ? "Show Less" : "Read more..."}
              </Button>

              <form className={styles.form}>
                <Grid container spacing={1} className={styles.formGrid}>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      variant="outlined"
                      color="secondary"
                      placeholder="Email address"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Button type="button" variant="contained" color="secondary">
                      Sign Me Up!
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </section>
          </Grid>
          <Grid item xs={12} md={6} className={styles.imageGrid}>
            <Image
              placeholder="blur"
              src="/images/soplugged_pro.png"
              alt="Business consult session"
              width={400}
              height={400}
              priority
            />
          </Grid>
        </Grid>
        <section className={styles.moreInfo}>
          <Typography variant="h2">What should I expect?</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Do-It-Yourself</Typography>
              <Typography>
                Free resources curated for common business needs. You should be
                able to get your business up-and-running by following our guides
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Stress-Free</Typography>
              <Typography>
                What's better than 'doing it yourself?'... getting our team of
                experts to do it for you! From strategic recommendations to
                professional services (personalized consultation, web design,
                and email marketing) our team is ready to work with you and
                provide all the support you need to grow your business
              </Typography>
            </Grid>
          </Grid>
        </section>
      </Container>
    </>
  );
};

export default ProPage;
