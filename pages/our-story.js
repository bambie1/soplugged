import { Container, Typography, Button } from "@material/mui-components";
import Link from "next/link";
import { SEO } from "@components/index";

import styles from "styles/OurStory.module.scss";

const OurStory = () => {
  return (
    <>
      <SEO
        title="Our Story | SoPlugged"
        description="SoPlugged is an online platform that makes #buyingblack easy! Our
              search-friendly platform helps end-users connect to Black-owned
              businesses across Canada"
      />
      <Container className={styles.container} maxWidth="md">
        <Typography variant="h1" align="center">
          our story
        </Typography>
        <Typography>
          SoPlugged is an online platform that makes #buyingblack easy! Our
          search-friendly platform helps end-users connect to Black-owned
          businesses across Canada. When you{" "}
          <a href="/my-business" className={styles.link}>
            register
          </a>{" "}
          your business on our platform, you increase your brand visibility and
          get access to a thriving community of people looking to support
          Black-owned businesses.<br></br> At SoPlugged, our biggest inspiration
          is supporting one another and growing our community. It’s always a
          beautiful thing to see people join the movement to support Black-owned
          businesses.<br></br> That’s our story and we hope you become a part of
          it!
        </Typography>
        <div className={styles.buttonDiv}>
          <Link href="/search" passHref>
            <Button color="secondary" variant="contained">
              Visit our directory
            </Button>
          </Link>
          <Link href="/sponsors" passHref>
            <Button color="secondary" variant="outlined">
              Become a Sponsor
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default OurStory;
