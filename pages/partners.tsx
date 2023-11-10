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
        subTitle="Support our mission to empower Black entrepreneurs across Canada
        "
        center
      >
        <form className="mt-8 grid w-full max-w-2xl flex-col gap-4 lg:flex">
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
      </PageWrapper>
    </>
  );
};

export default Partners;
