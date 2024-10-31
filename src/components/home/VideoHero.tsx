import { ArrowRightIcon } from "@sanity/icons";
import Link from "next/link";

import { getFileUrl } from "@/sanity/lib/client";

export const VideoHero = ({ content }) => {
  const videoUrl = content.video?.asset?._ref
    ? getFileUrl(content.video.asset._ref)
    : "";

  return (
    <div className="relative">
      <div className="absolute inset-0">
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black via-black to-[#140701] opacity-50" />

      <div className="relative z-10 flex min-h-[60vh] flex-col bg-black bg-opacity-50 lg:min-h-[80vh]">
        <nav className="padded flex items-center justify-between gap-10 py-10">
          <img
            src="soplugged.svg"
            alt="SoPlugged logo"
            className="h-8 lg:h-10"
          />

          <div className="hidden items-center gap-4 text-white/80 lg:flex">
            <Link href="/about">About</Link>
            <Link href="/about">Events</Link>
            <Link href="/about">Directory</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">Join the community</Link>
          </div>
        </nav>

        <section className="padded flex flex-1 py-12 lg:pt-40 xl:pt-64">
          <div className="mr-auto mt-auto h-full lg:w-2/3">
            <h1 className="mb-4 text-4xl font-bold lg:text-6xl">
              {content.title}
            </h1>
            <p className="font-light lg:w-3/4 lg:text-lg">{content.subtitle}</p>

            <div className="mt-8">
              <button className="flex items-center gap-2 rounded-full bg-white p-4 font-semibold text-black">
                {content.cta?.label}

                <ArrowRightIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
