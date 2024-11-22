import classNames from "classnames";
import { forwardRef } from "react";

export default forwardRef(function TextField(
  {
    error,
    label,
    fullWidth = true,
    className,
    placeholder,
    helperText,
    ...inputProps
  },
  ref,
) {
  const inputClasses = classNames(
    { "border-red text-red": error },
    "border-stroke text-gray block border px-4 py-2 outline-none focus:border-sky-500 focus:text-gray active:border-sky-500 invalid:border-red invalid:text-red",
    { "w-full": fullWidth },
  );

  return (
    <div className={className}>
      <label
        htmlFor={inputProps.name}
        className="mb-2 inline-block text-sm font-medium"
      >
        {label}
      </label>
      <div className="relative">
        <input
          className={inputClasses}
          type="text"
          ref={ref}
          id={inputProps.name}
          placeholder={placeholder}
          {...inputProps}
        />
      </div>
      <p
        className={classNames("mt-2 text-sm", {
          hidden: !error,
          "text-red": error,
        })}
      >
        {(error && error.message) || helperText}
      </p>
    </div>
  );
});
