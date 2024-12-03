import Link from "next/link";

import { Nav } from "@/components/nav";
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
    <div className="bg-black text-white">
      <Nav />
      <div className="bg-tbm-gradient py-40 pb-28 text-center text-white lg:py-48">
        <div className="padded">
          <div className="mx-auto max-w-xl">
            <h1 className="large mb-4">{title}</h1>
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
      <div className="mx-4 -mt-20 aspect-video max-w-3xl overflow-hidden rounded-xl border border-white/40 lg:mx-auto lg:-mt-36">
        <Link
          href={`/podcast/${latestEpisode.slug.current}`}
          className="relative"
        >
          <img src={urlFor(latestEpisode.coverImage).url()} alt="" />

          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute inset-0 flex items-end justify-start p-4 lg:p-6">
            <div className="max-w-md">
              <p className="mb-4 text-sm">Latest episode</p>
              <h2 className="">{latestEpisode.title}</h2>
              <p className="mt-2 text-sm uppercase text-gray-300">
                {latestEpisode.businessName}
              </p>
            </div>
          </div>

          <div className="absolute inset-0 flex scale-50 items-center justify-center opacity-40 lg:scale-105">
            <svg
              width="99"
              height="99"
              viewBox="0 0 99 99"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.5749 28.9173L51.3026 28.7523C48.2171 26.8754 45.5029 25.2213 43.1764 24.388C41.8939 23.8951 40.5228 23.6745 39.1504 23.7404C37.7057 23.8507 36.3249 24.3812 35.178 25.2666C32.7896 27.0569 31.7584 29.6928 31.1932 32.6091C30.6446 35.4348 30.4343 39.1143 30.1744 43.594L30.162 43.825C30.0052 46.5062 29.9062 49.1586 29.9062 51.5635C29.9062 53.9684 30.0052 56.6249 30.162 59.3061L30.1744 59.533C30.4343 64.0128 30.6446 67.6923 31.1932 70.5138C31.7584 73.4343 32.7896 76.066 35.178 77.8604C36.3577 78.7473 37.6819 79.2753 39.1504 79.3866C40.5611 79.4898 41.9141 79.1927 43.1764 78.739C45.5029 77.9057 48.2171 76.2516 51.3026 74.3789L51.5749 74.2139C53.3321 73.1414 55.0564 72.04 56.595 70.9551C58.4793 69.6146 60.3161 68.2085 62.1019 66.7394L62.3081 66.5703C65.4596 64.0004 68.1326 61.8182 69.9806 59.6732C71.9936 57.322 73.2188 54.7975 73.2188 51.5635C73.2188 48.3295 71.9936 45.8009 69.9765 43.4538C68.1326 41.3088 65.4596 39.1225 62.3122 36.5568L62.106 36.3876C60.2332 34.8614 58.3523 33.4011 56.595 32.1719C54.9563 31.0331 53.2821 29.9463 51.5749 28.9131"
                fill="white"
              />
            </svg>
          </div>
        </Link>
      </div>

      <hr className="mx-auto my-10 w-full max-w-xl opacity-40 lg:mb-20" />

      <div className="padded grid max-w-5xl gap-x-8 gap-y-8 md:grid-cols-2 lg:gap-y-16">
        {episodes.map((episode: any) => (
          <div key={episode._id}>
            <Link href={`/podcast/${episode.slug.current}`}>
              <img
                src={urlFor(episode.coverImage).url()}
                alt=""
                className="mb-4 aspect-video w-full rounded-xl"
              />
              <div>
                <p className="text-sm lg:text-base">
                  S{" "}
                  {episode.season.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                  })}{" "}
                  • E{" "}
                  {episode.episodeNumber.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                  })}
                </p>
                <h2 className="text-lg font-semibold lg:w-[90%] lg:text-xl">
                  {episode.title}
                </h2>
                <p className="mt-1 text-sm uppercase text-gray-300">
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
    </div>
  );
}
