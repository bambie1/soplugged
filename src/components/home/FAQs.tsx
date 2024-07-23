import Link from "next/link";

const faqs = [
  {
    id: 1,
    question: "How can I join the SoPlugged community?",
    answer: (
      <p>
        You can join by signing up{" "}
        <Link
          href="https://dashboard.soplugged.com"
          target="_blank"
          className="underline"
        >
          here
        </Link>
        . You'll receive a welcome email, have your business listed on{" "}
        <Link href="/directory" className="underline">
          our directory
        </Link>
        , and be the first to know about upcoming events and opportunities.
      </p>
    ),
  },
  {
    id: 2,
    question: "Is there a cost to join SoPlugged?",
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
    answer: (
      <p>
        One of the best ways to support us is to spread the word about the
        community. If you'd like support financially, please refer to our{" "}
        <Link href="/partners" className="underline">
          Partners page
        </Link>
        .
      </p>
    ),
  },
];

const FAQs = () => {
  return (
    <div className="">
      <div className="my-container">
        <h2 className="text-3xl font-semibold text-primary xl:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 lg:mt-20">
          <ul className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-10 lg:space-y-0">
            {faqs.map((faq) => (
              <li key={faq.id}>
                <div className="font-semibold text-gray-900 lg:text-lg">
                  {faq.question}
                </div>
                <div className="mt-3 text-gray-600">{faq.answer}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
