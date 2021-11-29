import Image from "next/image";

import { FirebaseAuth } from "@/components/FirebaseAuth";
import { PageWrapper } from "@/components/PageWrapper";
import { SEO } from "@/components/SEO";

import styles from "./JoinPage.module.scss";
import { ButtonLink } from "@/styled/ButtonLink";

const JoinPage = () => {
  return (
    <>
      <SEO
        description="Whether you have a need, provide solutions, or both, SoPlugged is for you"
        title="Join SoPlugged"
      />
      <PageWrapper center>
        <div className={styles.logoCircle}>
          <Image
            src="/soplugged-logo.png"
            alt="SoPlugged Logo"
            width={60}
            height={60}
          />
        </div>
        <h1 className="center">Join SoPlugged</h1>
        <p>
          Please verify your identity via one of the following sign-in methods:
        </p>
        <div className={styles.authDiv}>
          <FirebaseAuth />
        </div>
        <ButtonLink href="/search" variant="outlined">
          I'm just browsing
        </ButtonLink>
      </PageWrapper>
    </>
  );
};

export default JoinPage;
