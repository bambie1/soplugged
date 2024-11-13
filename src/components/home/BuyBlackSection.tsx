import clsx from "clsx";

export const BuyBlackSection = ({ content }: { content: any }) => {
  const businesses = content.businesses;

  const renderCard = (business: any, isWide?: boolean) => {
    return (
      <div
        className={clsx(
          "relative overflow-hidden rounded-xl opacity-40 hover:opacity-100",
          {
            "aspect-[2/3]": !isWide,
            "aspect-[3/2]": isWide,
          },
        )}
      >
        <img
          src={business.sample_images[0].asset.url}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
    );
  };

  return (
    <div className="page-section lg:pt-36">
      <div className="padded">
        <h2 className="mx-auto max-w-md text-center">{content.title}</h2>
      </div>

      <div className="mt-10 grid grid-cols-2 items-start gap-4 px-4 sm:px-6 xl:grid-cols-6 xl:gap-6 xl:px-12">
        <div className="grid grid-rows-2 gap-6">
          {renderCard(businesses[0])}
          {renderCard(businesses[1])}
        </div>
        <div className="mt-20 grid grid-rows-2 gap-6">
          {renderCard(businesses[2])}
          {renderCard(businesses[3])}
        </div>
        <div className="mt-40 grid grid-rows-2 gap-6 xl:col-span-2">
          {renderCard(businesses[4], true)}
          {renderCard(businesses[5], true)}
        </div>
        <div className="mt-20 grid grid-rows-2 gap-6">
          {renderCard(businesses[6])}
          {renderCard(businesses[7])}
        </div>
        <div className="grid grid-rows-2 gap-6">
          {renderCard(businesses[8])}
          {renderCard(businesses[9])}
        </div>
      </div>
    </div>
  );
};
