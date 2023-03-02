import { FC } from "react";

import { BlogPost } from "@/types/BlogPost";
import BlogCard from "./BlogCard";

interface Props {
  posts: BlogPost[];
}

const BlogList: FC<Props> = ({ posts }) => {
  return (
    <ul className="inline-flex w-full flex-wrap gap-8 md:grid md:grid-cols-2 xl:gap-12 xl:gap-y-20">
      {posts?.map((post) => {
        return (
          <li key={post.slug} className="w-full border-b-2 md:border-none">
            <BlogCard post={post} />
          </li>
        );
      })}
    </ul>
  );
};

export default BlogList;
