import {
  ExternalLinkIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";
import Image from "next/legacy/image";
import Link from "next/link";
import { usePlausible } from "next-plausible";
import { FC } from "react";

interface Props {
  adType: "website" | "social-media";
}

const SoPluggedProAd: FC<Props> = ({ adType }) => {
  const plausible = usePlausible();

  const imageSource =
    adType === "website"
      ? "/illustrations/shopify.svg"
      : "/illustrations/instagram.svg";

  const adText =
    adType === "website"
      ? "Hire our website experts to launch and grow an online presence for your business"
      : "Hire our social-media experts to launch and grow your business's online presence";

  const adClickHandler = () => {
    plausible("Click pro ad");
    window.open("/pro", "_blank");
  };

  return (
    <li className="my-4">
      <a
        role="button"
        onClick={adClickHandler}
        key="main-link"
        className="group relative flex w-full flex-col overflow-hidden rounded-lg bg-gradient-to-b from-tr-pink-100 to-indigo-100 p-4 shadow-md transition duration-200 hover:scale-[.98]"
      >
        <div className="mb-1 flex items-center justify-between">
          <div className="relative aspect-video h-10">
            <Image src={imageSource} alt="" layout="fill" />
          </div>
          <ExternalLinkIcon className="h-6 w-6 transition duration-200 group-hover:text-gray-500" />
        </div>
        <p className="mb-2 text-xl font-semibold">
          Try <span className="text-primary">SoPlugged PRO</span> today
        </p>
        <p className="mb-4 text-sm text-gray-700 lg:w-[90%]">{adText}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-sm underline transition duration-200 group-hover:no-underline">
            Book a FREE consult
          </span>
          <div>
            <span className="text-sm font-semibold text-primary">
              SoPlugged
            </span>
            <span className="ml-1 rounded-md bg-primary px-1 py-[.125rem] text-xs font-medium text-white">
              TEAM
            </span>
          </div>
        </div>
      </a>
      <div className="mt-2 flex items-center justify-between">
        <p className="font-semibold text-gray-500 lg:text-base">PROMOTED</p>
        <Link href="/pro" key="info" aria-label="Learn more">

          <InformationCircleIcon className="h-5 w-5 text-gray-500" />

        </Link>
      </div>
    </li>
  );
};

export default SoPluggedProAd;
