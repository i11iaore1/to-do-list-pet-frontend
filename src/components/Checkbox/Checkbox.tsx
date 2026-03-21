import clsx from "clsx";
import s from "./Checkbox.module.css";

interface CheckboxProps {
  // ref?: any;
  label?: string;
  className?: string;
  isChecked: boolean;
  onChange: (value: boolean) => void;
}

const Checkbox = (props: CheckboxProps) => {
  return (
    <label className={clsx(s["input-container"], props.className)}>
      <input
        // {...(props.ref !== undefined && { ref: props.ref })}
        type="checkbox"
        checked={props.isChecked}
        onChange={(e) => props.onChange(e.target.checked)}
        className={s["input"]}
      />
      <div className={s["facade"]}></div>
      {props.label && <span className={s["label"]}>{props.label}</span>}
    </label>
  );
};

export default Checkbox;
