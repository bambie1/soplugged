import { InlineWidget } from "react-calendly";

const OurProcess = () => {
  return (
    <div id="book-consult" className="my-container text-center">
      <p className="font-light tracking-widest">OUR PROCESS</p>

      <h2 className="text-3xl font-semibold lg:text-4xl">
        It all starts with a consult
      </h2>

      <InlineWidget
        url="https://calendly.com/soplugged/consultation?hide_gdpr_banner=1"
        styles={{ height: "1200px", marginBottom: "-5rem" }}
      />
    </div>
  );
};

export default OurProcess;
