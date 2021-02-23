import { Typography, Container, Grid, Button } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import IconButton from "@material-ui/core/IconButton";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="footer-container">
        <Grid container>
          <Grid item xs={12} sm={6}>
            <a href="mailto:hello@soplugged.com">
              <Typography>hello@soplugged.com</Typography>
            </a>
            <Typography style={{ paddingTop: "8px" }}>Follow Us:</Typography>
            <div className="social-media">
              <IconButton aria-label="instagram" edge="start">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="linkedin">
                <LinkedInIcon />
              </IconButton>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} className="footer-links-div">
            <a href="https://www.soplugged.com/faqs" target="_blank">
              <Button>FAQs</Button>
            </a>

            <Link href="/blog" target="_blank">
              <a>
                <Button>BLOG</Button>
              </a>
            </Link>
            <a href="https://www.soplugged.com/our-story" target="_blank">
              <Button>ABOUT US</Button>
            </a>
            <a href="https://www.soplugged.com/privacy-policy" target="_blank">
              <Button>PRIVACY & TERMS</Button>
            </a>
          </Grid>
        </Grid>
        <br></br>
        <br></br>
        <Typography variant="body2">
          Copyright&copy; {new Date().getFullYear()}, SoPlugged
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
