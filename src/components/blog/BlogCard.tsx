import Image from "next/legacy/image";
import Link from "next/link";
import { FC } from "react";

import { BlogPost } from "@/types/BlogPost";

import CategoryPill from "./CategoryPill";

interface Props {
  post: BlogPost;
}

const BlogCard: FC<Props> = ({ post }) => {
  const {
    excerpt,
    blogImage,
    blogImageAlt,
    slug,
    createdAt,
    title,
    categories,
    author,
  } = post;

  return (
    (<Link href={`/blog/${slug}`} className="group flex h-full flex-col">

      <div className="relative aspect-video w-full flex-shrink-0 overflow-hidden rounded-lg border border-white object-cover shadow-none transition duration-200 group-hover:scale-[99%] group-hover:border-primary">
        <Image
          src={blogImage.url}
          alt={blogImageAlt}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcPGlSPQAFrwI48uvwCAAAAABJRU5ErkJggg==`}
        />
      </div>
      <div className="mt-3 flex h-full flex-1 flex-col">
        <h3
          className="text-lg font-semibold transition duration-200 group-hover:text-primary group-hover:underline lg:text-xl"
          title={title}
        >
          {title}
        </h3>
        <div className="mt-1 mb-4 flex flex-wrap gap-3">
          {categories.map((category) => (
            <CategoryPill category={category} isTiny key={category.title} />
          ))}
        </div>

        <div>
          <p className="lg:text-base">{author.name}</p>
          <p className="text-sm text-gray-600 lg:text-sm">
            {new Date(createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

    </Link>)
  );
};

export default BlogCard;
