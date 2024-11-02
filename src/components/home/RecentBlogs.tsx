import BlogCard from "../shared/BlogCard";

export const RecentBlogs = ({ posts }: { posts: any[] }) => {
  return (
    <div className="page-section bg-[#EAECF6] text-black">
      <div className="padded">
        <p>OUR BLOG</p>
        <h2 className="mb-2 mt-4">The Business corner</h2>
        <p className="mb-10">
          SoPlugged updates, and helpful resources to grow your business as an
          entrepreneur
        </p>
        <div className="grid gap-10 lg:grid-cols-3">
          {posts.map((post: any) => (
            <BlogCard post={post} key={post.title} />
          ))}
        </div>
      </div>
    </div>
  );
};
