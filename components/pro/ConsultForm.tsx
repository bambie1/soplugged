import { Input } from "@/styled/Input";
import TextArea from "@/styled/TextArea/TextArea";
import { useState } from "react";
import toast from "react-hot-toast";

const ConsultForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const data = { name, email, businessName, service, description };

    try {
      const res = await fetch("/api/consult-form", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();
      toast.success("We've received your request, and will be in touch!");
    } catch (error) {
      console.log({ error });
      toast.error("Something went wrong");
    }

    // console.log(e.target.businessName.value);
  };

  return (
    <div
      id="book-consult"
      className="relative flex scroll-mt-20 bg-gradient-to-b from-white via-accent/20 to-white"
    >
      <div className="my-container flex w-full flex-col justify-center">
        <h2 className="mb-6 text-center text-4xl font-bold lg:mb-10 lg:text-5xl">
          Get started <span className="text-accent-dark">for FREE</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full max-w-[600px] lg:max-w-3xl"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <Input
              autoComplete="off"
              label="Full name"
              name="fullName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              autoComplete="off"
              label="E-mail address"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              autoComplete="off"
              label="Name of business"
              name="businessName"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
            />
            <Input
              autoComplete="off"
              label="Please select the service(s) you need"
              name="services"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            />
            <div className="lg:col-span-2">
              <TextArea
                label="Project description"
                rows={10}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </div>

          <button className="mt-10 inline-flex rounded-md bg-black px-4 py-3 text-white">
            Book a FREE consultation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultForm;
