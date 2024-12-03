import type { Metadata } from "next";

import { TableOfContents } from "@/components/blog/TableOfContents";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
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

      <div className="padded text-white">
        <a href={content.links.youtube} target="_blank">
          <img
            src="/icons/watch_on_yt_black.svg"
            alt=""
            className="rounded-full border border-white border-opacity-30 hover:border-opacity-100"
          />
        </a>
        <hr className="my-10 max-w-3xl opacity-40" />
        <div className="mb-20 mt-10 flex flex-col gap-10 lg:flex-row lg:gap-16">
          <div className="prose prose-invert mb-20">
            <PortableText value={content.body} />
          </div>

          <div className="flex-shrink-0 lg:ml-auto lg:mt-20 lg:w-1/3 lg:max-w-sm">
            <div className="sticky top-32">
              <TableOfContents blocks={content.headings} isDark />
              <a
                href={content.links.youtube}
                target="_blank"
                className="mb-8 flex"
              >
                <img
                  src="/icons/watch_on_yt_black.svg"
                  alt=""
                  className="rounded-full border border-white border-opacity-30 hover:border-opacity-100"
                />
              </a>

              <div className="rounded-lg bg-light p-4 text-black">
                <p className="mb-2 text-lg font-semibold leading-tight tracking-tight lg:text-xl">
                  Join our newsletter for the latest business tips
                </p>
                <p className="mb-8 text-sm opacity-80">
                  Get monthly updates in your inbox. Unsubscribe at any time
                </p>

                <NewsletterForm size="small" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
