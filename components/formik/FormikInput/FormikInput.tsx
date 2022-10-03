import { FC, ComponentProps } from "react";
import { useField } from "formik";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

type Props = {
  label: string;
  prefix?: string;
  optional?: boolean;
} & ComponentProps<"input">;

const FormikInput: FC<Props> = ({ label, prefix, optional, ...props }: any) => {
  const { errorText, name, type, ...rest } = props;
  const [field, meta] = useField(props);

  const isError = (meta.touched || !meta.initialValue) && meta.error;

  return (
    <>
      <div>
        <div className="flex justify-between">
          <label
            htmlFor={name}
            className={`block text-sm lg:text-base ${
              isError ? "font-medium text-red-500" : "text-gray-700"
            }`}
          >
            {label}
          </label>
          {optional && (
            <span
              className="text-xs text-gray-500 lg:text-sm"
              id="email-optional"
            >
              Optional
            </span>
          )}
        </div>
        <div className="relative mt-1 rounded-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500">{prefix}</span>
          </div>
          <input
            {...rest}
            {...field}
            type={type || "text"}
            name={name}
            id={name}
            className={`block w-full rounded-md p-4 shadow-sm  ${
              isError
                ? "border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500"
                : "border-gray-400 placeholder:text-gray-300 focus:border-primary focus:ring-primary"
            } ${prefix && "pl-20"}`}
          />
          {isError && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon
                className="h-5 w-5 text-red-500"
                aria-hidden="true"
              />
            </div>
          )}
        </div>

        {isError && (
          <p className="text-xs text-red-600 lg:text-sm" id="email-error">
            {meta.error}
          </p>
        )}
      </div>
    </>
  );
};

export { FormikInput };
