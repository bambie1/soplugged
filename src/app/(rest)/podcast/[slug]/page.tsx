import type { Metadata } from "next";
import type { PortableTextComponents } from "next-sanity";
import { PortableText, toPlainText } from "next-sanity";
import slugify from "slugify";

import { Nav } from "@/components/nav";
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

const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => {
      // `value` is the single Portable Text block for this header
      const slug = slugify(toPlainText(value));
      return <h2 id={slug}>{children}</h2>;
    },
    h3: ({ children, value }) => {
      const slug = slugify(toPlainText(value));
      return <h3 id={slug}>{children}</h3>;
    },
  },
};

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
    <div className="bg-black">
      <Nav isDark />

      <PodcastHero content={content} />

      <div className="padded">
        <div className="prose prose-invert mb-20">
          <div>Youtube</div>
          <hr />
          <PortableText value={content.body} components={components} />
        </div>
      </div>
    </div>
  );
}
