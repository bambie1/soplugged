import { InlineWidget } from "react-calendly";
import { useWindowSize } from "@reach/window-size";

const ConsultForm = () => {
  const { width } = useWindowSize();

  return (
    <div
      id="book-consult"
      className="relative flex scroll-mt-20 bg-gradient-to-b from-white via-accent/20 to-white"
    >
      <div className="my-container flex w-full flex-col justify-center">
        <h2 className="mb-6 text-center text-4xl font-bold lg:mb-10 lg:text-5xl">
          Get started <span className="text-accent-dark">for FREE</span>
        </h2>

        <InlineWidget
          url="https://calendly.com/soplugged/consultation"
          styles={{ height: width < 768 ? "1200px" : "800px" }}
        />
      </div>
    </div>
  );
};

export default ConsultForm;
