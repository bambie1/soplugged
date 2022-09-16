import { forwardRef } from "react";

type Props = {
  variant?: string;
  color?: string;
} & React.ComponentProps<"button">;

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant, children, ...props }, ref: any) => {
    const buttonStyles = () => {
      let styleStr = "button";
      if (variant === "outlined") styleStr += " outlined";
      else if (variant === "text") styleStr += " text";
      else styleStr += " filled";

      return styleStr;
    };

    return (
      <button className={buttonStyles()} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
