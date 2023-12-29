import { Fragment } from "react";

import CustomHit from "./CustomHit";
import SoPluggedProAd from "./SoPluggedProAd";

const Grid = ({ businesses }: any) => {
  return (
    <ul className="my-8 flex w-full flex-col gap-2 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {businesses.map((hit: any, index: number) => {
        return (
          <Fragment key={hit.id}>
            {index === 4 && <SoPluggedProAd adType="website" />}
            {index === 16 && <SoPluggedProAd adType="social-media" />}
            <li className="my-4 flex">
              <CustomHit hit={hit} />
            </li>
          </Fragment>
        );
      })}
    </ul>
  );
};

export default Grid;
