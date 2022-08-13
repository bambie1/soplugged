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
  if (props.as === "link") {
    const { className, type, as, children, ...rest } = props;
    return (
      <Link {...rest}>
        <a
          className={classNames(
            `inline-flex items-center rounded-md border border-transparent px-4 py-2 transition duration-200 focus:outline-none ${className}`,
            {
              "rounded-md bg-primary text-white shadow-sm": type == "filled",
              "hover:bg-gray-100 focus:border-primary focus:bg-gray-100":
                type == "text",
              "focus:ring-2 focus:ring-primary focus:ring-offset-2":
                type !== "text",
            }
          )}
        >
          {children}
        </a>
      </Link>
    );
  } else {
    const { className, type, as, ...rest } = props;
    return <button className={`disabled:bg-gray-200`} {...rest} />;
  }
}
