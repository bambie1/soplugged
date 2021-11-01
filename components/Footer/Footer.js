import { Container, Grid, Button, IconButton } from "@material/mui-components";
import { InstagramIcon, LinkedInIcon } from "@material/mui-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Footer.module.scss";
import SubscribeForm from "../SubscribeForm/SubscribeForm";

const Footer = () => {
  const router = useRouter();

  const hideFooter =
    router.pathname.startsWith("/join") ||
    router.pathname.startsWith("/dashboard");

  const isProPage = router.pathname === "/pro-test";

  return hideFooter ? (
    <></>
  ) : (
    <footer className={`${styles.footer} ${isProPage && styles.pro}`}>
      <div className={styles.shape_divider_container}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shape_fill}
          ></path>
        </svg>
      </div>
      <section className={styles.proSection}>
        Psst..! SoPluggedPRO is on its way.
        <Link href="/pro" passHref>
          <Button variant="text" color="secondary">
            <u>
              <b>Join the waitlist to be notified</b>
            </u>
          </Button>
        </Link>
      </section>
      <SubscribeForm />
      <Container className={styles.footer_container}>
        <Grid container>
          <Grid item xs={12} sm={6} className={styles.grid}>
            <Button color="secondary" href="mailto:hello@soplugged.com">
              hello@soplugged.com
            </Button>
            <div className={styles.socialMedia}>
              <span>Follow Us:</span>
              <IconButton
                aria-label="instagram"
                href="https://www.instagram.com/sopluggd/"
                target="_blank"
                rel="noopener"
              >
                <InstagramIcon />
              </IconButton>

              <IconButton
                aria-label="linkedin"
                href="https://www.linkedin.com/company/soplugged/"
                target="_blank"
                rel="noopener"
              >
                <LinkedInIcon />
              </IconButton>
            </div>

            <Button
              variant="outlined"
              color="secondary"
              href="https://soplugged.kampsite.co/"
              target="_blank"
              rel="noopener"
              style={{ display: "block" }}
            >
              Make a feature request
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} className={styles.footer_links_div}>
            <Link href="/faqs" passHref>
              <Button color="secondary" variant="text">
                FAQs
              </Button>
            </Link>

            <Button
              href="https://soplugged.medium.com/"
              target="_blank"
              rel="noopener"
              color="secondary"
              variant="text"
            >
              BLOG
            </Button>

            <Link href="/our-story" passHref>
              <Button color="secondary" variant="text">
                ABOUT US
              </Button>
            </Link>

            <Link href="/sponsors" passHref>
              <Button variant="outlined" color="secondary">
                Sponsors
              </Button>
            </Link>
          </Grid>
        </Grid>
        <p>Copyright&copy; {new Date().getFullYear()}, SoPlugged</p>
        <Button
          href="https://docs.google.com/document/d/1lq7Be0U3GTswo3kCZ2tHvZ20J_eJbqhQX3XiKAjih20/edit?usp=sharing"
          target="_blank"
          rel="noopener"
          color="secondary"
          variant="text"
        >
          Privacy Policy
        </Button>

        <Button
          href="https://docs.google.com/document/d/1l5OVYw8_WuVmhQDXkXdB7zBRYiLVhJ-lrGERdMQXlcc/edit?usp=sharing"
          target="_blank"
          rel="noopener"
          color="secondary"
          variant="text"
        >
          Community Guidelines
        </Button>
      </Container>
    </footer>
  );
};

export default Footer;
