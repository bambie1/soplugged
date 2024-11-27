import BlogCard from "@/components/shared/BlogCard";

import { PillarHeading } from "./pillar-heading";

export const RecentBlogs = ({ posts }: { posts: any[] }) => {
  return (
    <div className="page-section bg-white text-black" id="connect">
      <PillarHeading
        subTitle="Recent Blog Posts"
        title="Helpful resources to grow your business as an entrepreneur"
        link={{ href: "/blog", text: "See all posts" }}
        isLight
      />

      <div className="padded mt-10 grid gap-10 lg:grid-cols-3">
        {posts.map((post: any) => (
          <BlogCard post={post} key={post.title} />
        ))}
      </div>
    </div>
  );
};
