import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";

const BlogCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug.current}`} key={post.title}>
      <article key={post.title}>
        <img
          src={urlFor(post.mainImage).url()}
          alt=""
          className="mb-4 aspect-video rounded-lg object-cover"
        />
        <p className="text-sm">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="text-lg font-semibold">{post.title}</p>
      </article>
    </Link>
  );
};

export default BlogCard;
