import { InlineWidget } from "react-calendly";

const CalendlyForm = () => {
  return (
    <div
      id="book-consult"
      className="my-container flex scroll-mt-20 flex-col text-center"
    >
      <p className="font-light tracking-widest">LET'S TALK</p>

      <h2 className="mb-2 text-3xl font-semibold lg:text-4xl">
        It all starts with a consult
      </h2>
      <p className="mb-10 lg:mb-0">
        Use the Calendly form below to book a free consult with our team.
      </p>

      <InlineWidget url="https://calendly.com/soplugged/consultation?hide_gdpr_banner=1" />
    </div>
  );
};

export default CalendlyForm;
