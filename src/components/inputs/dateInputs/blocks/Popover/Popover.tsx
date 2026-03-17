import React from "react";
import {
  Button,
  CalendarCell,
  CalendarGrid,
  Header,
  Heading,
  Popover as AriaPopover,
  Dialog,
  type CalendarProps,
  type RangeCalendarProps,
  type DateValue,
} from "react-aria-components";

import s from "./Popover.module.css";

interface PopoverProps {
  calendarComponent:
    | React.ComponentType<CalendarProps<DateValue>>
    | React.ComponentType<RangeCalendarProps<DateValue>>;
}

const Popover = (props: PopoverProps) => {
  return (
    <AriaPopover className={s["popover"]}>
      <Dialog>
        <props.calendarComponent className={s["calendar"]}>
          <Header className={s["header"]}>
            <Button slot="previous" className={s["nav-button"]}>
              ◀
            </Button>
            <Heading className={s["heading"]} />
            <Button slot="next" className={s["nav-button"]}>
              ▶
            </Button>
          </Header>
          <CalendarGrid className={s["grid"]}>
            {(date) => <CalendarCell date={date} className={s["cell"]} />}
          </CalendarGrid>
        </props.calendarComponent>
      </Dialog>
    </AriaPopover>
  );
};

export default Popover;
