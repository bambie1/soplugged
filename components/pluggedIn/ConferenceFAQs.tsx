import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "Who can attend the networking event?",
    answer:
      "The networking event is open to all black entrepreneurs and business owners. We welcome attendees from all industries and at all stages of their business journey.",
  },
  {
    question: "How do I register for the networking event?",
    answer:
      "To register for the networking event, you can visit our website and follow the instructions to sign up. Registration is typically done online, but we may also offer in-person registration options depending on the event.",
  },
  {
    question: "What should I bring to the networking event?",
    answer:
      "We recommend that you bring business cards and any promotional materials that you would like to share with other attendees. It is also a good idea to bring a notebook and pen to take notes during the event.",
  },
  {
    question: "What should I wear to the networking event?",
    answer:
      "Business casual attire is typically appropriate for a networking event. We recommend dressing in a way that is comfortable and professional, and that reflects your personal style and the image you want to convey for your business.",
  },
  {
    question: "How do I register for the networking event?",
    answer:
      "To register for the networking event, you can visit our website and follow the instructions to sign up. Registration is typically done online, but we may also offer in-person registration options depending on the event.",
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
