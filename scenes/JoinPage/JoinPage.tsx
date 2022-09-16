import { FC, useState } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

import { PageWrapper } from "@/components/PageWrapper";
import { ArrowButton } from "@/styled/ArrowButton";
import { Button } from "@/styled/Button";
import { Input } from "@/styled/Input";

interface Props {
  stage?: "verify";
  csrfToken?: any;
}

const expectedErrors: any = {
  OAuthSignin: "Error in constructing an authorization URL (1, 2, 3)",
  OAuthCallback:
    "Error in handling the response (1, 2, 3) from an OAuth provider.",
  OAuthCreateAccount: "Could not create OAuth provider user in the database.",
  EmailCreateAccount: "Could not create email provider user in the database.",
  Callback: "Error in the OAuth callback handler route",
  OAuthAccountNotLinked: "Please sign in via e-mail",
  EmailSignin: "Sending the e-mail with the verification token failed",
};

const JoinPage: FC<Props> = ({ csrfToken, stage }) => {
  const { query, push } = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const { data: session, status } = useSession();

  if (session?.user?.email) {
    push("/dashboard");
  }

  const renderEmailSignIn = () => {
    if (stage === "verify") return <div>Check your inbox</div>;

    return (
      <form
        method="post"
        action="/api/auth/signin/email"
        className="flex flex-col gap-4"
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <Input
          label="Email address"
          type="email"
          id="email"
          name="email"
          noHelper
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <Button type="submit" disabled={!userEmail}>
          Sign in with Email
        </Button>
      </form>
    );
  };

  return (
    <>
      <PageWrapper center>
        <h1 className="mb-6 text-5xl font-bold text-primary sm:text-6xl">
          Join SoPlugged
        </h1>
        <p>
          Please verify your identity via one of the following sign-in methods:
        </p>
        <div className="mt-6 mb-20 w-full max-w-lg">
          {query.error && (
            <p className="inline-flex text-red-500 underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>

              {expectedErrors[query.error as string] || "An error occurred"}
            </p>
          )}

          <button
            onClick={() => signIn("google")}
            className="mt-4 w-full rounded-md border bg-white px-6 py-3 font-semibold text-gray-900 shadow outline-none hover:border-primary hover:bg-secondary/10 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3 inline h-4 w-4 fill-current text-gray-900"
              viewBox="0 0 48 48"
              width="48px"
              height="48px"
            >
              <path
                fill="#fbc02d"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#e53935"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4caf50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1565c0"
                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Sign in with Google
          </button>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-2 text-gray-700">
                Or continue with
              </span>
            </div>
          </div>

          {renderEmailSignIn()}
        </div>
        <ArrowButton href="/search">I'm just browsing</ArrowButton>
      </PageWrapper>
    </>
  );
};

export default JoinPage;
