import {
  Container,
  Typography,
  Button,
  makeStyles,
} from "@material/mui-components";
import Link from "next/link";
import SEO from "@components/SEO";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    margin: "32px 0px",
  },
  faqSection: {
    margin: "32px 0px",
    "& > *": {
      margin: "8px 0px",
      lineHeight: "2",
    },
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "underline",
  },
}));

const FAQs = () => {
  const classes = useStyles();

  return (
    <>
      <SEO
        title="Frequently Asked Questions | SoPlugged"
        description="The SoPlugged team has answers ready for questions you might have. If we missed anything, please send us an email"
      />
      <main className="page">
        <Container maxWidth="lg">
          <Typography variant="h1" className={classes.title}>
            FAQs
          </Typography>
          <br></br>
          <section className={classes.faqSection}>
            <Typography
              variant="h6"
              component="h2"
              className={classes.faqSectionHeader}
            >
              What services can I find here?
            </Typography>
            <Typography className={classes.faqSectionContent}>
              We created this platform to connect you to black-owned businesses
              across Canada. While we are still a growing community, you can
              browse our directory to see the services currently featured on our
              platform. Make sure to subscribe to our newsletters to be notified
              when we have new services featured on our website!
            </Typography>
            <Link href="/search">
              <a>
                <Button color="secondary" variant="outlined">
                  Browse Businesses
                </Button>
              </a>
            </Link>
          </section>
          <section className={classes.faqSection}>
            <Typography
              variant="h6"
              component="h2"
              className={classes.faqSectionHeader}
            >
              How do I register?
            </Typography>
            <Typography className={classes.faqSectionContent}>
              Registering your business is free, quick and easy. Please click
              the button below to get started (you'll need to be signed in to
              add a business). If you encounter any issues or have any
              questions, feel free to reach out to a member of our team, we
              would love to have your services featured on our platform.
            </Typography>
            <Link href="/my-business">
              <a>
                <Button color="secondary" variant="outlined">
                  Register
                </Button>
              </a>
            </Link>
          </section>
          <section className={classes.faqSection}>
            <Typography
              variant="h6"
              component="h2"
              className={classes.faqSectionHeader}
            >
              How can I update my business page?
            </Typography>
            <Typography className={classes.faqSectionContent}>
              Click the button below to update your business page, you will be
              sent an authentication link to the registered email address and
              you will be able to make changes. If you encounter any issues or
              have any questions, feel free to{" "}
              <a href="mailto:hello@soplugged.com" className={classes.link}>
                reach out to a member of our team
              </a>
              .
            </Typography>
            <Link href="/my-business">
              <a>
                <Button color="secondary" variant="outlined">
                  Edit my business
                </Button>
              </a>
            </Link>
          </section>
          <section
            className={classes.faqSection}
            style={{ marginBottom: "12vh" }}
          >
            <Typography
              variant="h6"
              component="h2"
              className={classes.faqSectionHeader}
            >
              How do I pay for services?
            </Typography>
            <Typography className={classes.faqSectionContent}>
              Businesses have their preferred methods of processing payments as
              well as different payment schedules. We recommend getting in touch
              with the business to find out their preference.
            </Typography>
          </section>
        </Container>
      </main>
    </>
  );
};

export default FAQs;
