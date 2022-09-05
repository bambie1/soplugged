const FeaturedReview = () => {
  return (
    <div className="my-container relative mt-4 flex items-center justify-center py-10 lg:py-20">
      <img
        src="/mesh_bg.svg"
        alt=""
        className="inset-center -z-[1] h-40 opacity-30 md:hidden"
      />
      <img
        src="/wide_mesh_bg.svg"
        alt=""
        className="inset-center -z-[1] hidden h-64 opacity-30 md:inline-block"
      />

      <div className="flex flex-col items-center">
        <p className="mx-auto max-w-3xl text-center italic text-gray-500 md:text-lg xl:text-xl">
          The team was exceptional and way quicker than I would've imagined in
          getting my website up and running. Would recommended for sure!
        </p>
        <p className="mt-4 uppercase lg:text-lg">Princess Akindele</p>
        <p className="text-sm text-accent lg:text-base">
          Founder, Treats Royale
        </p>
      </div>
    </div>
  );
};

export default FeaturedReview;
