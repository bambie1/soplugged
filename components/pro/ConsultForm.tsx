import { Input } from "@/styled/Input";
import TextArea from "@/styled/TextArea/TextArea";

const ConsultForm = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    // console.log(e.target.businessName.value);
  };

  return (
    <div id="book-consult" className="relative flex snap-start">
      <div className="my-container flex w-full flex-col justify-center">
        <h2 className="mb-6 text-center text-4xl font-bold lg:mb-10 lg:text-5xl">
          Get started <span className="text-accent-dark">for FREE</span>
        </h2>

        <form onSubmit={handleSubmit} className="mx-auto w-full max-w-3xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <Input label="Full name" name="fullName" />
            <Input label="E-mail address" name="email" type="email" />
            <Input label="Name of business" name="businessName" />
            <Input
              label="Please select the service(s) you need"
              name="services"
            />
            <div className="lg:col-span-2">
              <TextArea label="Project description" />
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
