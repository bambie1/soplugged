import { ArrowLeftIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

type Props = {
  color?: "primary";
  isSmall?: boolean;
  href?: string;
} & React.ComponentProps<"button">;

const BackArrowButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, color, href, isSmall, ...props }, ref: any) => {
    return (
      <button
        className={`group inline-flex items-center gap-2 text-primary transition duration-200 group-hover:font-medium group-hover:text-gray-300 md:items-center ${
          !isSmall && "lg:text-lg"
        }`}
        {...props}
        ref={ref}
      >
        <ArrowLeftIcon
          className="h-6 w-6 transition duration-200 group-hover:-translate-x-1"
          strokeWidth={0.7}
        />
        {children}
      </button>
    );
  }
);

BackArrowButton.displayName = "BackArrowButton";

export { BackArrowButton };
