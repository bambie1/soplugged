import Link from "next/link";

export const PillarHeading = ({
  title,
  subTitle,
  link,
}: {
  title: string;
  subTitle: string;
  link: { href: string; text: string };
}) => {
  return (
    <div className="padded">
      <div className="flex flex-wrap items-center justify-between gap-6 lg:gap-10">
        <div className="flex max-w-2xl flex-col items-start">
          <p className="mb-2 font-medium text-yellow-50 opacity-70">
            {subTitle}
          </p>
          <p className="max-w-2xl text-4xl tracking-tight lg:mb-8 lg:text-4xl xl:text-5xl">
            {title}
          </p>
        </div>

        <Link
          href={link.href}
          className="underline decoration-yellow-100 underline-offset-8 transition-all duration-150 hover:underline-offset-4 lg:py-8"
        >
          {link.text}
        </Link>
      </div>
    </div>
  );
};
