import Link from "next/link";

const communityLinks = [
  { href: "/our-story", label: "Our story" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/podcast", label: "TBM Podcast" },
];

const locationLinks = [
  { href: "/toronto", label: "Toronto" },
  { href: "/vancouver", label: "Vancouver" },
  { href: "/montreal", label: "Montreal" },
  { href: "/calgary", label: "Calgary" },
  { href: "/edmonton", label: "Edmonton" },
  { href: "/ottawa", label: "Ottawa" },
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

        <div className="mt-10 grid gap-10 lg:mt-20 xl:grid-cols-3">
          <div>
            <p className="font-bold uppercase">Community</p>

            <ul className="mt-4 space-y-2 opacity-80">
              {communityLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold uppercase">Business Directory</p>

            <ul className="mt-4 space-y-2 opacity-80">
              <li>
                <Link href="/directory">View all businesses</Link>
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
            <p className="font-bold uppercase">Support</p>
          </div>
        </div>

        <hr className="my-10 opacity-40" />
        <div className="flex flex-wrap items-center justify-between gap-4 opacity-70">
          <p>2024 SoPlugged. All rights reserved</p>

          <div className="flex items-center gap-4">
            {[
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms & Conditions" },
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
