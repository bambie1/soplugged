export const PlatformContainer = ({
  imageSrc,
  imageAlt,
  href,
}: {
  imageSrc: string;
  imageAlt: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="h-16 w-16 rounded-full bg-white/20 p-[6px] opacity-70 transition duration-100 hover:opacity-100"
      title={imageAlt}
    >
      <div className="h-full w-full overflow-hidden rounded-full">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="pointer-events-none h-full object-cover"
        />
      </div>
    </a>
  );
};
