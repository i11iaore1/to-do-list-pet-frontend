import React from "react";
import { Group as AriaGroup, Button } from "react-aria-components";

import CalendarIcon from "../../../../icons/CalendarIcon";

import s from "./Group.module.css";

const Group = ({ children }: { children: React.ReactNode }) => {
  return (
    <AriaGroup className={s["group"]}>
      {children}
      <Button className={s["cal-button"]}>
        <CalendarIcon />
      </Button>
    </AriaGroup>
  );
};

export default Group;
