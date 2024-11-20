import { ArrowRightIcon } from "@sanity/icons";

import { getFileUrl } from "@/sanity/lib/client";

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

      <div className="relative flex min-h-[60vh] flex-col bg-black bg-opacity-50 lg:min-h-[700px]">
        {/* Overlays */}
        <div className="absolute inset-0">
          <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-black to-transparent"></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-black" />
        </div>

        <section className="padded z-10 flex flex-1 pb-10 pt-64 xl:pt-64">
          <div className="mr-auto mt-auto h-full lg:w-3/4">
            <h1 className="mb-4 xl:text-7xl">{content.title}</h1>
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
