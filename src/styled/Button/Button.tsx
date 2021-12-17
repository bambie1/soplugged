import { forwardRef } from "react";

type Props = {
  variant?: string;
  color?: string;
} & React.ComponentProps<"button">;

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant, children, ...props }, ref: any) => {
    const buttonStyles = () => {
      if (variant === "text") return "button ";
      if (variant === "outlined") return "button outlined";

      return "button filled";
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
