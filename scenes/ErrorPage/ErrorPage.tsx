import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

import { PageWrapper } from "@/components/PageWrapper";
import { ButtonLink } from "@/styled/ButtonLink";

import styles from "./ErrorPage.module.scss";

const Header = dynamic(() => import("../../components/Header"));
const Footer = dynamic(() => import("../../components/Footer/Footer"));

const ErrorPage = () => {
  return (
    <>
      <Header />
      <PageWrapper center>
        <div className={styles.content}>
          <FontAwesomeIcon icon={faExclamation} className={styles.errorIcon} />
          <h1>500</h1>
          <h2>Something went wrong</h2>

          <p>
            But don't worry, we've been notified, and will work on it ASAP!{" "}
            <br /> In the meantime, please checkout our other pages:
          </p>

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

export default ErrorPage;
