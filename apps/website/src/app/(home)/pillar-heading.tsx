import clsx from "clsx";
import Link from "next/link";

export const PillarHeading = ({
  title,
  subTitle,
  link,
  isLight,
}: {
  title: string;
  subTitle: string;
  link: { href: string; text: string };
  isLight?: boolean;
}) => {
  return (
    <div className="padded">
      <div
        className={clsx(
          "flex flex-wrap items-center justify-between gap-6 lg:gap-10",
          isLight ? "text-slate-800" : "text-yellow-50",
        )}
      >
        <div className="flex max-w-2xl flex-col items-start">
          <p className="mb-2 font-medium opacity-70">{subTitle}</p>
          <p className="max-w-2xl text-4xl tracking-tight lg:mb-8 lg:text-4xl xl:text-5xl">
            {title}
          </p>
        </div>

        <Link
          href={link.href}
          className={clsx(
            "underline underline-offset-8 transition-all duration-150 hover:underline-offset-4 lg:py-8",
            isLight ? "decoration-slate-400" : "decoration-yellow-100",
          )}
        >
          {link.text}
        </Link>
      </div>
    </div>
  );
};
