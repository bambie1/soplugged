import { forwardRef } from "react";
import classNames from "classnames";

type Props = {
  variant?: string;
  color?: string;
  big?: boolean;
  isOutlined?: boolean;
} & React.ComponentProps<"button">;

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ isOutlined, children, ...rest }, ref: any) => {
    return (
      <button
        className={classNames(
          "inline-block rounded-lg border border-primary px-12 py-3 font-medium transition duration-200 focus:outline-none focus:ring active:text-primary",
          {
            "text-primary hover:bg-primary-100": isOutlined,
            "bg-primary text-white hover:bg-primary-900 hover:text-white":
              !isOutlined,
          }
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
