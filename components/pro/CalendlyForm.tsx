import dynamic from "next/dynamic";

const InlineWidget = dynamic<any>(() =>
  import("react-calendly").then((mod) => mod.InlineWidget)
);

const CalendlyForm = () => {
  return (
    <div>
      <div
        id="book-consult"
        className="my-container flex scroll-mt-20 flex-col overflow-hidden text-center"
      >
        <p className="font-light tracking-widest">LET'S TALK</p>

        <h2 className="mb-2 text-3xl font-semibold lg:text-4xl">
          It all starts with a consult
        </h2>
        <p className="mb-10 md:mb-0">
          Use the Calendly form below to book a free consult with our team.
        </p>
      </div>

      <div className="w-full overflow-hidden border border-black sm:rounded-lg md:rounded-none md:border-none">
        <InlineWidget url="https://calendly.com/soplugged/consultation?hide_gdpr_banner=1" />
      </div>
    </div>
  );
};

export default CalendlyForm;
