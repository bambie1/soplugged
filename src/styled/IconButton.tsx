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
        className={classNames("button", { text: isText, outlined: isOutlined })}
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
