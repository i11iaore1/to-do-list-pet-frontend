import React from "react";
import { Link } from "react-router-dom";

import s from "./Tab.module.css";

export interface TabProps {
  path: string;
  name: string;
  icon: React.ComponentType;
  isCurrent: boolean;
}

const Tab = (props: TabProps) => {
  return (
    <Link to={props.path}>
      <li className={`${s["tab"]} ${props.isCurrent ? s["current"] : ""}`}>
        <props.icon />
        <p>{props.name}</p>
      </li>
    </Link>
  );
};

export default Tab;
