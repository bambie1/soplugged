import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="padded pb-10 pt-20">
        <img
          src="soplugged.svg"
          alt="SoPlugged logo"
          className="mb-4 h-8 lg:h-10"
        />
        <p>Empowering Black entrepreneurs and creators in Canada</p>

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
