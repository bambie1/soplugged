import type { NextPage } from "next";
import Image from "next/legacy/image";
import { useState } from "react";
import toast from "react-hot-toast";

import SEO from "@/src/components/SEO";
import PageWrapper from "@/src/layouts/PageWrapper";
import { Button } from "@/styled/Button";
import { Input } from "@/styled/Input";

const Newsletter: NextPage = () => {
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
        title="Stay Plugged In!"
        subTitle="Business tips, resources, and grants specifically available to
              Black entrepreneurs, delivered to your inbox every month!"
        center
      >
        <form
          onSubmit={handleSubscribe}
          className="mt-8 grid w-full max-w-lg flex-col lg:flex"
        >
          <Input
            label="Email address"
            autoComplete="off"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button>Subscribe</Button>
        </form>
      </PageWrapper>
    </>
  );
};

export default Newsletter;
