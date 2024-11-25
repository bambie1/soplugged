import { Globe, Instagram, ThumbsDown, ThumbsUp } from "lucide-react";

export const ContactBox = ({
  ig_handle,
  website_url,
}: {
  ig_handle?: string;
  website_url?: string;
}) => {
  return (
    <div className="bg-light p-4 text-primary lg:rounded-xl">
      <p className="mb-4 text-lg font-bold text-primary">
        Shop with this business
      </p>
      <div className="grid gap-2">
        {website_url && (
          <a
            href={website_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 underline underline-offset-2"
          >
            <Globe size={20} />
            Visit website
          </a>
        )}
        {ig_handle && (
          <a
            href={`https://instagram.com/${ig_handle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 underline underline-offset-2"
          >
            <Instagram size={20} />
            Instagram page
          </a>
        )}
      </div>

      <hr className="mb-4 mt-8" />
      <p className="text-sm">
        If you've shopped with this business, would you recommend it?
      </p>

      <div className="mt-4 flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border">
          <ThumbsUp size={20} />
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border">
          <ThumbsDown size={20} />
        </div>
      </div>
    </div>
  );
};
