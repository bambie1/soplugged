import { ButtonLink } from "@/styled/ButtonLink";

const faqs = [
  {
    id: 1,
    question: "Is SoPlugged free?",
    answer:
      "Yes, SoPlugged is free to use and register (if you're a black-owned business in Canada). We rely on our amazing sponsors to keep our platform free and accessible to Black-owned businesses across Canada.",
  },
  {
    id: 2,
    question: "How do I add my business?",
    answer: (
      <div>
        <p className="mb-3">
          Adding your business is free, quick and easy. Please click the button
          below to get started (you'll need to be signed in to add a business).
        </p>
        <ButtonLink href="/my-business" showArrow>
          Add my business
        </ButtonLink>
      </div>
    ),
  },
  {
    id: 3,
    question: "What's the difference between SoPlugged and SoPluggedPro?",
    answer:
      "SoPlugged is a FREE directory of Black-owned businesses across Canada. SoPluggedPro is professional help for your business' digital needs",
  },
  {
    id: 4,
    question: "How can I support the team?",
    answer:
      "We rely on amazing people like you to spread the word about our platform to black-owned businesses that you know",
  },
];

const FAQs = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center lg:mx-auto">
          <h2 className="text-3xl font-bold xl:text-4xl">
            <span className="relative text-primary">
              Frequently asked questions
              <span className="absolute left-0 -bottom-1 h-3 w-full -rotate-2 bg-secondary/40" />
            </span>
          </h2>
        </div>
        <div className="mt-10 lg:mt-20">
          <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:space-y-0">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <div className="font-semibold text-gray-900 lg:text-lg">
                  {faq.question}
                </div>
                <div className="mt-3 text-gray-600 lg:text-lg">
                  {faq.answer}
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
