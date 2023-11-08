import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import ConferenceFAQs from "@/components/pluggedIn/ConferenceFAQs";
import Tickets from "@/components/pluggedIn/Tickets";
import SEO from "@/components/SEO";

const PluggedInHomePage = () => {
  return (
    <>
      <SEO
        title="PluggedIn 2024 | SoPlugged"
        description="Network with fellow business-owners, and learn how to manage your finances as a business owner at SoPlugged's 2nd anniversary"
        variant="pluggedin"
      />

      <Header />
      <div className="my-container mb-20 pt-12 text-center lg:pt-20">
        <div className="light-gradient relative mb-3 inline-flex  rounded-xl px-3 py-2">
          <img src="/tada.svg" alt="" className="absolute -left-4 top-1 h-7" />
          <p className="ml-1">SoPlugged's 2nd anniversary!</p>
        </div>
        <div className="relative">
          <h1 className="mb-4 text-5xl font-extrabold sm:text-6xl lg:text-8xl">
            <span className="pluggedIn relative">
              <span className="outlinedText absolute top-[6px] left-[2px] -z-10 md:top-2 md:left-1 lg:left-[3px] lg:top-[10px]">
                Plugged
              </span>
              Plugged
            </span>
            <span className="outlinedText conference ml-1">In</span>
          </h1>
          <p className="mx-auto mb-4 max-w-3xl font-light text-gray-600 lg:text-xl">
            Simply the place to be as an entrepreneur! Network with fellow
            Canadian business-owners, share ideas and learn how to manage your
            finances as a business owner.
          </p>
          <p className="mb-4">Toronto, ON, Canada</p>
        </div>

        <div className="mt-10" id="learn-more">
          <div className="flex justify-center gap-2">
            <p>FEBRUARY 18, 2024</p>
            <p>6:30PM</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PluggedInHomePage;
