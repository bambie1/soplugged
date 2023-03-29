import { ButtonLink } from "@/styled/ButtonLink";

const AddYourBusiness = () => {
  return (
    <div className="my-container">
      <div
        className={`grid min-h-[10rem] w-full gap-10 rounded-lg bg-gradient-to-tr from-accent/50 to-secondary/50 p-5 shadow backdrop-blur-[1px] md:h-auto md:p-10 lg:grid-cols-5 xl:p-20`}
      >
        <div className="lg:col-span-2">
          <h2 className="mb-4 w-3/4 text-2xl font-semibold xl:text-3xl">
            Add your business to our directory for FREE
          </h2>
          <p className="mb-8">
            Find a local Black-owned business near you. From restaurants,
            hairstylists and salons to tutoring, tech and healthcare services.
          </p>

          <ButtonLink href="/search/all" variant="outlined" showArrow>
            Add your business
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default AddYourBusiness;
