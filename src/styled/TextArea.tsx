import { forwardRef } from "react";

type Props = {
  label: string;
  name: string;
  helperText?: string;
} & React.ComponentProps<"textarea">;

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, name, helperText, ...props }, ref: any) => {
    return (
      <div className="flex flex-col">
        <label
          htmlFor={name}
          className="mb-1 block text-left text-sm font-semibold uppercase"
        >
          {label} {props.required && <span className="text-red-500">*</span>}
        </label>
        <textarea
          id={name}
          ref={ref}
          {...props}
          className="placeholder-italic placeholder-text-slate-400 min-h-40 rounded-xl border border-primary p-4 text-base transition duration-150 focus:border-primary focus:ring-primary"
        />
        <span className="text-sm italic">{helperText}</span>
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
