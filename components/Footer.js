import {
  Typography,
  Container,
  Grid,
  Button,
  Divider,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import IconButton from "@material-ui/core/IconButton";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: "8px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className="footer">
      <Container className="footer-container">
        <Grid container>
          <Grid item xs={12} sm={6}>
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
            <Divider className={classes.divider} />
          </Grid>

          <Grid item xs={12} sm={6} className="footer-links-div">
            <div>
              <Link href="/faqs">
                <a>
                  <Button>FAQs</Button>
                </a>
              </Link>
            </div>

            <div>
              <Link href="/blog">
                <a>
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
      </Container>
    </footer>
  );
};

export default Footer;
