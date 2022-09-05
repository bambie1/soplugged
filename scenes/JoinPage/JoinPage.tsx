import Image from "next/image";

import { PageWrapper } from "@/components/PageWrapper";
import { ButtonLink } from "@/styled/ButtonLink";

import styles from "./JoinPage.module.scss";
import { FC } from "react";

const JoinPage: FC = () => {
  return (
    <>
      <PageWrapper center>
        <div className={styles.logoCircle}>
          <Image
            src="/soplugged-logo.png"
            alt="SoPlugged Logo"
            width={60}
            height={60}
          />
        </div>
        <h1 className="relative mb-2 block text-center text-5xl font-bold text-primary">
          Join SoPlugged
        </h1>
        <p>
          Please verify your identity via one of the following sign-in methods:
        </p>
        <div className={styles.authDiv}>{/* auth placeholder */}</div>
        <ButtonLink href="/search" variant="outlined">
          I'm just browsing
        </ButtonLink>
      </PageWrapper>
    </>
  );
};

export default JoinPage;
