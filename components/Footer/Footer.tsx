import Link from "next/link";
import Image from "next/image";
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
      <div className="my-container grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <Link href="/">
            <a className="flex flex-shrink-0 items-center">
              <Image
                src="/soplugged-logo.png"
                alt="SoPlugged Logo"
                width={40}
                height={40}
              />
            </a>
          </Link>
          <p className="mt-4 max-w-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            accusantium.
          </p>

          <div className="mt-8 flex space-x-6">
            <a
              className="hover:opacity-75"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only"> Instagram </span>

              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              className="hover:opacity-75"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only"> LinkedIn </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin h-6 w-6"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
          <div>
            <p className="font-medium">Company</p>

            <nav className="mt-4 flex flex-col space-y-2">
              <a className="hover:opacity-75" href="">
                About
              </a>
              <a className="hover:opacity-75" href="">
                Meet the Team
              </a>
              <a className="hover:opacity-75" href="">
                History
              </a>
              <a className="hover:opacity-75" href="">
                Careers
              </a>
            </nav>
          </div>

          <div>
            <p className="font-medium">Services</p>

            <nav className="mt-4 flex flex-col space-y-2">
              <a className="hover:opacity-75" href="">
                1on1 Coaching
              </a>
              <a className="hover:opacity-75" href="">
                Company Review
              </a>
              <a className="hover:opacity-75" href="">
                Accounts Review
              </a>
              <a className="hover:opacity-75" href="">
                HR Consulting
              </a>
              <a className="hover:opacity-75" href="">
                SEO Optimisation
              </a>
            </nav>
          </div>

          <div>
            <p className="font-medium">Helpful Links</p>

            <nav className="mt-4 flex flex-col space-y-2">
              <a className="hover:opacity-75" href="">
                Contact
              </a>
              <a className="hover:opacity-75" href="">
                FAQs
              </a>
              <a className="hover:opacity-75" href="">
                Live Chat
              </a>
            </nav>
          </div>

          <div>
            <p className="font-medium">Legal</p>

            <nav className="mt-4 flex flex-col space-y-2">
              <a className="hover:opacity-75" href="">
                Privacy Policy
              </a>
              <a className="hover:opacity-75" href="">
                Terms & Conditions
              </a>
              <a className="hover:opacity-75" href="">
                Returns Policy
              </a>
              <a className="hover:opacity-75" href="">
                Accessibility
              </a>
            </nav>
          </div>
        </div>
      </div>

      <p className="mt-10 text-center">
        Copyright&copy; {new Date().getFullYear()}, SoPlugged
      </p>
    </footer>
  );
};

export default Footer;
