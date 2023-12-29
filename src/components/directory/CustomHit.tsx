import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

type HitProps = {
  hit: {
    slug: string;
    business_name: string;
    logo_url: string;
    business_location: string[];
    sample_images: string;
    category: string;
  };
};

const CustomHit: FC<HitProps> = ({ hit }) => {
  const { slug, business_name, business_location, sample_images, category } =
    hit;

  const rawImages = sample_images?.split(",") || [];
  const images = rawImages.map((item: string) => {
    const arr = item.split("/upload/");
    const newImage = arr[1] ? `${arr[0]}/upload/w_1200/${arr[1]}` : item;

    return newImage;
  });

  const featuredImage = images.length ? images[0] : null;

  return (
    <Link href={`/business/${slug}`}>
      <a className="group relative flex h-full w-full flex-col items-start focus:outline-none">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border transition duration-200 group-hover:scale-[.98] group-focus:border-primary group-focus-visible:border-primary ">
          {featuredImage ? (
            <Image
              src={featuredImage}
              alt={`Featured image for ${business_name}`}
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
          <p className="truncate text-sm text-gray-600">{business_location}</p>
        </div>
      </a>
    </Link>
  );
};

export default CustomHit;
