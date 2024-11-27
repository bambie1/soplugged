import clsx from "clsx";
import { ArrowRightIcon, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const FeaturedBusinessesGrid = ({ content }: { content: any }) => {
  const businesses = content.businesses;

  const renderCard = (business: any, isWide?: boolean) => {
    return (
      <Link
        href={`/business/${business.slug.current}`}
        className={clsx(
          "group relative flex flex-col items-start justify-end overflow-hidden rounded-xl p-4 opacity-50 transition-opacity duration-150 hover:opacity-80 lg:opacity-50",
          {
            "aspect-[2/3]": !isWide,
            "aspect-[3/2]": isWide,
          },
        )}
      >
        <Image
          src={business.sample_images[0].asset.url}
          alt=""
          fill
          className="object-cover object-top"
        />

        <div className="z-10 rounded-lg bg-black/60 p-2 opacity-0 group-hover:opacity-100">
          <p className="text-sm font-medium uppercase">{business.name}</p>
        </div>
      </Link>
    );
  };

  return (
    <div className="overflow-hidden">
      <div className="relative -ml-10 mt-10 grid h-[30rem] w-[120%] grid-cols-3 items-start gap-4 md:grid-cols-4 lg:h-[50rem] lg:w-[105%] xl:grid-cols-6 xl:gap-6">
        <div className="grid grid-rows-2 gap-4 xl:gap-6">
          {renderCard(businesses[0])}
          {renderCard(businesses[1])}
        </div>
        <div className="mt-20 grid grid-rows-2 gap-4 xl:gap-6">
          {renderCard(businesses[2])}
          {renderCard(businesses[3])}
        </div>
        <div className="mt-40 hidden grid-rows-2 gap-4 lg:grid xl:col-span-2 xl:gap-6">
          {renderCard(businesses[4], true)}
          {renderCard(businesses[5], true)}
        </div>
        <div className="mt-20 hidden grid-rows-2 gap-4 lg:grid xl:gap-6">
          {renderCard(businesses[6])}
          {renderCard(businesses[7])}
        </div>
        <div className="grid grid-rows-2 gap-4 xl:gap-6">
          {renderCard(businesses[8])}
          {renderCard(businesses[9])}
        </div>

        <div className="absolute bottom-0 left-0 flex h-40 w-full items-end justify-center bg-gradient-to-t from-black">
          <Link
            href="/join"
            className="flex items-center gap-2 rounded-full bg-white p-4 font-semibold text-black"
          >
            Add your business
            <Plus className="h-6 w-6" strokeWidth={1.25} />
          </Link>
        </div>
      </div>
    </div>
  );
};
