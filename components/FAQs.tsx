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
    answer:
      "Adding your business is free, quick and easy. Please click the button below to get started (you'll need to be signed in to add a business).",
  },
  {
    id: 3,
    question: "What’s the difference between SoPlugged and SoPluggedPro?",
    answer:
      "SoPlugged is a FREE directory of Black-owned businesses across Canada. SoPluggedPro is professional help for your business’ digital needs",
  },
];

const FAQs = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="text-3xl font-bold xl:text-4xl">
            <span className="relative text-primary">
              Frequently asked questions
              <span className="absolute left-0 -bottom-1 h-3 w-full -rotate-2 bg-secondary/40" />
            </span>
          </h2>
          <p className="mt-4 text-gray-500">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus
            elementum blandit et.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:space-y-0">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="font-semibold text-gray-900">{faq.question}</dt>
                <dd className="mt-3 text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQs;