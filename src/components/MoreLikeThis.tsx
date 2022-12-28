import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import algoliasearch from "algoliasearch/lite";
import { Configure, InstantSearch } from "react-instantsearch-dom";
import { Highlight } from "react-instantsearch-dom";

import { Hit as AlgoliaHit } from "instantsearch.js/es/types";

import { connectHits } from "react-instantsearch-dom";

import CustomMenu from "./algolia/CustomMenu";

const INSTANT_SEARCH_INDEX_NAME = "Business";
const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API!
);

interface Props {
  category: string;
  excludeBusiness: string;
}

type HitProps = {
  hit: AlgoliaHit<{
    slug: string;
    business_name: string;
    logo_url: string;
    business_location: string[];
    sample_images: string;
  }>;
};

const MoreLikeThis: FC<Props> = ({ category, excludeBusiness }) => {
  return (
    <div className="mt-4 flex w-full flex-col border-t px-4 py-4 sm:px-6 lg:px-0">
      <span className="-mb-4 block text-xl font-medium lg:text-2xl">
        More like this...
      </span>
      <InstantSearch
        searchClient={searchClient}
        indexName={INSTANT_SEARCH_INDEX_NAME}
        searchState={{
          menu: {
            category,
          },
        }}
      >
        <Configure hitsPerPage={4} />
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden">
            <CustomMenu attribute="category" />
          </div>
        </div>

        <CustomHits excludeBusiness={excludeBusiness} />
      </InstantSearch>
    </div>
  );
};

const Hits = ({ hits, excludeBusiness }: any) => {
  return (
    <ul className="my-8 grid w-full grid-cols-2 gap-2 lg:grid-cols-5 lg:gap-6">
      {hits.map(
        (hit: any) =>
          hit.business_name !== excludeBusiness && (
            <li key={hit.id} className="my-2 flex">
              <CustomHit hit={hit} />
            </li>
          )
      )}

      <li>
        <Link href="/search/all">
          <a className="my-2 flex aspect-video w-full rounded-lg bg-secondary/20">
            Find other businesses
          </a>
        </Link>
      </li>
    </ul>
  );
};

const CustomHits: any = connectHits(Hits);

const CustomHit: FC<HitProps> = ({ hit }) => {
  const { slug, business_name, business_location, sample_images } = hit;

  const rawImages = sample_images?.split(",") || [];
  const images = rawImages.map((item: any) => {
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

        <div className="mt-3 max-w-[95%]">
          <h3 className="truncate font-semibold uppercase text-gray-600 lg:text-lg">
            <Highlight attribute="business_name" hit={hit} />
          </h3>
          <p className="truncate text-xs">{business_location}</p>
        </div>
      </a>
    </Link>
  );
};

export default MoreLikeThis;
