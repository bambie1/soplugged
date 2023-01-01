import Dialog from "@reach/dialog";
import { signIn } from "next-auth/react";

import { Button } from "@/styled/Button";
import { ButtonLink } from "@/styled/ButtonLink";

const SignInModal = () => {
  return (
    <Dialog
      aria-label="Authentication requirement to view dashboard"
      className="!w-[90%] max-w-lg rounded-lg"
    >
      <h1 className="mb-2 text-2xl font-bold text-primary">
        Please sign in first
      </h1>

      <p className="">
        Verify your identity via one of the following sign-in methods:
      </p>

      <div className="mt-6 mb-16 flex w-full max-w-lg flex-col gap-4">
        <button
          onClick={() => signIn("google")}
          className="mt-4 w-full rounded-md border bg-white px-6 py-3 text-lg font-medium text-gray-900 shadow outline-none hover:border-primary hover:bg-secondary/10 focus:outline-none"
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

        <Button onClick={() => signIn()} variant="outlined">
          Sign in with Email
        </Button>
      </div>

      <div className="flex flex-wrap justify-end gap-3">
        <ButtonLink variant="text" href="/search">
          Go back to directory
        </ButtonLink>
      </div>
    </Dialog>
  );
};

export default SignInModal;
