import Link from "next/link";
import { FC } from "react";

interface Props {
  post: any;
}

const BlogCard: FC<Props> = ({ post }) => {
  const { seo, slug, createdAt } = post;

  if (!seo) return null;

  const {
    description,
    title,
    keywords,
    imageUrlSource,
    image: { url },
  } = seo;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="group flex h-full flex-col">
        <img
          src={url}
          alt=""
          loading="lazy"
          className="aspect-video w-full rounded-lg border border-white object-cover shadow-none transition duration-200 group-hover:scale-[97%] group-hover:border-accent"
        />
        <div className="mt-2 flex flex-col">
          <h3
            className="mb-2 font-semibold uppercase lg:truncate"
            title={title}
          >
            {title}
          </h3>
          <p className="mb-2 hidden text-sm lg:block lg:truncate">
            {description}
          </p>
          <p className="mt-auto text-sm">
            {new Date(createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
