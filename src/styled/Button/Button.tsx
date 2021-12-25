import { forwardRef } from "react";

type Props = {
  variant?: string;
  color?: string;
  big?: boolean;
} & React.ComponentProps<"button">;

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant, big, children, ...props }, ref: any) => {
    const buttonStyles = () => {
      let styleStr = "button";
      if (variant === "outlined") styleStr += " outlined";
      else if (variant === "text") styleStr += " text";
      else styleStr += " filled";

      if (big) styleStr += " big";

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

export default Button;
