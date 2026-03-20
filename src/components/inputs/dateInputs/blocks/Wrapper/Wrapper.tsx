import {
  Label,
  type DatePickerProps,
  type DateRange,
  type DateRangePickerProps,
  type DateValue,
} from "react-aria-components";

import s from "./Wrapper.module.css";

type PickerComponentProps<T> = T extends DateRange
  ? DateRangePickerProps<DateValue>
  : DatePickerProps<DateValue>;

interface WrapperProps<T extends DateValue | DateRange> {
  pickerComponent: React.ComponentType<PickerComponentProps<T>>;
  label: string;
  minValue?: DateValue;
  value: T | null;
  onChange: (value: T | null) => void;
  children: React.ReactNode;
}

const Wrapper = <T extends DateValue | DateRange>(props: WrapperProps<T>) => {
  return (
    <props.pickerComponent
      className={s["wrapper"]}
      {...(props.minValue !== undefined && { minValue: props.minValue })}
      value={props.value as any}
      onChange={props.onChange as any}
    >
      <Label className={s["label"]}>{props.label}</Label>
      {props.children}
    </props.pickerComponent>
  );
};

export default Wrapper;
