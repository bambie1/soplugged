import type { Metadata } from "next";
import { PortableText } from "next-sanity";

import { PageHeader } from "@/components/shared/PageHeader";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { EVENT_QUERY, EVENTS_QUERY } from "@/sanity/lib/queries";
import { getDate } from "@/utils/getDate";

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
    openGraph: {
      images: [urlFor(content.image).url()],
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

  const content = await client.fetch(EVENT_QUERY, { slug });

  if (!content) {
    return null;
  }

  return (
    <>
      <PageHeader
        title={content.name}
        description={`${getDate(content.publishedAt)} | ${content.author?.name}`}
      />
      <div className="padded mb-20">
        <div className="prose mx-auto">
          <PortableText value={content.details} />
        </div>
      </div>
    </>
  );
}
