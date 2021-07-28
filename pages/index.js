import React from "react";
import { Typography, Button, Grid, Box } from "@material/mui-components";
import Link from "next/link";
import HeroBanner from "@components/HeroBanner";
import SEO from "@components/SEO";
import TopCategories from "@components/TopCategories";
import Image from "next/image";
import displayShopifyCollection from "../src/shopifyStore";
import styles from "../styles/Home.module.scss";
import { SearchIcon } from "@components/material-ui/mui-icons";

export default function Home() {
  return (
    <>
      <SEO
        description="Online platform connecting you to black-owned businesses across Canada. If you're an entrepreneur, register your business to be featured on our platform or join our mailing list to stay plugged in."
        title="We have the Black-Owned Businesses for your needs | SoPlugged"
      />
      <main className={styles.main}>
        <HeroBanner />
        <div className={styles.body_content}>
          <Box mb={10}>
            <Grid
              container
              spacing={2}
              className={`${styles.benefits_grid} ${styles.second}`}
            >
              <Grid item xs={12} md={6}>
                <Typography variant="h2">Want to #BuyBlack?</Typography>
                <Typography variant="body1">
                  We have businesses based in Ottawa, Toronto, and across Canada
                  that you can choose from <br></br>Save business you like for
                  later, and also help other people find them, by liking them
                  <br></br>Contact them directly on our platform, or their
                  preferred means of communication
                </Typography>
                <br></br>
                <Button
                  variant="contained"
                  color="secondary"
                  endIcon={<SearchIcon />}
                >
                  Find a Business
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Image
                  src="/images/search_businesses.png"
                  width={400}
                  height={270}
                />
              </Grid>
            </Grid>
          </Box>
          <Box mt={5} mb={10} textAlign="center">
            <TopCategories />
          </Box>
          <Box mt={5} mb={10}>
            <Grid container spacing={2} className={`${styles.benefits_grid} `}>
              <Grid item xs={12} md={6}>
                <Image
                  src="/images/add_business.png"
                  width={400}
                  height={350}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h2">Want to add your business?</Typography>
                <Typography variant="body1">
                  We have businesses based in Ottawa, Toronto, and across Canada
                  that you can choose from <br></br>Save business you like for
                  later, and also help other people find them, by liking them
                  <br></br>Contact them directly on our platform, or their
                  preferred means of communication
                </Typography>
                <br></br>
                <Button variant="contained" color="secondary">
                  Add your Business for FREE
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box textAlign="center" mt={5} mb={10}>
            <Typography variant="h2" align="center" gutterBottom={true}>
              Check out our merch collection
            </Typography>
            <Typography variant="body1" align="center" gutterBottom={true}>
              Normalize <b>#buyingblack</b>, but make it fashionable
            </Typography>
            {/* <hr></hr> */}
            <div id="collection-component-1622397719540">
              {displayShopifyCollection(
                "collection-component-1622397719540",
                "266521968830"
              )}
            </div>
            <Link href="/merch">
              <a className={styles.shop_more}>
                <Button variant="outlined" color="secondary">
                  Shop More
                </Button>
              </a>
            </Link>
          </Box>

          <Box mb={10}>
            <Grid
              container
              spacing={2}
              className={`${styles.benefits_grid} ${styles.second}`}
            >
              <Grid item xs={12} md={6}>
                <Typography variant="h2">Become a Sponsor</Typography>
                <Typography>
                  At SoPlugged, our biggest inspiration is supporting one
                  another and growing our community. Our goal is to normalize
                  buying black and we rely on amazing people like you to keep
                  our platform free and accessible to Black-owned businesses
                  across Canada.
                </Typography>
                <Typography variant="body2">
                  All donations go towards maintaining our platform and
                  supporting Black-owned businesses across Canada.
                </Typography>
                <br></br>
                <Link href="/sponsors">
                  <a>
                    <Button variant="contained" color="secondary">
                      Show your support
                    </Button>
                  </a>
                </Link>
              </Grid>
              <Grid item xs={12} md={6}>
                <Image
                  src="/images/support_team.png"
                  alt="trophy winners showing support"
                  width={400}
                  height={400}
                />
              </Grid>
            </Grid>
          </Box>
        </div>
      </main>
    </>
  );
}
