import Link from "next/link";
import { forwardRef } from "react";

type IProps = {
  variant?: "outlined" | "filled" | "text";
  className?: string;
} & React.ComponentProps<"a">;

const ButtonLink = forwardRef<HTMLAnchorElement, IProps>(
  ({ variant, href, type, className, children, ...props }, ref: any) => {
    const linkStyles = () => {
      let styleStr = "button group";
      if (variant === "outlined") styleStr += " outlined";
      else if (variant === "filled") styleStr += " filled";
      else styleStr += " text ";

      return styleStr;
    };

    return (
      (<Link href={href || "#"} {...props} className={`${linkStyles()} ${className}`}>

        {children}

      </Link>)
    );
  }
);

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
