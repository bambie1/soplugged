import { InlineWidget } from "react-calendly";

const ConsultForm = () => {
  return (
    <div
      id="book-consult"
      className="relative flex scroll-mt-20 bg-gradient-to-b from-white via-accent/20 to-white"
    >
      <div className="my-container flex w-full flex-col justify-center">
        <h2 className="mb-3 text-center text-4xl font-bold lg:text-5xl">
          Get started <span className="text-accent-dark">for FREE</span>
        </h2>

        <InlineWidget
          url="https://calendly.com/soplugged/consultation"
          styles={{ height: "1200px", marginBottom: "-10rem" }}
        />
      </div>
    </div>
  );
};

export default ConsultForm;
