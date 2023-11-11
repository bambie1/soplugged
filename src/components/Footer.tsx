import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

const navigation = {
  main: [
    { name: "Our Story", href: "/our-story" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Partners", href: "/partners" },
    { name: "Blog", href: "/blog" },
  ],
  external: [
    { name: "PluggedIn Conference", href: "/pluggedin" },
    {
      name: "SoPlugged Studio",
      href: "https://studio.soplugged.com/",
      isExternal: true,
    },
    {
      name: "TBM Podcast",
      href: "https://tbmpodcast.soplugged.com/",
      isExternal: true,
    },
    { name: "Business Directory", href: "/search/all" },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/sopluggd/",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/sopluggd",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@tbm_pod",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email, first_name: "", last_name: "" }),
    });

    toast.success("Successfully subscribed!", {
      position: "top-center",
    });

    setEmail("");
  };

  return (
    <footer className="bg-primary" aria-labelledby="footer-heading">
      <div className="my-container pb-8 pt-14">
        <Link href="/">
          <a className="mb-10 inline-flex flex-shrink-0 items-center gap-2 text-white">
            <Image
              src="/logos/logo-white.svg"
              alt="SoPlugged Logo"
              width={40}
              height={40}
            />
            <span className="text-2xl font-medium tracking-tight">
              SoPlugged
            </span>
          </a>
        </Link>

        <div className="grid gap-4 md:mt-10 md:grid-cols-2">
          <div className="grid gap-8 md:grid-cols-2 md:gap-4">
            <ul role="list" className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="leading-6 text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <hr className="opacity-10 md:hidden" />
            <ul role="list" className="space-y-4">
              {navigation.external.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="leading-6 text-gray-300 hover:text-white"
                    target={item.isExternal ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 max-w-md lg:mt-0">
            <h3 className="font-semibold leading-6 text-white lg:text-lg">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 leading-6 text-gray-300">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className="mt-6 sm:flex" onSubmit={handleSubscribe}>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="sm: w-full min-w-0 appearance-none rounded-md border-0 bg-transparent px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/50 placeholder:text-white/30 focus:ring-2 focus:ring-inset focus:ring-white sm:w-64 sm:leading-6 xl:w-full"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-white px-4 py-2 font-semibold text-primary shadow-sm hover:bg-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="my-container mt-8 border-t border-white/10 py-8 md:flex md:items-center md:justify-between lg:mt-16">
        <div className="flex space-x-6 md:order-2">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white/70"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 leading-5 text-white/70 md:order-1 md:mt-0">
          &copy; {new Date().getFullYear()}, SoPlugged
        </p>
      </div>
    </footer>
  );
}
