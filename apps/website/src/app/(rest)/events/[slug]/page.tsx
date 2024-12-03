import type { Metadata } from "next";
import { PortableText } from "next-sanity";

import { Nav } from "@/components/nav";
import { client } from "@/sanity/lib/client";
import { getDate } from "@/utils/getDate";

import { EVENT_QUERY, EVENTS_QUERY } from "../queries";

export async function generateStaticParams() {
  const posts = await client.fetch(EVENTS_QUERY);

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
  const content = await client.fetch(EVENT_QUERY, { slug });

  return {
    title: `${content.name} | SoPlugged Blog`,
    // openGraph: {
    //   images: [urlFor(content.image).url()],
    //   description: content.excerpt,
    // },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const content = await client.fetch(EVENT_QUERY, { slug });

  if (!content) {
    return null;
  }

  return (
    <div className="relative z-10">
      <Nav isLight />

      <div className="absolute left-0 top-0 -z-10 h-80 w-full bg-gradient-to-b from-[#F2EDE3] to-white"></div>

      <div className="mx-auto flex max-w-3xl flex-col items-center pb-20 pt-40 text-center text-primary lg:pt-48">
        <div className="flex items-center gap-1 p-2 font-medium">
          {getDate(content.date)}
        </div>
        <h1 className="large mb-4 mt-4">{content.name}</h1>
        <p className="lg:text-lg">
          Join us at events for Black entrepreneurs and creators
        </p>
      </div>

      <div className="padded mb-20">
        <div className="prose mx-auto">
          <img
            src="/events_filler.jpeg"
            alt=""
            className="aspect-video rounded-lg"
          />
          <PortableText value={content.details} />
        </div>
      </div>
    </div>
  );
}
