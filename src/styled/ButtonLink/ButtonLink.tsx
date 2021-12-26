import { forwardRef } from "react";
import Link from "next/link";

type IProps = {
  variant?: "outlined" | "filled" | "text";
  big?: boolean;
} & React.ComponentProps<"a">;

const ButtonLink = forwardRef<HTMLAnchorElement, IProps>(
  ({ variant, big, href, type, children, ...props }, ref: any) => {
    const linkStyles = () => {
      let styleStr = "button";
      if (variant === "outlined") styleStr += " outlined";
      else if (variant === "filled") styleStr += " filled";
      else styleStr += " text";

      if (big) styleStr += " big";

      return styleStr;
    };

    return (
      <Link href={href || "#"}>
        <a {...props} className={linkStyles()}>
          {children}
        </a>
      </Link>
    );
  }
);

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
