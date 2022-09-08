import { getCsrfToken, signIn } from "next-auth/react";
import Link from "next/link";

import Header from "../Header/Header";

export default function AccessDenied() {
  return (
    <>
      <Header />
      <main className="my-container mb-20 pt-10 text-center">
        <h1 className="text-4xl font-bold lg:text-5xl">
          Please sign in to continue
        </h1>
        <button onClick={() => signIn()}>Sign in with google</button>

        <form method="post" action="/api/auth/signin/email">
          <input name="csrfToken" type="hidden" />
          <label>
            Email address
            <input type="email" id="email" name="email" />
          </label>
          <button type="submit">Sign in with Email</button>
        </form>
      </main>
    </>
  );
}
