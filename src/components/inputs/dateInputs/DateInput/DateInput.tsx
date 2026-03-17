import { DatePicker, Calendar, type DateValue } from "react-aria-components";

import Wrapper from "../blocks/Wrapper/Wrapper";
import Group from "../blocks/Group/Group";
import Input from "../blocks/Input/Input";
import Popover from "../blocks/Popover/Popover";

interface DateInputProps {
  value: DateValue | null;
  onChange: (value: DateValue | null) => void;
}

export const DateInput = (props: DateInputProps) => {
  return (
    <Wrapper
      label="Date"
      pickerComponent={DatePicker}
      value={props.value}
      onChange={props.onChange}
    >
      <Group>
        <Input />
      </Group>
      <Popover calendarComponent={Calendar} />
    </Wrapper>
  );
};
