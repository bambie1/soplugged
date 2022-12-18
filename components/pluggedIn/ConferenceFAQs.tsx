import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question:
      "What is the format of the event? Will there be presentations or workshops, or will it be more informal with time for mingling and making connections?",
    answer:
      "The format of the event will include both structured presentations and workshops, as well as ample time for informal networking and mingling. Attendees will have the opportunity to participate in interactive Q&A sessions and meet with other attendees to discuss their businesses and ideas.",
  },
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
    question:
      "Will there be any follow-up or ongoing opportunities for networking after the event?",
    answer:
      "Yes, we will be hosting several follow-up events and opportunities for ongoing networking after the main event. Make sure you connect with us on our socials to stay plugged in!",
  },
];

const ConferenceFAQs = () => {
  return (
    <div id="tickets" className="my-container mt-20 lg:mt-32">
      <h2 className="outlinedText conference text-center text-4xl font-extrabold uppercase sm:text-5xl lg:text-6xl">
        FAQs
      </h2>

      <dl className="mx-auto mt-6 max-w-3xl space-y-6 divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <Disclosure
            as="div"
            key={faq.question}
            defaultOpen={index === 0}
            className="pt-6"
          >
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                    <span className="font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <ChevronDownIcon
                        className={`
                          ${open ? "-rotate-180" : "rotate-0"}
                          h-6 w-6
                        transform`}
                        aria-hidden="true"
                      />
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                  <p className="text-base text-gray-500">{faq.answer}</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  );
};

export default ConferenceFAQs;
