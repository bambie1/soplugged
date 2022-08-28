import Link from "next/link";
import { forwardRef } from "react";

type Props = {
  color?: "primary";
  isSmall?: boolean;
  href?: string;
} & React.ComponentProps<"button">;

const ArrowButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, color, href, isSmall, ...props }, ref: any) => {
    if (!href)
      return (
        <button
          className={`hidden items-center gap-2 border-b border-transparent transition duration-200 group-hover:font-medium ${
            color === "primary" && "text-primary group-hover:border-primary"
          } group-hover:border-black md:items-center lg:inline-flex ${
            !isSmall && "lg:text-lg"
          }`}
        >
          {children}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </button>
      );

    return (
      <Link href={href}>
        <a
          className={`group hidden items-center gap-2 border-b border-transparent transition duration-200 ${
            color === "primary" && "text-primary group-hover:border-primary"
          } md:items-center lg:inline-flex ${!isSmall && "lg:text-lg"}`}
        >
          {children}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </a>
      </Link>
    );
  }
);

ArrowButton.displayName = "ArrowButton";

export { ArrowButton };
