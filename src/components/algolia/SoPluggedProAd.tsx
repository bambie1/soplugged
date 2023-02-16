import { ExternalLinkIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  adType: "website" | "social-media";
}

const SoPluggedProAd: FC<Props> = ({ adType }) => {
  const imageSource =
    adType === "website"
      ? "/illustrations/shopify.svg"
      : "/illustrations/instagram.svg";

  const adText =
    adType === "website"
      ? "Hire our website experts to launch and grow an online presence for your business"
      : "Hire our social-media experts to launch and grow your business's online presence";

  return (
    <Link href="/pro">
      <a target="_blank" className="group my-4 flex flex-col">
        <div className="relative flex aspect-video w-full flex-col overflow-hidden rounded-lg bg-gradient-to-b from-tr-pink-100 to-indigo-100 p-4 shadow-md transition duration-200 group-hover:scale-[.98] md:aspect-video lg:p-5">
          <div className="mb-2 flex items-center justify-between">
            <div className="relative aspect-video h-8">
              <Image src={imageSource} alt="" className="" layout="fill" />
            </div>
            <ExternalLinkIcon className="h-6 w-6" />
          </div>
          <p className="mb-2 text-xl font-bold">
            Try <span className="text-primary underline">SoPlugged PRO</span>{" "}
            today
          </p>
          <p className="mb-2 text-sm text-gray-700 lg:w-[90%]">{adText}</p>
          <div className="mt-auto flex items-center justify-between">
            <Link href="/pro">
              <a className="text-sm underline">Learn more</a>
            </Link>
            <div>
              <span className="text-sm font-semibold text-primary">
                SoPlugged
              </span>
              <span className="ml-1 rounded-md bg-primary px-1 py-[.125rem] text-xs font-medium text-white">
                TEAM
              </span>
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="font-bold text-gray-500 lg:text-sm">PROMOTED</p>
        </div>
      </a>
    </Link>
  );
};

export default SoPluggedProAd;
