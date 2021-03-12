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
              <a href="https://www.instagram.com/sopluggd/" target="_blank">
                <IconButton aria-label="instagram" edge="start">
                  <InstagramIcon />
                </IconButton>
              </a>
              <a
                href="https://www.linkedin.com/company/soplugged/"
                target="_blank"
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
            <Link href="/faqs" target="_blank">
              <a>
                <Button>FAQs</Button>
              </a>
            </Link>

            <Link href="/blog" target="_blank">
              <a>
                <Button>BLOG</Button>
              </a>
            </Link>
            <Link href="/our-story" target="_blank">
              <a>
                <Button>ABOUT US</Button>
              </a>
            </Link>
            <Link href="/sponsors">
              <a>
                <Button variant="outlined" color="secondary">
                  Sponsors
                </Button>
              </a>
            </Link>
            {/* <Link href="/privacy-policy" target="_blank">
              <a>
                <Button>PRIVACY & TERMS</Button>
              </a>
            </Link> */}
          </Grid>
        </Grid>
        <br></br>
        <br></br>
        <Typography variant="body2">
          Copyright&copy; {new Date().getFullYear()}, SoPlugged
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
