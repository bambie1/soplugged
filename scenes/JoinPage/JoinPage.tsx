import Image from "next/image";
import { signIn } from "next-auth/react";

import { PageWrapper } from "@/components/PageWrapper";
import { ButtonLink } from "@/styled/ButtonLink";

import styles from "./JoinPage.module.scss";
import { FC } from "react";

const JoinPage: FC = ({ csrfToken }: any) => {
  const handleEmailSignIn = () => {
    signIn("email", { email: "benaiah.barango@fullscript.com" });
  };

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
        <div className={styles.authDiv}>
          <button onClick={() => signIn("google")}>Sign in with google</button>

          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <button onClick={handleEmailSignIn}>Sign in with Email</button>
          <label>
            Email address
            <input type="email" id="email" name="email" />
          </label>
        </div>
        <ButtonLink href="/search" variant="outlined">
          I'm just browsing
        </ButtonLink>
      </PageWrapper>
    </>
  );
};

export default JoinPage;
