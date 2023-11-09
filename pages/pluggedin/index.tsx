import { useState } from "react";
import toast from "react-hot-toast";

import { Input } from "@/styled/Input";
import { Button } from "@/styled/Button";
import SEO from "@/src/components/SEO";
import PageWrapper from "@/src/layouts/PageWrapper";
import { ButtonLink } from "@/styled/ButtonLink";

const PluggedInWaitlist = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email, first_name: "", last_name: "" }),
    });

    toast.success("Successfully subscribed!", {
      position: "top-center",
    });

    setEmail("");
  };

  return (
    <>
      <SEO
        title="Newsletter | SoPlugged"
        description="Business tips, resources, and grants specifically available to Black entrepreneurs, delivered to your inbox every month!"
      />

      <PageWrapper
        title="Pre-Register for PluggedIn"
        subTitle="PluggedIn 2024 is here! Pre-register and get a 10% off on your ticket!"
        center
      >
        <form
          onSubmit={handleSubscribe}
          className="mt-8 mb-14 grid w-full max-w-lg flex-col lg:flex"
        >
          <Input
            label="Email address"
            autoComplete="off"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button>Join the waitlist</Button>
        </form>

        <ButtonLink href="/pluggedin/2023">
          Check out our 2023 event to learn more
        </ButtonLink>
      </PageWrapper>
    </>
  );
};

export default PluggedInWaitlist;
