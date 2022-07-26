import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

import { PageWrapper } from "@/components/PageWrapper";
import { ButtonLink } from "@/styled/ButtonLink";

import styles from "./404Page.module.scss";

const Header = dynamic(() => import("../../components/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

const FAQPage = () => {
  return (
    <>
      <Header />
      <PageWrapper center>
        <div className={styles.content}>
          <FontAwesomeIcon icon={faExclamation} className={styles.errorIcon} />
          <h1>404</h1>
          <h2>Page not found</h2>

          <p>We suggest trying our most frequented pages:</p>

          <ButtonLink href="/search" variant="outlined">
            Visit Directory
          </ButtonLink>
          <ButtonLink href="/" variant="text">
            Go back home
          </ButtonLink>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default FAQPage;
