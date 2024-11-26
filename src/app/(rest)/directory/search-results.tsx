import Image from "next/image";
import Link from "next/link";

export const SearchResults = ({ businesses }: { businesses?: any[] }) => {
  return (
    <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8 lg:gap-y-12 lg:px-4 xl:grid-cols-4">
      {businesses?.map((business) => {
        const mainImage = business.sample_images?.split(",")[0];

        return (
          <Link
            key={business.slug}
            className=""
            href={`/business/${business.slug}`}
          >
            <div className="relative aspect-video overflow-hidden lg:rounded-2xl lg:border">
              {mainImage && (
                <Image
                  src={mainImage}
                  alt=""
                  fill
                  className="h-full w-full object-cover"
                />
              )}

              <div className="absolute right-4 top-4 h-10 w-10 rounded-full"></div>
            </div>

            <div className="mt-2 -space-y-1 px-4 lg:px-0">
              <p className="text-lg font-semibold text-primary">
                {business.business_name}
              </p>
              <p className="text-gray-600">{business.category}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
