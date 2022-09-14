import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowButton } from "@/styled/ArrowButton";

const Header = dynamic(() => import("../components/Header/Header"));
const Footer = dynamic(() => import("../components/Footer/Footer"));

const SponsorsPage = () => {
  return (
    <>
      <Header />
      <div className="my-container grid items-center gap-10 pt-16 pb-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h1 className="mb-6 text-4xl font-bold lg:text-6xl">Sponsors</h1>
          <p className="w-[90%] lg:text-lg">
            At SoPlugged, our biggest inspiration is supporting one another and
            growing our community. Our goal is to normalize buying black and we
            rely on amazing people like you to keep our platform free and
            accessible to Black-owned businesses across Canada.
          </p>

          <p className="mt-3 mb-10 w-[80%] italic">
            All donations go towards maintaining our platform and supporting
            Black-owned businesses across Canada.
          </p>
          <ArrowButton href="/our-story">
            Read about the SoPlugged story
          </ArrowButton>
        </div>

        <aside className="col-span-2">
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
