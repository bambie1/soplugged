import { IBusiness } from "@/types/Business";
import Link from "next/link";
import Image from "next/image";

const PopularBusinesses = ({ businesses }: { businesses: IBusiness[] }) => {
  if (!businesses?.length) return null;

  return (
    <section className="relative mt-0 hidden pb-10 lg:block">
      <div className="absolute bottom-0 h-40 w-full bg-[#F4EEE6]"></div>
      <div className="my-container">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold xl:text-4xl">
            Popular Businesses
          </h2>

          <Link href="/search/all">
            <a className="underline">See all</a>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-6 xl:grid-cols-5">
          {businesses.map((business) => {
            const { id, slug, business_name, category, sample_images } =
              business;

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
              <Link href={`/business/${slug}`} key={id}>
                <a className="relative flex flex-col overflow-hidden rounded-lg ">
                  <div className="relative aspect-[3/4] w-full border brightness-[.85] transition duration-200 group-hover:scale-[.98] group-focus:border-primary group-focus-visible:border-primary ">
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

                  <div className="absolute left-0 right-0 bottom-0 flex h-20 flex-col justify-end bg-gradient-to-b from-primary/[.025] to-primary/70 p-4 text-white">
                    <p className="text-lg font-bold">{business_name}</p>
                    <p className="text-sm uppercase">{category}</p>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularBusinesses;
