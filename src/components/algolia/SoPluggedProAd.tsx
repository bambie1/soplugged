import Link from "next/link";
import { FC } from "react";

interface Props {
  adType: "website" | "social-media";
}

const SoPluggedProAd: FC<Props> = ({ adType }) => {
  const imageSource =
    adType === "website"
      ? "/illustrations/pro-boost-1.png"
      : "/illustrations/pro-boost-2.png";

  const adText =
    adType === "website"
      ? "Hire our website experts to launch and grow an online presence for your business"
      : "Hire our social-media experts to launch and grow your business's online presence";

  return (
    <Link href="/pro">
      <a className="group my-4 flex flex-col">
        <div className="relative flex aspect-video w-full flex-col overflow-hidden rounded-lg border border-primary/50 p-4 pt-6 shadow transition duration-200 group-hover:scale-[.98] lg:pt-8">
          <img
            src={imageSource}
            alt=""
            className="absolute top-0 right-0 bottom-0 -z-[1] h-full"
          />
          <p className="mb-2 w-[90%] font-bold sm:text-lg xl:text-xl">
            Try <span className="underline">SoPlugged PRO</span> today
          </p>
          <p className="mb-2 w-[90%] text-sm text-gray-700 xl:w-[70%]">
            {adText}
          </p>

          <Link href="/pro">
            <a className="mt-auto text-sm underline">Learn more</a>
          </Link>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="font-semibold text-primary">SoPlugged</span>
            <span className="ml-1 rounded-md bg-primary px-1 py-[.125rem] text-xs font-medium text-white lg:text-sm">
              TEAM
            </span>
          </div>

          <p className="font-bold text-gray-500 lg:text-sm">PROMOTED</p>
        </div>
      </a>
    </Link>
  );
};

export default SoPluggedProAd;
