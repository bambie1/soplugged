import React from "react";
import { Typography, Button, Grid, Box } from "@material/mui-components";
import Link from "next/link";
import HeroBanner from "@components/HeroBanner";
import SEO from "@components/SEO";
import TopCategories from "@components/TopCategories";
import Image from "next/image";

import styles from "styles/Home.module.scss";

import dynamic from "next/dynamic";
const DynamicShopifyCollection = dynamic(() =>
  import("@components/ShopifyMiniCollection")
);

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
          <Box mb={5}>
            <Grid
              container
              spacing={2}
              className={`${styles.benefits_grid} ${styles.second}`}
            >
              <Grid item xs={12} md={6}>
                <Typography variant="h2">Want to #BuyBlack?</Typography>
                <Typography variant="body1">
                  We have businesses based in Ottawa, Toronto, and across Canada
                  that you can choose from. Whether you're looking for a hair
                  stylist or a caterer for your next event, we've got you
                  covered. Once you find a business you like, you can contact
                  them directly on our platform, or through their preferred
                  means of communication.
                </Typography>
                <br></br>
                <Link href="/search">
                  <a>
                    <Button variant="contained" color="secondary">
                      Find a Business
                    </Button>
                  </a>
                </Link>
              </Grid>
              <Grid item xs={12} md={6}>
                <Image
                  placeholder="blur"
                  src="/images/search_businesses_tiny.png"
                  width={400}
                  height={272}
                  alt="Search for businesses"
                  priority
                />
              </Grid>
            </Grid>
          </Box>
          <Box mt={5} mb={5} textAlign="center">
            <TopCategories />
          </Box>
          <Box mt={5} mb={5}>
            <Grid container spacing={2} className={`${styles.benefits_grid} `}>
              <Grid item xs={12} md={6}>
                <Image
                  placeholder="blur"
                  src="/images/add_business.png"
                  width={400}
                  height={350}
                  alt="Add a business"
                  priority
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h2">Want to add your business?</Typography>
                <Typography variant="body1">
                  You can do so for <u>FREE!</u> Simply click the 'JOIN' button
                  to register, and follow the instructions to add your business
                  to our directory. Once complete, you can begin to field
                  requests through your preferred means of communication.
                </Typography>
                <br></br>
                <Link href="/my-business">
                  <a>
                    <Button variant="contained" color="secondary">
                      Add your Business
                    </Button>
                  </a>
                </Link>
              </Grid>
            </Grid>
          </Box>

          <DynamicShopifyCollection />
          <Box mb={5}>
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
                <Typography variant="body2" className={styles.subText}>
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
                  placeholder="blur"
                  src="/images/support_team.png"
                  alt="Become a sponsor"
                  width={400}
                  height={400}
                  priority
                />
              </Grid>
            </Grid>
          </Box>
        </div>
      </main>
    </>
  );
}
