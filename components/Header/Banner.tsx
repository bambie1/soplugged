import Link from "next/link";
import { useEffect, useState } from "react";

const Banner = () => {
  const [showBanner, setshowBanner] = useState(false);

  useEffect(() => {
    const isBannerClosed = localStorage.getItem("isBannerClosed");

    if (!isBannerClosed) setshowBanner(true);
  }, []);

  const closeBanner = () => {
    setshowBanner(false);
    localStorage.setItem("isBannerClosed", "true");
  };

  if (!showBanner) return null;

  return (
    <div className="relative bg-gradient-to-l from-accent/60 to-accent-30">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="px-4 text-center sm:px-16">
          <p className="font-medium text-primary">
            <span className="md:hidden">Try SoPluggedPro!</span>
            <span className="hidden md:inline">
              Big news! We're excited to launch SoPluggedPro.
            </span>
            <span className="sm:ml-2 sm:inline-block">
              <Link href="/pro">
                <a className="ml-1 font-bold text-primary underline">
                  Learn more <span aria-hidden="true">&rarr;</span>
                </a>
              </Link>
            </span>
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:items-start sm:pt-1 sm:pr-2">
          <button
            type="button"
            className="flex rounded-md border border-transparent p-2 hover:border-secondary"
            onClick={closeBanner}
          >
            <span className="sr-only">Dismiss</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m-15 0l15 15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
