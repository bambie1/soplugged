import type { Metadata } from "next";

import { Nav } from "@/components/nav";
import BlogCard from "@/components/shared/BlogCard";
import { PageHeader } from "@/components/shared/PageHeader";
import { client } from "@/sanity/lib/client";

import { POSTS_QUERY } from "./queries";

export const metadata: Metadata = {
  title: "The Business Corner | SoPlugged Blog",
  description: "Empowering Black entrepreneurs & creators",
};

export default async function BlogPage() {
  const content = await client.fetch(POSTS_QUERY);

  if (!content) {
    return null;
  }

  return (
    <>
      <Nav />

      <PageHeader
        title="The Business Corner"
        description="SoPlugged updates, and helpful resources to grow your business as an entrepreneur"
      />
      <div className="padded mb-20">
        <div className="grid gap-10 lg:grid-cols-3">
          {content.map((post: any) => (
            <BlogCard post={post} key={post.title} />
          ))}
        </div>
      </div>
    </>
  );
}
