export const FeaturedEvent = ({
  event,
  title,
}: {
  event: any;
  title: string;
}) => {
  return (
    <div className="bg-light py-8 text-black">
      <div className="padded flex flex-wrap items-center justify-center gap-4 lg:gap-10">
        <p className="text-center text-lg font-bold">{title}</p>
        <a
          href={event.ctaLink}
          className="rounded-full bg-black p-4 font-medium text-white"
        >
          {event.ctaLabel}
        </a>
      </div>
    </div>
  );
};
