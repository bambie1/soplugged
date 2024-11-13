export const BuyBlackSection = ({ content }: { content: any }) => {
  // console.log(content.businesses);
  const businesses = content.businesses;

  return (
    <div className="page-section lg:pt-36">
      <div className="padded">
        <h2 className="mx-auto max-w-md text-center">{content.title}</h2>
      </div>

      <div className="mt-10 grid grid-cols-2 items-start gap-4 px-4 sm:px-6 xl:grid-cols-6 xl:gap-6 xl:px-12">
        <div className="grid grid-rows-2 gap-6">
          <div className="relative aspect-[2/3] overflow-hidden rounded-xl opacity-40 hover:opacity-100">
            <img
              src={businesses[0].sample_images[0].asset.url}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
          <div className="relative aspect-[2/3] overflow-hidden rounded-xl opacity-40 hover:opacity-100">
            <img
              src={businesses[1].sample_images[0].asset.url}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </div>
        <div className="mt-20 grid grid-rows-2 gap-6">
          <div className="relative aspect-[2/3] overflow-hidden rounded-xl opacity-40 hover:opacity-100">
            <img
              src={businesses[2].sample_images[0].asset.url}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
          <div className="relative aspect-[2/3] overflow-hidden rounded-xl opacity-40 hover:opacity-100">
            <img
              src={businesses[3].sample_images[0].asset.url}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </div>
        <div className="mt-40 grid grid-rows-2 gap-6 xl:col-span-2">
          <div className="relative aspect-[3/2] overflow-hidden rounded-xl opacity-40 hover:opacity-100">
            <img
              src={businesses[4].sample_images[0].asset.url}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-xl opacity-40 hover:opacity-100">
            <img
              src={businesses[5].sample_images[0].asset.url}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </div>
        <div className="mt-20 grid grid-rows-2 gap-6">
          <div className="relative aspect-[2/3] overflow-hidden rounded-xl opacity-40 hover:opacity-100">
            <img
              src={businesses[6].sample_images[0].asset.url}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
          <div className="relative aspect-[2/3] overflow-hidden rounded-xl opacity-40 hover:opacity-100">
            <img
              src={businesses[7].sample_images[0].asset.url}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </div>
        <div className="grid grid-rows-2 gap-6">
          <div className="relative aspect-[2/3] overflow-hidden rounded-xl opacity-40 hover:opacity-100">
            <img
              src={businesses[8].sample_images[0].asset.url}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
          <div className="relative aspect-[2/3] overflow-hidden rounded-xl opacity-40 hover:opacity-100">
            <img
              src={businesses[9].sample_images[0].asset.url}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
