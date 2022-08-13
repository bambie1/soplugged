import * as React from "react";
import Link, { LinkProps } from "next/link";
import classNames from "classnames";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  type: "filled" | "outlined" | "text";
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: "button";
  };

type ButtonAsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {
    as: "link";
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps): JSX.Element {
  const { type, className } = props;
  const allClassNames = classNames(`${className}`, {
    "bg-primary": type == "filled",
    "hover:bg-gray-200": type == "text",
  });

  if (props.as === "link") {
    const { className, type, as, children, ...rest } = props;
    return (
      <Link {...rest}>
        <a className={allClassNames}>{children}</a>
      </Link>
    );
  } else {
    const { className, type, as, ...rest } = props;
    return (
      <button className={`${allClassNames} disabled:bg-gray-200`} {...rest} />
    );
  }
}
