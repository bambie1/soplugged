import type { NextPage } from "next";
import { useState } from "react";
import toast from "react-hot-toast";

import ImageUpload from "@/components/ImageUpload";
import SEO from "@/src/components/SEO";
import PageWrapper from "@/src/layouts/PageWrapper";
import { Button } from "@/styled/Button";
import { Input } from "@/styled/Input";
import TextArea from "@/styled/TextArea";

const Join: NextPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessWebsite, setBusinessWebsite] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [businessImages, setBusinessImages] = useState("");

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
          businessDescription,
          businessImages,
        }),
      });

      setUserEmail("");
      setName("");
      setBusinessName("");
      setBusinessWebsite("");
      setBusinessDescription("");
      setBusinessImages("");

      toast.success(
        "Thanks for joining! You'll receive an email from us soon",
        {
          position: "top-center",
        }
      );
    } catch (error) {
      console.error(error);
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
            label="Business Url"
            autoComplete="off"
            name="website"
            value={businessWebsite}
            onChange={(e) => setBusinessWebsite(e.target.value)}
            helperText="Website or social media link"
          />
          <TextArea
            label="Business Description"
            name="description"
            value={businessDescription}
            onChange={(e) => setBusinessDescription(e.target.value)}
            placeholder="Tell us about your business briefly"
            required
          />

          <div className="grid gap-2 text-left">
            <span className="text-sm font-semibold uppercase">
              Image showcase
            </span>

            <ImageUpload
              images={businessImages}
              setImages={setBusinessImages}
            />
          </div>
          <Button isForm>Join</Button>
        </form>
      </PageWrapper>
    </>
  );
};

export default Join;
