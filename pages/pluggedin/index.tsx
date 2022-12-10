import { PageWrapper } from "@/components/PageWrapper";
import { SEO } from "@/components/SEO";

const PluggedInHomePage = () => {
  return (
    <>
      <SEO
        title="Plugged In Conference | SoPlugged"
        description="Network with fellow business-owners, share ideas and learn how to manage your finances as a business owner"
      />

      <PageWrapper>
        <div className="my-container relative text-center">
          <div className="absolute inset-0 -z-10 bg-radial-pluggedin"></div>
          <p>SoPlugged's 2nd anniversary!</p>
          <h1 className="mb-4 text-5xl font-extrabold sm:text-6xl lg:text-7xl">
            <span className="pluggedIn relative">
              <span className="outlinedText absolute top-[6px] left-[2px] -z-10 md:top-2 md:left-1 lg:left-[3px] lg:top-[10px]">
                PluggedIn
              </span>
              PluggedIn
            </span>{" "}
            <span className="conference outlinedText">Conference</span>
          </h1>
          <p className="mx-auto mb-4 max-w-3xl font-light lg:text-xl">
            Simply the place to be as an entrepreneur in Canada! Network with
            fellow business-owners, share ideas and learn how to manage your
            finances as a business owner
          </p>
          <p className="mb-4">@ The BedRock, Toronto</p>

          <button className="neuButton">
            Get your tickets
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </PageWrapper>
    </>
  );
};

export default PluggedInHomePage;
