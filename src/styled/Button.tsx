import { forwardRef } from "react";

type Props = {
  variant?: string;
  color?: string;
  leftAlign?: boolean;
} & React.ComponentProps<"button">;

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant, leftAlign, children, ...props }, ref: any) => {
    const buttonStyles = () => {
      let styleStr = "button";
      if (variant === "outlined") styleStr += " outlined";
      else if (variant === "text") styleStr += ` text ${leftAlign && "-ml-4"}`;
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
