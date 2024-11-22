import classNames from "classnames";

/**
 * @param color
 * All supported classes for color props
 * bg-sky border-sky
 */
export default function Button({
  children,
  variant,
  color = "sky",
  className,
  ...props
}) {
  let classes =
    "flex items-center justify-center gap-2 py-2 px-7 disabled:bg-gray-300 disabled:border-gray-300 disabled:pointer-events-none";

  switch (variant) {
    case "contained":
      classes = classNames(
        classes,
        "text-white",
        `bg-${color} border-${color} hover:bg-sky-800`,
      );
      break;
    case "outlined":
      classes = classNames(classes, "border hover:bg-gray-200");
      break;
    default:
      // text button
      break;
  }
  return (
    <button className={classNames(classes, className)} {...props}>
      {children}
    </button>
  );
}
