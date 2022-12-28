import dynamic from "next/dynamic";
import { ArrowButton } from "@/styled/ArrowButton";
import { ButtonLink } from "@/styled/ButtonLink";

const Header = dynamic(() => import("../components/Header/Header"));
const Footer = dynamic(() => import("../components/Footer"));

const SponsorsPage = () => {
  return (
    <>
      <Header />
      <div className="my-container flex flex-col items-center gap-10 py-10 lg:grid lg:grid-cols-5">
        <div className="prose-lg w-full lg:col-span-3">
          <h1 className="h1 mb-6">Sponsors</h1>
          <p>
            At SoPlugged, our biggest inspiration is supporting one another and
            growing our community. Our goal is to normalize buying black and we
            rely on amazing people like you to keep our platform free and
            accessible to Black-owned businesses across Canada.
          </p>

          <p className="mt-3 mb-10 italic">
            All donations go towards maintaining our platform and supporting
            Black-owned businesses across Canada.
          </p>
          <ButtonLink showArrow variant="outlined" href="/our-story">
            Read about our story
          </ButtonLink>
        </div>

        <aside className="col-span-2 mt-4">
          <div className="max-w-[400px] overflow-hidden rounded-lg border-2 border-primary shadow-2xl">
            <iframe
              src="https://kweeve.page/soplugged/embed"
              style={{ border: "none" }}
              width="100%"
              height="550px"
              allow="payment"
            ></iframe>
          </div>
        </aside>
      </div>

      <Footer />
    </>
  );
};

export default SponsorsPage;
