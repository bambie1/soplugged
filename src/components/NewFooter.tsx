import Link from "next/link";
import { FC } from "react";

interface Props {
  tertiary?: boolean;
  noBackground?: boolean;
}

const navigation = {
  main: [
    { name: "Our story", href: "/our-story" },
    { name: "Grow your business", href: "/pro" },
    { name: "Read our blog", href: "/blog" },
    { name: "Become a sponsor", href: "/sponsors" },
    { name: "Community guidelines", href: "/guidelines" },
  ],
};

const NewFooter: FC<Props> = () => {
  return (
    <footer
      className={`mt-auto flex flex-col overflow-hidden border-t border-gray-100`}
    >
      <div className="relative mx-auto flex max-w-7xl flex-col px-4 py-10 sm:px-6 lg:px-8 2xl:max-w-screen-2xl">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="border-b pb-1 text-primary hover:border-primary lg:text-lg"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
      </div>

      <div className="bg-gray-100/50">
        <div className="my-container flex items-center justify-between gap-10 py-4">
          <p className="text-sm lg:text-base">
            &copy; {new Date().getFullYear()}. SoPlugged
          </p>

          <Link href="/pro">
            <a className="text-sm font-medium text-primary underline lg:text-base">
              By SoPlugged Pro
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
