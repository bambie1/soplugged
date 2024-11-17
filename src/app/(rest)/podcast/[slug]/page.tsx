import type { Metadata } from "next";
import Link from "next/link";
import type { PortableTextComponents } from "next-sanity";
import { PortableText, toPlainText } from "next-sanity";
import slugify from "slugify";

import { TableOfContents } from "@/components/blog/TableOfContents";
import { Header } from "@/components/Header";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { getDate } from "@/utils/getDate";

import { EPISODE_QUERY, EPISODES_QUERY } from "../queries";

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
      <Header isDark />

      <div className="relative flex h-[80vh] w-full flex-col justify-end text-white">
        <img
          src={urlFor(content.coverImage).url()}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
        />

        <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#5D1344]/20 to-[#141414]" />

        <div className="padded z-20 py-10">
          <div className="mb-10 flex items-center gap-4">
            <Link href="/podcast" className="underline opacity-70">
              TBM Podcast
            </Link>
            <p>{content.businessName}</p>
          </div>
          <h1 className="mb-10 max-w-3xl lg:mb-16">{content.title}</h1>
        </div>
      </div>

      <div className="text-white">
        <div className="padded">
          <div className="prose prose-invert mb-20">
            <div>Youtube</div>
            <hr />
            <PortableText value={content.body} components={components} />
          </div>
        </div>
      </div>
    </div>
  );
}
