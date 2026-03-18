import { Link } from "react-router-dom";

import s from "./Tab.module.css";
import clsx from "clsx";

export interface TabProps {
  path: string;
  name: string;
  icon: React.ComponentType;
  isCurrent: boolean;
}

const Tab = (props: TabProps) => {
  return (
    <Link to={props.path}>
      <li className={clsx(s["tab"], { [s["current"]]: props.isCurrent })}>
        <props.icon />
        <p>{props.name}</p>
      </li>
    </Link>
  );
};

export default Tab;
