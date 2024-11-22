import BlogCard from "@/components/shared/BlogCard";
import Link from "next/link";

export const RecentBlogs = ({ posts }: { posts: any[] }) => {
  return (
    <div className="page-section bg-white text-black" id="connect">
      <div className="padded">
        <div className="flex items-center justify-between gap-10">
          <div className="flex max-w-2xl flex-col items-start">
            <p className="mb-2 font-medium text-slate-800 opacity-70">
              Latest Blog Posts
            </p>
            <p className="mb-8 max-w-2xl text-2xl tracking-tight lg:text-4xl xl:text-5xl">
              Helpful resources to grow your business as an entrepreneur{" "}
            </p>
          </div>

          <Link
            href="/events"
            className="py-8 underline decoration-slate-400 underline-offset-8 transition-all duration-150 hover:underline-offset-4"
          >
            See all posts
          </Link>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          {posts.map((post: any) => (
            <BlogCard post={post} key={post.title} />
          ))}
        </div>
      </div>
    </div>
  );
};
