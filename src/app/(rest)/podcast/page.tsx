import Link from "next/link";

import { Header } from "@/components/Header";
import { SubscribeBanner } from "@/components/shared/SubscribeBanner";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import { PlatformContainer } from "./PlatformContainer";
import { EPISODES_QUERY, PODCAST_PAGE_QUERY } from "./queries";

export default async function PodcastPage() {
  const episodes = await client.fetch(EPISODES_QUERY);
  const { title, description, links } = await client.fetch(PODCAST_PAGE_QUERY);

  const latestEpisode = episodes[0];
  episodes.shift();

  console.log(links);

  return (
    <>
      <Header isDark />
      <div className="bg-tbm-gradient py-20 text-center text-white lg:py-48">
        <div className="padded">
          <div className="mx-auto max-w-xl">
            <h1 className="mb-4">{title}</h1>
            <p>{description}</p>

            <div className="mt-10">
              <p className="mb-2 text-sm font-medium tracking-wide opacity-55">
                AVAILABLE ON
              </p>
              <div className="flex items-center justify-center gap-4">
                <PlatformContainer
                  imageSrc="/icons/apple.svg"
                  imageAlt="Apple Podcast"
                  href={links.applePodcasts}
                />
                <PlatformContainer
                  imageSrc="/icons/spotify.png"
                  imageAlt="Spotify"
                  href={links.spotify}
                />
                <PlatformContainer
                  imageSrc="/icons/youtube.png"
                  imageAlt="Youtube"
                  href={links.youtube}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto -mt-36 aspect-video w-full max-w-3xl overflow-hidden rounded-xl border bg-white">
        <Link href={`/podcast/${latestEpisode.slug.current}`}>
          <img src={urlFor(latestEpisode.coverImage).url()} alt="" />
        </Link>
      </div>

      <hr className="mx-auto mb-20 mt-10 w-full max-w-xl" />

      <div className="padded grid max-w-5xl gap-x-8 gap-y-4 md:grid-cols-2">
        {episodes.map((episode: any) => (
          <div key={episode._id} className="mb-10">
            <Link href={`/podcast/${episode.slug.current}`}>
              <img
                src={urlFor(episode.coverImage).url()}
                alt=""
                className="mb-4 aspect-video w-full rounded-xl"
              />
              <div>
                <p>
                  S{" "}
                  {episode.season.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                  })}{" "}
                  • E{" "}
                  {episode.episodeNumber.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                  })}
                </p>
                <h2 className="w-[90%] text-xl font-semibold">
                  {episode.title}
                </h2>
                <p className="mt-1 text-sm uppercase text-gray-600">
                  {episode.businessName}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-20"></div>
      <SubscribeBanner
        title="Never miss another episode"
        subtitle="On this podcast, we amplify the stories of Black entrepreneurs in Canada as we explore their journey to building a successful business."
      />
    </>
  );
}
