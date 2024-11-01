import BlogCard from "@/components/shared/BlogCard";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function BlogPage() {
  const content = await client.fetch(POSTS_QUERY);

  if (!content) {
    return null;
  }

  return (
    <div>
      <div className="padded">
        Blog page
        <div className="grid gap-10 lg:grid-cols-3">
          {content.map((post: any) => (
            <BlogCard post={post} key={post.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
