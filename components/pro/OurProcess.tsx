import { DesktopComputerIcon, VideoCameraIcon } from "@heroicons/react/outline";
import Link from "next/link";

const RocketIcon = (props: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
    />
  </svg>
);

const steps = [
  {
    id: 1,
    title: "Consult call",
    description: "We learn about your business and needs",
    icon: VideoCameraIcon,
  },
  {
    id: 2,
    title: "We get to work",
    description: "We learn about your business and needs",
    icon: DesktopComputerIcon,
  },
  {
    id: 3,
    title: "Ready to launch",
    description: "We learn about your business and needs",
    icon: RocketIcon,
  },
];

const OurProcess = () => {
  return (
    <div
      id="book-consult"
      className="my-container flex flex-col items-center text-center"
    >
      <p className="font-light tracking-widest">OUR PROCESS</p>

      <h2 className="text-3xl font-semibold lg:text-4xl">
        It all starts with a consult
      </h2>

      <div className="mt-10 grid w-full gap-8 md:mt-20 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.id} className="text-left">
            <step.icon
              className="h-8 w-8"
              aria-hidden="true"
              strokeWidth={0.8}
            />
            <p className="font-medium uppercase">{step.title}</p>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

      <Link href="#book-consult">
        <a className="mt-10 rounded-md bg-black px-4 py-3 text-lg text-white transition duration-200 hover:-translate-y-1 focus-visible:outline-offset-2 xl:py-4 xl:px-5 xl:text-xl">
          Book a FREE consultation
        </a>
      </Link>
    </div>
  );
};

export default OurProcess;
