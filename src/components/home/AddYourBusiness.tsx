import { ButtonLink } from "@/styled/ButtonLink";

const AddYourBusiness = () => {
  return (
    <div className="my-container">
      <div
        className={`w-full gap-10 rounded-lg bg-gradient-to-tr from-accent/50 to-secondary/50 px-4 py-6 shadow backdrop-blur-[1px] md:p-10 lg:grid-cols-5 lg:text-center xl:p-32`}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold xl:text-4xl">
            Add your business to our directory{" "}
            <span className="font-bold text-primary/80 underline">
              for FREE
            </span>
          </h2>
          <p className="opacity-90 lg:text-lg">
            Are you a Black-owned business owner in Canada looking to expand
            your reach and connect with new customers? Look no further than
            Soplugged!
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:mt-12 lg:justify-center">
            <ButtonLink href="/search/all" variant="outlined">
              Add your business
            </ButtonLink>
            <ButtonLink href="/search/all" showArrow>
              Learn more
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddYourBusiness;
