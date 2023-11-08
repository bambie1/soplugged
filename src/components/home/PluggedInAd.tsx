import { ButtonLink } from "@/styled/ButtonLink";

const PluggedInAd = () => {
  return (
    <div className="my-container mt-10 lg:mt-0">
      <div className="pluggedInGradient relative mt-4 w-full gap-10 overflow-hidden rounded-lg py-16 px-8 text-center shadow backdrop-blur-[1px] md:p-10 lg:grid-cols-5 xl:py-24 xl:px-16">
        <h3 className="mb-4 text-5xl font-extrabold text-primary sm:text-6xl lg:text-7xl">
          PluggedIn
          <span className="outlinedText ml-1">2024</span>
        </h3>
        <p className="mx-auto max-w-2xl">
          Simply the place to be as an entrepreneur! Network with fellow
          business-owners, share ideas and learn how to manage your finances as
          a business owner.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <p>Toronto, ON</p>
          <span className="h-2 w-2 shrink-0 rounded-full bg-primary"></span>
          <p>February 16, 2024</p>
        </div>

        <ButtonLink href="/pluggedin" className="mt-10" variant="outlined">
          Join the waitlist
        </ButtonLink>
      </div>
    </div>
  );
};

export default PluggedInAd;
