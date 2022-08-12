import Link from "next/link";
import { FC } from "react";

interface Props {
  tertiary?: boolean;
}

const footerMenu = [
  { title: "Find a business", href: "/search" },
  { title: "Add your business", href: "/my-business" },
  { title: "Our story", href: "/our-story" },
];

const Footer: FC<Props> = ({ tertiary }) => {
  return (
    <footer
      className={`mt-auto flex flex-col bg-gradient-to-t to-white pt-20 pb-10 ${
        tertiary ? "from-accent" : "from-secondary"
      }`}
    >
      <div className="my-container grid w-full lg:grid-cols-7">
        <div className="col-span-2">
          <p className="font-bold">Menu</p>
          <ul className="mt-4 flex flex-col gap-2">
            {footerMenu.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <a>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-3">
          <p className="font-bold">Heard about SoPluggedPro yet?</p>
          <p className="mt-4 max-w-[80%]">
            Let our team of experts build or improve your business’s digital
            presence with slick websites and/or social media marketing content
          </p>
        </div>
        <div className="col-span-2">
          <p className="font-bold">Got a question?</p>
          <p className="mt-4">
            Send us an e-mail at hello@soplugged.com Or connect with us on IG
          </p>
        </div>
      </div>

      <p className="mt-10 text-center">
        Copyright&copy; {new Date().getFullYear()}, SoPlugged
      </p>
    </footer>
  );
};

export default Footer;
