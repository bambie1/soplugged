import { forwardRef } from "react";
import Link from "next/link";

type IProps = {
  variant?: "outlined" | "filled" | "text";
} & React.ComponentProps<"a">;

const ButtonLink = forwardRef<HTMLAnchorElement, IProps>(
  ({ variant, href, type, children, ...props }, ref: any) => {
    const linkStyles = () => {
      if (variant === "filled") return "button filled";
      if (variant === "outlined") return "button outlined";

      return "button text";
    };

    return (
      <Link href={href || ""}>
        <a {...props} className={linkStyles()}>
          {children}
        </a>
      </Link>
    );
  }
);

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
