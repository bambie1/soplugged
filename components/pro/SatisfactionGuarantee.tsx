const SatisfactionGuarantee = () => {
  return (
    <div className="relative mt-6 border-t border-b border-accent p-4">
      <h3 className="-top-6 transform bg-white px-3 text-center text-3xl font-bold lg:absolute lg:left-1/2 lg:max-w-3xl lg:-translate-x-1/2 lg:px-6 lg:text-4xl">
        100% Satisfaction guarantee
      </h3>
      <div className="my-container">
        <div className="mt-8 flex flex-col items-center py-4">
          <p className="mx-auto max-w-3xl text-center italic text-gray-800 lg:text-lg">
            Kudos to the team for a job well done. The time, detail, and care
            put into this project is greatly appreciated. Every step of the way,
            the team provided exceptional services with their great expertise
            and professionalism.
          </p>
          <p className="mt-10 uppercase">Princess A.</p>
          <p className="text-sm text-accent-dark lg:text-base">
            Founder, Treats Royale
          </p>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionGuarantee;
