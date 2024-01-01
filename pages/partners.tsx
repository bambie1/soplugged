import { useState } from "react";
import toast from "react-hot-toast";

import SEO from "@/src/components/SEO";
import PageWrapper from "@/src/layouts/PageWrapper";
import { Button } from "@/styled/Button";
import { Input } from "@/styled/Input";

const Partners = () => {
  const [userEmail, setUserEmail] = useState("");
  const [name, setName] = useState("");
  const [packageOption, setPackageOption] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch("/api/join", {
        method: "POST",
        body: JSON.stringify({
          userEmail,
          name,
          businessName: "Partner",
          businessWebsite: packageOption,
        }),
      });

      setUserEmail("");
      setName("");
      setPackageOption("");

      toast.success(
        "Thanks for sponsorship interest! You'll receive an email from us soon",
        {
          position: "top-center",
        }
      );
    } catch (error) {
      toast.error("An error occurred", {
        position: "top-center",
      });
    }
  };

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
        <form
          className="mt-8 grid w-full max-w-2xl flex-col gap-4 lg:flex"
          onSubmit={handleSubmit}
        >
          <Input
            label="Email address"
            autoComplete="off"
            required
            name="email"
            placeholder="your@email.com"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <Input label="Full name" autoComplete="off" required name="name" />
          <Input
            label="How do you want to sponsor SoPlugged?"
            autoComplete="off"
            name="package"
            value={packageOption}
            onChange={(e) => setPackageOption(e.target.value)}
          />
          <Button isForm>Submit</Button>
        </form>
      </PageWrapper>
    </>
  );
};

export default Partners;
