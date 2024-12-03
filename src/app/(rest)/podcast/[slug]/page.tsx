import type { Metadata } from "next";

import { Nav } from "@/components/nav";
import { PortableText } from "@/components/shared/PortableText";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import { EPISODE_QUERY, EPISODES_QUERY } from "../queries";
import { PodcastHero } from "./PodcastHero";

export async function generateStaticParams() {
  const posts = await client.fetch(EPISODES_QUERY);

  return posts.map((post: any) => ({
    slug: post.slug.current,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  // fetch data
  const content = await client.fetch(EPISODE_QUERY, { slug });

  return {
    title: `${content.title} | TBM Podcast`,
    openGraph: {
      images: [urlFor(content.coverImage).url()],
      description: content.excerpt,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const content = await client.fetch(EPISODE_QUERY, { slug });

  if (!content) {
    return null;
  }

  return (
    <div className="flex-1 bg-black">
      <Nav />

      <PodcastHero content={content} />

      <div className="padded">
        <div className="prose prose-invert mb-20">
          <div>Youtube</div>
          <hr />
          <PortableText value={content.body} />
        </div>
      </div>
    </div>
  );
}
