import type { Metadata } from "next";
import { PortableText } from "next-sanity";

import { Nav } from "@/components/nav";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import { OURSTORY_PAGE_QUERY } from "./queries";

export async function generateMetadata(): Promise<Metadata> {
  const content = await client.fetch(OURSTORY_PAGE_QUERY);

  if (!content.seo) return {};

  return {
    title: `${content.seo.title} | SoPlugged`,
    openGraph: {
      description: content.seo.description,
    },
  };
}

export default async function OurStoryPage() {
  const content = await client.fetch(OURSTORY_PAGE_QUERY);

  const { images, meetTheTeam } = content;
  const moreFromSoPlugged = [
    {
      href: "/blog",
      title: "The Business Corner",
      description:
        "Our blog is full of tips and resources to help you grow your business.",
      image: images[1],
    },
    {
      href: "/podcast",
      title: "TBM Podcast",
      description:
        "Listen to our podcast for interviews with successful entrepreneurs.",
      image: images[2],
    },
  ];

  return (
    <div className="border bg-[#F9F5F1]">
      <Nav isLight />

      <div className="padded flex max-w-4xl flex-col overflow-hidden pb-20 pt-40 lg:pt-48">
        <p className="z-10 font-medium lg:text-lg">Our story</p>
        <h1 className="large z-10 mt-2 text-primary">
          Empowering Black entrepreneurs & creators
        </h1>

        <div className="relative z-10 -ml-2 mt-16 aspect-[2/1] overflow-hidden rounded-md lg:rounded-xl">
          <img
            src={images[0].asset.url}
            alt=""
            className="w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 rounded-lg bg-white/40 px-4 py-2 pr-8">
            <p className="font-semibold">Black Market</p>
            <p className="text-sm">June 2024</p>
          </div>
        </div>
      </div>
      <div className="padded max-w-4xl">
        <div className="prose mx-auto">
          <PortableText value={content.content} />
        </div>
      </div>

      <div className="my-10 flex w-screen flex-col items-center bg-[#D0E1EA] p-10 text-center lg:my-20 lg:p-16">
        <div className="mx-auto max-w-2xl">
          <p className="mb-10 text-xl font-semibold italic">
            SoPlugged events have been a game-changer for my business.
            Connecting with fellow entrepreneurs and meeting potential customers
            in such a supportive
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="h-10 w-10 rounded-full border border-black"></div>
            <div>
              <p className="font-semibold">Kennedy Anyanwu</p>
              <p className="text-sm">Owner, Mills Kitchen</p>
            </div>
          </div>
        </div>
      </div>

      <div className="padded mb-20 max-w-4xl">
        <div className="my-10 lg:my-20">
          <h2 className="mb-8">Meet the team</h2>
          <div className="mb-8 flex flex-wrap items-center gap-8">
            {meetTheTeam.members.map((member: any) => (
              <div key={member.name} className="flex flex-col gap-2">
                <img
                  src={urlFor(member.image).url()}
                  alt=""
                  className="m-0 h-60 w-60 rounded-lg object-cover"
                />
                <div>
                  <p className="m-0 font-bold">{member.name}</p>
                  <p className="m-0 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-10 lg:my-20">
          <h2 className="mb-8">More from SoPlugged</h2>

          <div className="grid gap-10 lg:grid-cols-2">
            {moreFromSoPlugged.map((item: any) => (
              <div key={item.title} className="flex flex-col gap-4">
                <img
                  src={urlFor(item.image).url()}
                  alt=""
                  className="rounded-lg object-cover"
                />
                <div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
