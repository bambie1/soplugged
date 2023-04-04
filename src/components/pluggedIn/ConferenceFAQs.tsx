const faqs = [
  {
    question: "What is the purpose of this event?",
    answer:
      "To celebrate our 2nd anniversary, we are providing a platform for black entrepreneurs to connect with each other, exchange ideas, and learn about industry trends and best practices. It is an opportunity for you to build relationships and make meaningful connections with other entrepreneurs around Canada",
  },
  {
    question: "How can I register to attend the event?",
    answer:
      "Please see our Tickets section to get started. Payment can be made online via credit card or through an invoice request.",
  },
  {
    question: "What is the format of the event?",
    answer:
      "The format of the event will include both structured presentations and workshops, as well as ample time for informal networking and mingling. Attendees will have the opportunity to participate in interactive Q&A sessions and meet with other attendees to discuss their businesses and ideas.",
  },
  {
    question: "Is there a dress code for the event?",
    answer:
      "The dress code for the event is business casual. We recommend dressing in comfortable, professional attire that allows you to feel confident and comfortable during the event.",
  },
  {
    question: "Will there be any special guests or speakers at the event?",
    answer:
      "Yes, we are excited to have Reni Odetoyinbo at this event. She will be speaking on how to manage your finances as a small business owner and answering any questions you might have.",
  },
  {
    question: "Will there be any opportunities for networking after the event?",
    answer:
      "Yes, we will be hosting several follow-up events and opportunities for ongoing networking after the main event. Make sure you connect with us on our socials to stay plugged in!",
  },
];

const ConferenceFAQs = () => {
  return (
    <div className="relative my-20 lg:mt-32">
      <h2 className="outlinedText my-container conference text-center text-5xl font-extrabold uppercase lg:text-6xl">
        FAQs
      </h2>

      <p className="outlinedText absolute top-0 right-0 text-[20rem] font-semibold leading-none opacity-20 lg:top-40 lg:text-[40rem]">
        ?
      </p>

      <div className="my-container mt-8">
        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <dt className="text-lg font-medium leading-6 text-primary">
                {faq.question}
              </dt>
              <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default ConferenceFAQs;
