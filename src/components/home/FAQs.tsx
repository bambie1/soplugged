const faqs = [
  {
    id: 1,
    question: "What types of businesses can be listed on SoPlugged",
    answer:
      "We welcome all types of businesses that are Black-owned and operated in Canada. Whether you're a retail store, restaurant, service provider, or anything in between, we encourage you to add your business to our directory",
  },
  {
    id: 2,
    question: "Is there a cost to add my business on SoPlugged?",
    answer:
      "No, SoPlugged is completely FREE. Our goal is to support and promote Black-owned businesses in Canada, and we believe that offering a free directory is one way we can help achieve this goal.",
  },
  {
    id: 3,
    question: "Can businesses outside of Canada be listed on Soplugged?",
    answer:
      "At this time, SoPlugged is focused on promoting and supporting Black-owned businesses in Canada. However, we encourage you to support Black-owned businesses in your own community and promote them on social media.",
  },
  {
    id: 4,
    question: "How can I support the team?",
    answer:
      "One of the best ways to support us is to spread the word about our directory to others who might be interested in supporting Black-owned businesses in Canada. If you'd like to support financially, check out our sponsors page!",
  },
];

const FAQs = () => {
  return (
    <div className="bg-white">
      <div className="my-container">
        <h2 className="text-3xl font-semibold text-primary xl:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-10 lg:mt-20">
          <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-10 lg:space-y-0">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <div className="font-semibold text-gray-900 lg:text-lg">
                  {faq.question}
                </div>
                <div className="mt-3 text-gray-600">{faq.answer}</div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
