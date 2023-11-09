import SEO from "@/src/components/SEO";
import PageWrapper from "@/src/layouts/PageWrapper";
import { Input } from "@/styled/Input";
import { Button } from "@/styled/Button";

const Partners = () => {
  return (
    <>
      <SEO
        description="Whether you have a need, provide solutions, or both, SoPlugged is for you"
        title="Partner with SoPlugged"
      />

      <PageWrapper
        title="Partner with us"
        subTitle="More than just a platform, we're a powerful ecosystem dedicated to lifting up black entrepreneurs across Canada"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <form className="mt-8 grid max-w-2xl flex-col gap-4 lg:flex">
            <Input
              label="Email address"
              autoComplete="off"
              required
              name="email"
              placeholder="your@email.com"
            />
            <Input label="Full name" autoComplete="off" required name="name" />
            <Input label="Sponsor packages" autoComplete="off" name="name" />
            <Button isForm>Submit</Button>
          </form>

          <div className="mt-10 hidden w-full justify-end lg:flex">
            <div className="aspect-square rounded-xl bg-white shadow-md"></div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Partners;
