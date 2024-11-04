import type { Metadata } from "next";

import BlogCard from "@/components/shared/BlogCard";
import { PageHeader } from "@/components/shared/PageHeader";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

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
      <PageHeader
        preTitle="Our blog"
        title="The Business Corner"
        description="Welcome to our blog"
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
