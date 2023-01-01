import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

const Header = dynamic(() => import("../components/Header/Header"));
const Footer = dynamic(() => import("../components/Footer"));
const ButtonLink = dynamic(() => import("../styled/ButtonLink/ButtonLink"));

const FAQPage = () => {
  return (
    <>
      <Header />
      <main className="my-container mb-16 flex min-h-[70vh] flex-col items-center pt-24 text-center">
        <div className="grid gap-4 pt-12">
          <FontAwesomeIcon
            icon={faExclamation}
            className="justify-self-center !text-5xl text-gray-500"
          />
          <h1 className="text-4xl font-bold text-gray-500">404</h1>
          <h2 className="text-2xl font-medium">Page not found</h2>

          <p>We suggest trying our most frequented pages:</p>

          <ButtonLink href="/search" variant="outlined">
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

export default FAQPage;
