import * as React from "react";
import Link, { LinkProps } from "next/link";
import classNames from "classnames";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
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

export function TextButton(props: ButtonProps): JSX.Element {
  if (props.as === "link") {
    const { className, as, children, ...rest } = props;
    return (
      <Link {...rest}>
        <a
          className={classNames(
            `inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${className}`
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
