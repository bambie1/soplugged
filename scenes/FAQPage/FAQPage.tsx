import dynamic from "next/dynamic";

import { PageWrapper } from "@/components/PageWrapper";
import { ButtonLink } from "@/styled/ButtonLink";

import styles from "./FAQPage.module.scss";

const Header = dynamic(() => import("../../components/Header/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

const FAQPage = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <h1 className="center">FAQs</h1>
        <section className={styles.faqSection}>
          <h2>What services can I find here?</h2>
          <p>
            We created this platform to connect you to black-owned businesses
            across Canada. While we are still a growing community, you can
            browse our directory to see the services currently featured on our
            platform. Make sure to subscribe to our newsletters to be notified
            when we have new services featured on our website!
          </p>
          <ButtonLink variant="outlined" href="/search">
            Browse Businesses
          </ButtonLink>
        </section>

        <section className={styles.faqSection}>
          <h2>How do I add my business?</h2>
          <p>
            Adding your business is free, quick and easy. Please click the
            button below to get started (you'll need to be signed in to add a
            business). If you encounter any issues or have any questions, feel
            free to reach out to a member of our team, we would love to have
            your services featured on our platform.
          </p>
          <ButtonLink variant="outlined" href="/my-business">
            Add your business
          </ButtonLink>
        </section>
        <section className={styles.faqSection}>
          <h2>How can I update my business page?</h2>
          <p>
            Click the button below to update your business page, you will be
            sent an authentication link to the registered email address and you
            will be able to make changes. If you encounter any issues or have
            any questions, feel free to{" "}
            <a href="mailto:hello@soplugged.com" className={styles.link}>
              reach out to a member of our team
            </a>
            .
          </p>
          <ButtonLink variant="outlined" href="/my-business">
            Edit your business
          </ButtonLink>
        </section>
        <section className={styles.faqSection}>
          <h2>How do I pay for services?</h2>
          <p>
            Businesses have their preferred methods of processing payments as
            well as different payment schedules. We recommend getting in touch
            with the business to find out their preference.
          </p>
          <ButtonLink variant="outlined" href="/search">
            Browse Businesses
          </ButtonLink>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default FAQPage;
