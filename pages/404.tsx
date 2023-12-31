import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import SEO from "@/src/components/SEO";
import { ButtonLink } from "@/styled/ButtonLink";

const NotFound: NextPage = () => {
  return (
    <>
      <SEO
        title="Page not found | SoPlugged"
        description="We couldn't find this page you've requested"
      />
      <Header whiteBg />
      <main className="my-container mb-16 flex min-h-[70vh] flex-col items-center pt-24 text-center">
        <div className="grid gap-4 pt-12">
          <FontAwesomeIcon
            icon={faExclamation}
            className="justify-self-center !text-5xl text-gray-500"
          />
          <h1 className="text-4xl font-semibold text-gray-500">404</h1>
          <h2 className="text-2xl font-medium">Page not found</h2>

          <p>We suggest trying our most frequented pages:</p>

          <ButtonLink href="/directory" variant="outlined">
            Visit Directory
          </ButtonLink>
          <ButtonLink href="/" variant="text">
            Go back home
          </ButtonLink>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
