import BlogCard from "../shared/BlogCard";

export const RecentBlogs = ({ posts }) => {
  return (
    <div className="page-section bg-[#EAECF6] text-black">
      <div className="padded">
        RecentBlogs
        <div className="grid gap-10 lg:grid-cols-3">
          {posts.map((post: any) => (
            <BlogCard post={post} key={post.title} />
          ))}
        </div>
      </div>
    </div>
  );
};
