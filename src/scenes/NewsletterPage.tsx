import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

import PageWrapper from "@/src/layouts/PageWrapper";
import { Input } from "@/styled/Input";
import { Button } from "@/styled/Button";

const NewsletterPage = () => {
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
    <PageWrapper>
      <div className="my-10 grid items-center gap-10 lg:my-28 lg:grid-cols-2">
        <section>
          <h1 className="mb-6 text-5xl font-semibold text-primary sm:text-6xl">
            Stay Plugged In!
          </h1>

          <p className="mb-2 text-lg font-semibold lg:text-xl">
            Subscribe to our monthly newsletter
          </p>
          <p className="text-gray-600">
            Entrepreneurial tips, Black-owned business highlights, and SoPlugged
            updates sent straight to your inbox every month!
          </p>

          <form
            onSubmit={handleSubscribe}
            className="mt-8 grid max-w-lg flex-col items-start lg:flex"
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
        </section>

        <div className="relative aspect-video w-full justify-self-center overflow-hidden rounded-2xl shadow-md shadow-secondary lg:row-start-auto lg:mx-auto lg:max-w-lg">
          <Image
            src="/nina_and_ben.jpeg"
            alt="Image of Nina and Benaiah"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default NewsletterPage;
