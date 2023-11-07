import { MailIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

const navigation = {
  main: [
    { name: "Our story", href: "/our-story" },
    { name: "Read our blog", href: "/blog" },
    { name: "Become a partner", href: "/partners" },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/sopluggd/",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-instagram"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://ca.linkedin.com/in/soplugged",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-linkedin h-6 w-6"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
  ],
};

const Footer = () => {
  return (
    <footer className="mt-auto flex flex-col overflow-hidden bg-primary pt-20 pb-10 text-white">
      <div className="relative mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8 2xl:max-w-screen-2xl">
        <Link href="/">
          <a className="relative -mt-7 mb-10 inline-flex aspect-square w-14 self-center transition duration-150 hover:grayscale">
            <Image
              src="/logos/logo-white-bg.svg"
              alt="SoPlugged Logo"
              layout="fill"
            />
          </a>
        </Link>

        <nav
          className="-mx-5 -my-2 flex max-w-2xl flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a href={item.href} className="lg:text-lg">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <Link href="mailto:hello@soplugged.com">
          <a className="mt-4 inline-flex items-center justify-center gap-2 text-center underline lg:text-lg">
            <MailIcon className="aspect-square w-6" strokeWidth={1} />
            Contact us
          </a>
        </Link>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              target="_blank"
              rel="noreferrer"
              href={item.href}
              className=""
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" />
            </a>
          ))}
        </div>

        <p className="mt-10 text-center">
          Copyright&copy; {new Date().getFullYear()}, SoPlugged
        </p>
      </div>
    </footer>
  );
};

export default Footer;
