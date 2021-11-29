import { forwardRef } from "react";

type Props = {
  variant?: string;
  color?: string;
} & React.ComponentProps<"button">;

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, ref: any) => {
    return (
      <button className="button filled" {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
