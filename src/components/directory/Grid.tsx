import { PlusIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Fragment } from "react";

import CustomHit from "./CustomHit";
import SoPluggedProAd from "./SoPluggedProAd";

const Grid = ({ businesses }: any) => {
  return (
    <ul className="my-8 flex w-full flex-col gap-2 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {businesses?.map((hit: any, index: number) => (
        <Fragment key={hit.id}>
          {index === 4 && <SoPluggedProAd adType="website" />}
          {index === 16 && <SoPluggedProAd adType="social-media" />}
          <li className="my-4 flex">
            <CustomHit hit={hit} />
          </li>
        </Fragment>
      ))}

      <li>
        <Link
          href="https://dashboard.soplugged.com"
          target="_blank"
          className="group relative my-4 flex h-full w-full flex-col items-start focus:outline-none"
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border transition duration-200 group-hover:scale-[.98] group-focus:border-primary group-focus-visible:border-primary ">
            <div className="relative flex aspect-video w-full flex-col items-center justify-center bg-secondary/10">
              <PlusIcon className="h-10 w-10 text-primary" strokeWidth={1} />
              <span className="mt-4 whitespace-nowrap font-light uppercase tracking-wider text-primary">
                Add your business
              </span>
            </div>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default Grid;
