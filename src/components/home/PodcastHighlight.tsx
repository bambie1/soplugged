import Link from "next/link";

export const PodcastHighlight = ({ content }: { content: any }) => {
  return (
    <div className="page-section">
      <div className="padded">
        <p className="mb-6 uppercase tracking-wide">
          The Business Mindset Podcast
        </p>
        <div className="flex justify-between gap-10">
          <div>
            <h2 className="mb-4">{content.title}</h2>
            <p className="max-w-2xl">{content.description}</p>
          </div>

          <Link href="/podcast" className="underline">
            See all episodes
          </Link>
        </div>
      </div>
    </div>
  );
};
