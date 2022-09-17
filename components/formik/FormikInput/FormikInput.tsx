import { FC, ComponentProps } from "react";
import { useField } from "formik";

type Props = {
  label: string;
  prefix?: string;
  optional?: boolean;
} & ComponentProps<"input">;

const FormikInput: FC<Props> = ({ label, prefix, optional, ...props }: any) => {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  const isError = (meta.touched || !meta.initialValue) && meta.error;

  const baseInput = () => (
    <input
      {...field}
      {...props}
      className={`block w-full rounded-xl border border-primary bg-white p-4 transition duration-150 placeholder:text-gray-300 focus:shadow-input-focus focus:outline-2 focus:outline-primary/70 ${
        isError &&
        "border-red-500 placeholder:text-red-200 focus:shadow-error-focus focus:outline-red-500/70"
      }`}
    />
  );

  const renderInput = () => {
    if (prefix) {
      return (
        <div
          className={`flex items-center rounded-xl border border-primary bg-white pl-4 ${
            isError && "border-red-500"
          }`}
        >
          <span className="pr-3 lowercase text-gray-500">{prefix}</span>
          {baseInput()}
        </div>
      );
    }

    return baseInput();
  };

  return (
    <>
      <label
        className={`mb-1 block text-sm font-medium uppercase lg:text-base ${
          isError && "text-red-500"
        }`}
      >
        <span className="mb-1 inline-flex">{label}</span>{" "}
        {optional && (
          <span className="mb-2 font-normal normal-case">(Optional)</span>
        )}
        {renderInput()}
        {isError ? (
          <div className="mt-[.125rem] text-xs font-normal normal-case text-red-500 lg:text-sm">
            {meta.error}
          </div>
        ) : null}
      </label>
    </>
  );
};

export { FormikInput };
