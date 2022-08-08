import Link from "next/link";
import { FC } from "react";

interface Props {
  post: any;
}

const BlogCard: FC<Props> = ({ post }) => {
  const { seo, slug } = post;

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
      <a className="flex flex-col">
        <img
          src={url}
          alt=""
          className="aspect-video w-full rounded-lg object-cover"
        />
        <div className="mt-2">
          <h3 className="font-semibold uppercase" title={title}>
            {title}
          </h3>
          <p className="hidden lg:truncate">{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
