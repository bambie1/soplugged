import Image from "next/legacy/image";
import Link from "next/link";
import { FC } from "react";
import useSWR from "swr";

import { IBusiness } from "@/types/Business";

interface Props {
  category: string;
  excludeBusiness: string;
  location: string;
}

const MoreLikeThis: FC<Props> = ({ category, location, excludeBusiness }) => {
  const { data: businesses, error } = useSWR<IBusiness[]>(
    `/api/getSimilarBusinesses?category=${encodeURIComponent(
      category
    )}&location=${encodeURIComponent(
      location
    )}&business_name=${encodeURIComponent(excludeBusiness)}`
  );

  if (!businesses || error) return null;

  return (
    <div className="mt-4 flex w-full flex-col border-t">
      <div className="my-container pt-8 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="block text-xl font-semibold uppercase text-primary lg:text-2xl">
            More like this
          </p>
          <Link href="/directory" className="font-medium underline">
            Back to directory
          </Link>
        </div>

        <ul className="mt-4 mb-8 flex w-full flex-col gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {businesses.map((business) => {
            const {
              id,
              slug,
              business_name,
              category,
              business_location,
              sample_images,
            } = business;

            const rawImages = sample_images?.split(",") || [];
            const images = rawImages.map((item: string) => {
              const arr = item.split("/upload/");
              const newImage = arr[1]
                ? `${arr[0]}/upload/w_1200/${arr[1]}`
                : item;

              return newImage;
            });

            const featuredImage = images.length ? images[0] : null;

            return (
              <li key={id} className="my-4 flex">
                <Link
                  href={`/business/${slug}`}
                  className="group relative flex h-full w-full flex-col items-start focus:outline-none">

                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border transition duration-200 group-hover:scale-[.98] group-focus:border-primary group-focus-visible:border-primary ">
                    {featuredImage ? (
                      <Image
                        src={featuredImage}
                        alt=""
                        objectFit="cover"
                        layout="fill"
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8u21yPQAHBQKXKv8OfQAAAABJRU5ErkJggg==`}
                      />
                    ) : (
                      <div className="relative flex aspect-video w-full items-center justify-center bg-secondary/20">
                        <span className="whitespace-nowrap font-light uppercase tracking-wider text-primary/40">
                          {business_name}
                        </span>

                        <div className="absolute -left-10 -top-5 aspect-square w-36 rounded-full border border-primary/10"></div>
                        <div className="absolute -right-10 -bottom-5 aspect-square w-36 rounded-full border border-primary/10"></div>
                      </div>
                    )}
                  </div>
                  <div className="mt-3 max-w-full">
                    <h3 className="truncate font-semibold uppercase text-gray-600 lg:text-lg">
                      {business_name}
                    </h3>
                    <p className="truncate text-sm">{category}</p>
                    <p className="truncate text-sm text-gray-600">
                      {business_location}
                    </p>
                  </div>

                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MoreLikeThis;
