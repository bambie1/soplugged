import { FC } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

import { PageWrapper } from "@/components/PageWrapper";
import { ButtonLink } from "@/styled/ButtonLink";

const JoinPage: FC = ({ csrfToken }: any) => {
  const { query } = useRouter();

  return (
    <>
      <PageWrapper center>
        <h1 className="relative mb-2 block text-center text-5xl font-bold text-primary">
          Join SoPlugged
        </h1>
        <p>
          Please verify your identity via one of the following sign-in methods:
        </p>
        <div className="">
          <button onClick={() => signIn("google")}>Sign in with google</button>

          <form method="post" action="/api/auth/signin/email">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label>
              Email address
              <input type="email" id="email" name="email" />
            </label>
            <button type="submit">Sign in with Email</button>
          </form>
        </div>
        {query.error && <p>An error occurred: {query.error}</p>}
        <ButtonLink href="/search" variant="outlined">
          I'm just browsing
        </ButtonLink>
      </PageWrapper>
    </>
  );
};

export default JoinPage;
