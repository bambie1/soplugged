import BlogCard from "@/components/shared/BlogCard";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const content = await client.fetch(POSTS_QUERY);

  if (!content) {
    return null;
  }

  return (
    <main>
      Blog page
      <div className="padded grid gap-10 lg:grid-cols-3">
        {content.map((post: any) => (
          <BlogCard post={post} key={post.title} />
        ))}
      </div>
    </main>
  );
}
