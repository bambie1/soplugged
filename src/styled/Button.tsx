import { forwardRef } from "react";

type Props = {
  variant?: string;
  color?: string;
  isForm?: boolean;
} & React.ComponentProps<"button">;

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant, isForm, children, ...props }, ref: any) => {
    const buttonStyles = () => {
      let styleStr = "button";
      if (variant === "outlined") styleStr += " outlined";
      else if (variant === "text") styleStr += " text";
      else styleStr += " filled";

      if (isForm) styleStr += " leading-[2.5rem] rounded-xl";

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
