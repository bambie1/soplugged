import type { NextPage } from "next";
import { useState } from "react";
import toast from "react-hot-toast";

import SEO from "@/src/components/SEO";
import PageWrapper from "@/src/layouts/PageWrapper";
import { Input } from "@/styled/Input";
import { Button } from "@/styled/Button";

const Join: NextPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessWebsite, setBusinessWebsite] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch("/api/join", {
        method: "POST",
        body: JSON.stringify({
          userEmail,
          name,
          businessName,
          businessWebsite,
        }),
      });

      setUserEmail("");
      setName("");
      setBusinessName("");
      setBusinessWebsite("");

      toast.success(
        "Thanks for joining! You'll receive an email from us soon",
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
        description="Become a part of our community of Black entrepreneurs across Canada."
        title="Join SoPlugged"
      />

      <PageWrapper
        title="Join our Community"
        subTitle="Become a part of our community of Black entrepreneurs across Canada."
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
          <Input
            label="Full name"
            autoComplete="off"
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Business name"
            autoComplete="off"
            name="businessName"
            required
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
          <Input
            label="Business website"
            autoComplete="off"
            name="website"
            value={businessWebsite}
            onChange={(e) => setBusinessWebsite(e.target.value)}
          />
          <Button isForm>Join</Button>
        </form>
      </PageWrapper>
    </>
  );
};

export default Join;
