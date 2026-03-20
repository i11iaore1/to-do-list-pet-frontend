import clsx from "clsx";
import s from "./Button.module.css";

interface ButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={clsx(s["button"], props.className)}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
