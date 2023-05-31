import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

import { BlogPost } from "@/types/BlogPost";
import CategoryPill from "./CategoryPill";

interface Props {
  post: BlogPost;
}

const MostRecentBlogCard: FC<Props> = ({ post }) => {
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
    <Link href={`/blog/${slug}`}>
      <a className="group flex h-full flex-col items-center gap-4 lg:flex-row lg:gap-8">
        <div className="relative aspect-video w-full flex-shrink-0 overflow-hidden rounded-lg border border-white object-cover shadow-none transition duration-200 group-hover:scale-[99%] group-hover:border-accent lg:w-[50%]">
          <Image
            src={blogImage.url}
            alt={blogImageAlt}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcPGlSPQAFrwI48uvwCAAAAABJRU5ErkJggg==`}
            priority
          />
        </div>
        <div className="flex flex-col">
          <h3
            className="text-xl font-semibold transition duration-200 group-hover:text-primary group-hover:underline md:font-bold lg:text-3xl xl:text-4xl"
            title={title}
          >
            {title}
          </h3>
          <div className="mt-2 flex flex-wrap gap-3 xl:mt-4">
            {categories.map((category) => (
              <CategoryPill key={category.title} category={category} isTiny />
            ))}
          </div>
          <p className="mt-2 mb-1 text-gray-600 line-clamp-4 xl:mt-6">
            {excerpt}
          </p>

          <div className="mt-6">
            <div className="flex items-center gap-3">
              <div className="relative aspect-square w-8 flex-shrink-0 overflow-hidden rounded-full bg-gray-400">
                <Image
                  src={post.author.picture.url}
                  layout="fill"
                  objectFit="cover"
                  alt={`Profile picture for ${post.author.name}`}
                />
              </div>
              <div>
                <p>{author.name}</p>
                <p className="text-gray-600">
                  {new Date(createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default MostRecentBlogCard;
