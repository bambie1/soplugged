import {
  Typography,
  Container,
  Grid,
  Button,
  IconButton,
} from "@material/mui-components";
import { InstagramIcon, LinkedInIcon } from "@material/mui-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Footer.module.scss";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  const router = useRouter();

  const hideFooter =
    router.pathname.startsWith("/join") ||
    router.pathname.startsWith("/dashboard");

  return hideFooter ? (
    <></>
  ) : (
    <footer className={styles.footer}>
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
      <SubscribeForm />
      <Container className={styles.footer_container}>
        <Grid container>
          <Grid item xs={12} sm={6} className={styles.grid}>
            <a href="mailto:hello@soplugged.com">
              <Typography>hello@soplugged.com</Typography>
            </a>
            <Typography style={{ paddingTop: "8px" }}>Follow Us:</Typography>
            <div className="social-media">
              <a
                href="https://www.instagram.com/sopluggd/"
                target="_blank"
                rel="noopener"
              >
                <IconButton aria-label="instagram" edge="start">
                  <InstagramIcon />
                </IconButton>
              </a>
              <a
                href="https://www.linkedin.com/company/soplugged/"
                target="_blank"
                rel="noopener"
              >
                <IconButton aria-label="linkedin">
                  <LinkedInIcon />
                </IconButton>
              </a>
            </div>

            <a
              href="https://soplugged.kampsite.co/"
              target="_blank"
              rel="noopener"
              style={{ display: "block" }}
            >
              <Button variant="outlined" color="secondary">
                Make a feature request
              </Button>
            </a>
          </Grid>

          <Grid item xs={12} sm={6} className={styles.footer_links_div}>
            <div>
              <Link href="/faqs">
                <a>
                  <Button>FAQs</Button>
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://soplugged.medium.com/">
                <a target="_blank" rel="noopener">
                  <Button>BLOG</Button>
                </a>
              </Link>
            </div>

            <div>
              <Link href="/our-story">
                <a>
                  <Button>ABOUT US</Button>
                </a>
              </Link>
            </div>

            <div>
              <Link href="/sponsors">
                <a>
                  <Button variant="outlined" color="secondary">
                    Sponsors
                  </Button>
                </a>
              </Link>
            </div>
          </Grid>
        </Grid>
        <br></br>
        <br></br>
        <Typography variant="body2">
          Copyright&copy; {new Date().getFullYear()}, SoPlugged
        </Typography>
        <a
          href="https://docs.google.com/document/d/1lq7Be0U3GTswo3kCZ2tHvZ20J_eJbqhQX3XiKAjih20/edit?usp=sharing"
          target="_blank"
          rel="noopener"
        >
          <Button>Privacy Policy</Button>
        </a>
        <a
          href="https://docs.google.com/document/d/1l5OVYw8_WuVmhQDXkXdB7zBRYiLVhJ-lrGERdMQXlcc/edit?usp=sharing"
          target="_blank"
          rel="noopener"
        >
          <Button>Community Guidelines</Button>
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
