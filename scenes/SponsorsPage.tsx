import Link from "next/link";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header/Header"));
const Footer = dynamic(() => import("../components/Footer/Footer"));

const SponsorsPage = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="relative flex h-screen snap-start">
        <div className="my-container flex flex-1">
          <div className="flex-1 flex-col justify-center pt-16 pb-10 lg:flex lg:max-w-[60%] lg:items-start">
            <div className="my-4 flex bg-gray-400/20 lg:hidden">
              <iframe
                src="https://kweeve.page/soplugged/embed"
                style={{ border: "none", flex: "1" }}
                width="100%"
                height="575px"
                allow="payment"
              ></iframe>
            </div>

            <h1 className="mb-6 text-4xl font-bold lg:text-6xl">Sponsors</h1>
            <p className="w-[90%] lg:text-lg">
              At SoPlugged, our biggest inspiration is supporting one another
              and growing our community. Our goal is to normalize buying black
              and we rely on amazing people like you to keep our platform free
              and accessible to Black-owned businesses across Canada.
            </p>

            <p className="mt-3 w-[80%] italic">
              All donations go towards maintaining our platform and supporting
              Black-owned businesses across Canada.
            </p>
          </div>
        </div>
        <aside className="absolute top-0 right-0 hidden h-full w-[40%] bg-gradient-to-t from-secondary to-white lg:flex">
          <div className="relative flex flex-1 items-center justify-center overflow-hidden px-10 pt-24 pb-10">
            <div className="h-[30rem] overflow-auto bg-gray-400/20">
              <iframe
                src="https://kweeve.page/soplugged/embed"
                style={{ border: "none" }}
                width="100%"
                height="700px"
                allow="payment"
              ></iframe>
            </div>
          </div>
        </aside>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default SponsorsPage;
