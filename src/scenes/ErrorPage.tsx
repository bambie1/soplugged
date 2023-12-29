import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

import PageWrapper from "@/src/layouts/PageWrapper";
import { ButtonLink } from "@/styled/ButtonLink";

const ErrorPage = () => {
  return (
    <>
      <PageWrapper center>
        <div className="grid gap-4 pt-12">
          <FontAwesomeIcon
            icon={faExclamation}
            className="justify-self-center !text-5xl text-gray-500"
          />
          <h1 text-gray-500>500</h1>
          <h2>Something went wrong</h2>

          <p>
            But don't worry, we've been notified, and will work on it ASAP!{" "}
            <br /> In the meantime, please checkout our other pages:
          </p>

          <ButtonLink href="/directory" variant="outlined">
            Visit Directory
          </ButtonLink>
          <ButtonLink href="/" variant="text">
            Go back home
          </ButtonLink>
        </div>
      </PageWrapper>
    </>
  );
};

export default ErrorPage;
