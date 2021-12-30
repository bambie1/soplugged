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
          <h2>Is SoPlugged free?</h2>
          <p>
            Yes, SoPlugged is free to use and register (if you’re a black-owned
            business in Canada). We rely on our amazing sponsors to keep our
            platform free and accessible to Black-owned businesses across
            Canada.
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
          <h2>What is SoPluggedPro about?</h2>
          <p>
            ​​Professional help to launch and improve your digital presence as a
            small to medium-sized business
          </p>
          <ButtonLink variant="outlined" href="/pro">
            Visit SoPluggedPRO
          </ButtonLink>
        </section>
        <section className={styles.faqSection}>
          <h2>What’s the difference between SoPlugged and SoPluggedPro?</h2>
          <p>
            SoPlugged is a FREE directory of Black-owned businesses across
            Canada. SoPluggedPro is professional help for your business’ digital
            needs
          </p>
          <ButtonLink variant="outlined" href="/pro">
            Visit SoPluggedPRO
          </ButtonLink>
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default FAQPage;
