import {
  DateRangePicker,
  RangeCalendar,
  type DateRange,
  type DateValue,
} from "react-aria-components";

import Wrapper from "../blocks/Wrapper/Wrapper";
import Group from "../blocks/Group/Group";
import Input from "../blocks/Input/Input";
import Popover from "../blocks/Popover/Popover";

import s from "./DateRangeInput.module.css";

interface DateRangeInputProps {
  minValue: DateValue;
  value: DateRange | null;
  onChange: (value: DateRange | null) => void;
}

export const DateRangeInput = (props: DateRangeInputProps) => {
  return (
    <Wrapper
      label="Date range"
      minValue={props.minValue}
      pickerComponent={DateRangePicker}
      value={props.value}
      onChange={props.onChange}
    >
      <Group>
        <div className={s["vertical-container"]}>
          <Input slot="start" />
          <div className={s["separator"]} />
          <Input slot="end" />
        </div>
      </Group>
      <Popover calendarComponent={RangeCalendar} />
    </Wrapper>
  );
};
