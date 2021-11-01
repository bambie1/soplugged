import { Container, Button, makeStyles } from "@material/mui-components";
import Link from "next/link";
import { SEO } from "@components/index";

const useStyles = makeStyles((theme) => ({
  faqSection: {
    margin: "2rem 0 3rem",

    "& > h2": {
      fontSize: "1.25rem",
    },
  },
  link: {
    color: theme.palette.secondary.main,
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
      <main className="page" style={{ paddingTop: "16px" }}>
        <Container maxWidth="lg">
          <h1 className="center">FAQs</h1>
          <section className={classes.faqSection}>
            <h2>What services can I find here?</h2>
            <p>
              We created this platform to connect you to black-owned businesses
              across Canada. While we are still a growing community, you can
              browse our directory to see the services currently featured on our
              platform. Make sure to subscribe to our newsletters to be notified
              when we have new services featured on our website!
            </p>
            <Link href="/search" passHref>
              <Button color="secondary" variant="outlined">
                Browse Businesses
              </Button>
            </Link>
          </section>
          <section className={classes.faqSection}>
            <h2>How do I register?</h2>
            <p>
              Registering your business is free, quick and easy. Please click
              the button below to get started (you'll need to be signed in to
              add a business). If you encounter any issues or have any
              questions, feel free to reach out to a member of our team, we
              would love to have your services featured on our platform.
            </p>
            <Link href="/my-business" passHref>
              <Button color="secondary" variant="outlined">
                Register
              </Button>
            </Link>
          </section>
          <section className={classes.faqSection}>
            <h2>How can I update my business page?</h2>
            <p>
              Click the button below to update your business page, you will be
              sent an authentication link to the registered email address and
              you will be able to make changes. If you encounter any issues or
              have any questions, feel free to{" "}
              <a href="mailto:hello@soplugged.com" className={classes.link}>
                reach out to a member of our team
              </a>
              .
            </p>
            <Link href="/my-business" passHref>
              <Button color="secondary" variant="outlined">
                Edit my business
              </Button>
            </Link>
          </section>
          <section
            className={classes.faqSection}
            style={{ marginBottom: "12vh" }}
          >
            <h2>How do I pay for services?</h2>
            <p>
              Businesses have their preferred methods of processing payments as
              well as different payment schedules. We recommend getting in touch
              with the business to find out their preference.
            </p>
          </section>
        </Container>
      </main>
    </>
  );
};

export default FAQs;
