import perscholas from "../assets/perscholas.svg";

export default function Header({ className }) {
  className = className ? className + " " : "";
  className += "p-5 lg:absolute";
  return (
    <header className={className}>
      <a href="https://perscholas.org/" target="_blank">
        <img src={perscholas} alt="Per Scholas" />
      </a>
    </header>
  );
}
