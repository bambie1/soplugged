import { ArrowRightIcon } from "@sanity/icons";

import { getFileUrl } from "@/sanity/lib/client";

import { Header } from "../Header";

export const VideoHero = ({ content }: { content: any }) => {
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
        <Header />

        <section className="padded flex flex-1 py-12 pt-36 lg:pt-40 xl:pt-64">
          <div className="mr-auto mt-auto h-full lg:w-2/3">
            <h1 className="mb-4">{content.title}</h1>
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
