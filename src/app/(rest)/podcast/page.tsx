import { Header } from "@/components/Header";
import { SubscribeBanner } from "@/components/shared/SubscribeBanner";
import { client } from "@/sanity/lib/client";
import { EPISODES_QUERY, PODCAST_PAGE_QUERY } from "./queries";
import { urlFor } from "@/sanity/lib/image";

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

            <div className="mt-10 h-20 border border-white/10"></div>
          </div>
        </div>
      </div>
      <div className="mx-auto -mt-36 aspect-video w-full max-w-3xl overflow-hidden rounded-xl border bg-white">
        <img src={urlFor(latestEpisode.coverImage).url()} alt="" />
      </div>
      <div className="mt-20"></div>
      <SubscribeBanner
        title="Never miss another episode"
        subtitle="On this podcast, we amplify the stories of Black entrepreneurs in Canada as we explore their journey to building a successful business."
      />
    </>
  );
}
