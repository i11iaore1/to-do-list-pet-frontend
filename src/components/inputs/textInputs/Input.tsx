import clsx from "clsx";

import s from "./Input.module.css";

export interface InputProps {
  id: string;
  type: "text" | "email" | "password";
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  className?: string;
}

export const Input = (props: InputProps) => {
  return (
    <input
      id={props.id}
      type={props.type}
      value={props.value}
      onChange={(event) => props.setValue(event.target.value)}
      placeholder={props.placeholder}
      className={clsx(s["input"], props.className)}
    />
  );
};
