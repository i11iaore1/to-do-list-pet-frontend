import { DateInput as AriaDateInput, DateSegment } from "react-aria-components";

import s from "./Input.module.css";

interface DateInputProps {
  slot?: "start" | "end";
}

const Input = (props: DateInputProps) => {
  return (
    <AriaDateInput {...props} className={s["date-input"]}>
      {(segment) => <DateSegment segment={segment} className={s["segment"]} />}
    </AriaDateInput>
  );
};

export default Input;
