import { forwardRef } from "react";
import classNames from "classnames";

type Props = {
  title?: string;
  isText?: boolean;
  isOutlined?: boolean;
} & React.ComponentProps<"button">;

const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ title, children, isText, isOutlined, ...rest }, ref: any) => {
    return (
      <button
        className={classNames(
          "inline-flex items-center justify-center gap-3 rounded-lg border px-4 py-2  transition duration-200 focus:outline-none focus:ring",
          {
            "border-transparent text-primary hover:bg-gray-100": isText,
            "border-primary text-primary hover:border-transparent hover:bg-primary-100":
              isOutlined,
            "": !(isOutlined || isText),
          }
        )}
        {...rest}
      >
        {title && <span className="font-medium">{title}</span>}
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };
