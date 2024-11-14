import clsx from "clsx";
import Link from "next/link";

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
    <div className="page-section pb-0 lg:pt-36">
      <div className="padded flex flex-col items-center">
        <h2 className="mx-auto mb-12 max-w-md text-center">{content.title}</h2>

        <Link href="/directory" className="rounded-full border px-6 py-4">
          Explore the directory
        </Link>
      </div>

      <div className="mt-10 grid h-96 grid-cols-2 items-start gap-4 overflow-hidden px-4 sm:px-6 lg:mt-0 lg:h-[50rem] xl:grid-cols-6 xl:gap-6 xl:px-12">
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

      <div className="bg-[#3B3B3B] py-10 lg:py-16">
        <div className="padded flex flex-wrap items-center justify-between gap-10">
          <div>
            <h3 className="mb-2">Are you a business owner?</h3>
            <p>
              Expand your reach by listing your business on our directory today!
            </p>
          </div>

          <Link
            href="/join"
            className="rounded-full bg-white px-6 py-4 font-medium text-black"
          >
            List your business
          </Link>
        </div>
      </div>
    </div>
  );
};
