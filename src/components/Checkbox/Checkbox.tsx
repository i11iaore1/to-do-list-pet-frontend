import clsx from "clsx";
import s from "./Checkbox.module.css";

interface CheckboxProps {
  ref?: any;
  label?: string;
  className?: string;
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <label className={clsx(s["input-container"], props.className)}>
      <input
        {...(props.ref !== undefined && { ref: props.ref })}
        type="checkbox"
        className={s["input"]}
      />
      <div className={s["facade"]}></div>
      {props.label && (
        <span className="flex w-fit items-center text-fa">{props.label}</span>
      )}
    </label>
  );
};

export default Checkbox;
