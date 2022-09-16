import { forwardRef } from "react";
import Link from "next/link";

type IProps = {
  variant?: "outlined" | "filled" | "text";
  showArrow?: boolean;
} & React.ComponentProps<"a">;

const ButtonLink = forwardRef<HTMLAnchorElement, IProps>(
  ({ variant, showArrow, href, type, children, ...props }, ref: any) => {
    const linkStyles = () => {
      let styleStr = "button group";
      if (variant === "outlined") styleStr += " outlined";
      else if (variant === "filled") styleStr += " filled";
      else styleStr += " text";

      return styleStr;
    };

    return (
      <Link href={href || "#"}>
        <a {...props} className={linkStyles()}>
          {children}
          {showArrow && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 h-6 w-6 transition duration-200 group-hover:translate-x-1"
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
          )}
        </a>
      </Link>
    );
  }
);

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
