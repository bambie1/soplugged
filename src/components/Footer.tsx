import { Instagram, Twitter, X, Youtube } from "lucide-react";
import Link from "next/link";

const communityLinks = [
  { href: "/our-story", label: "Our story" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/podcast", label: "TBM Podcast" },
  { href: "/join", label: "Join the community" },
];

const locationLinks = [
  { href: "/toronto", label: "Toronto" },
  { href: "/vancouver", label: "Vancouver" },
  { href: "/montreal", label: "Montreal" },
  { href: "/calgary", label: "Calgary" },
  { href: "/edmonton", label: "Edmonton" },
  { href: "/ottawa", label: "Ottawa" },
];

const categoryLinks = [
  { href: "/beauty", label: "Beauty" },
  { href: "/fashion", label: "Fashion" },
  { href: "/food", label: "Food" },
  { href: "/health", label: "Health" },
  { href: "/home", label: "Home" },
  { href: "/kids", label: "Kids" },
  { href: "/services", label: "Services" },
  { href: "/tech", label: "Tech" },
];

export const Footer = () => {
  return (
    <div className="mt-auto bg-black text-white">
      <div className="padded py-10 lg:pt-20">
        <img
          src="/logos/soplugged.svg"
          alt="SoPlugged logo"
          className="mb-4 h-8 lg:h-10"
        />
        <p>Empowering Black entrepreneurs and creators in Canada</p>

        <div className="mt-10 flex flex-wrap gap-10 lg:mt-20 lg:gap-20">
          <div className="min-w-40">
            <p className="font-bold uppercase">SoPlugged</p>

            <ul className="mt-4 space-y-2 opacity-80">
              {communityLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold uppercase">Locations</p>

            <ul className="mt-4 space-y-2 opacity-80">
              <li>
                <Link href="/directory">View all locations</Link>
              </li>
              {locationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={`/directory${link.href}`}>
                    Black-owned businesses in {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold uppercase">Categories</p>

            <ul className="mt-4 space-y-2 opacity-80">
              <li>
                <Link href="/directory">View all categories</Link>
              </li>
              {categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link href={`/directory${link.href}`}>
                    Black-owned {link.label} businesses
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold uppercase">Follow us online</p>

            <ul className="mt-4 flex flex-wrap items-center gap-4 opacity-80">
              <Link href="https://www.instagram.com/soplugged/">
                <Instagram size={24} />
              </Link>
              <Link href="https://www.instagram.com/soplugged/">
                <Twitter size={24} />
              </Link>
              <Link href="https://www.instagram.com/soplugged/">
                <Youtube size={24} />
              </Link>
            </ul>
          </div>
        </div>

        <hr className="my-10 opacity-40" />
        <div className="flex flex-wrap items-center justify-between gap-4 opacity-70">
          <p>2024 SoPlugged. All rights reserved</p>

          <div className="flex items-center gap-4">
            {[
              { href: "/policies/privacy", label: "Privacy" },
              {
                href: "/policies/terms-and-conditions",
                label: "Terms & Conditions",
              },
              { href: "/sitemap", label: "Sitemap" },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
