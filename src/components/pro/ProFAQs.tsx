const faqs = [
  {
    id: 1,
    question: "How much does your service cost?",
    answer:
      "The cost of our services will depend on the specific needs of your business and the scope of the work required. We offer competitive pricing and can provide a customized quote based on your goals and budget.",
  },
  {
    id: 2,
    question: "How long does it take to complete a website project?",
    answer:
      "As a rough estimate, a basic website design project could take 4-6 weeks to complete, while a more complex website development project could take a couple months. We will provide you with a timeline and schedule at the outset of the project and work with you to ensure that all deadlines are met.",
  },
  {
    id: 3,
    question: "How long does it take to complete a Social media project?",
    answer:
      "Social media management projects may have a shorter timeline, with work being completed on an ongoing basis. We will provide you with a timeline and schedule at the outset of the project and work with you to ensure that all deadlines are met.",
  },
  {
    id: 4,
    question: "Do you offer any guarantees or warranties for your work?",
    answer:
      "We stand behind the quality of our work and offer a satisfaction guarantee for all of our services. If you are not happy with the results of our work, we will work with you to address any issues and ensure that you are satisfied with the final product.",
  },
];

const ProFAQs = () => {
  return (
    <div className="border-y border-accent bg-accent/5 py-6 lg:py-16">
      <div className="my-container">
        <div className="text-center">
          <p className="font-light tracking-widest">FAQs</p>
          <h2 className="mx-auto max-w-4xl text-3xl font-semibold lg:text-4xl">
            Got any questions?
          </h2>
        </div>
        <div className="mt-10 lg:mt-20">
          <dl className="space-y-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:space-y-0">
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

export default ProFAQs;
