import classNames from "classnames";

export default function Heading({ className, title }) {
  return (
    <div className={classNames(className, "relative")}>
      <div aria-hidden className="absolute inset-0 flex w-full items-center">
        <hr className="w-full" />
      </div>
      <div className="relative flex justify-center">
        <span className="inline-block bg-white px-6">{title}</span>
      </div>
    </div>
  );
}
