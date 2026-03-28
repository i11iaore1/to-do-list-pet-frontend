import { Link } from "react-router-dom";
import clsx from "clsx";

import s from "./Tab.module.css";

export interface TabProps {
  path: string;
  name: string;
  icon: React.ComponentType;
  isCurrent: boolean;
}

const Tab = (props: TabProps) => {
  return (
    <Link to={props.path} replace>
      <li className={clsx(s["tab"], { [s["current"]]: props.isCurrent })}>
        {<props.icon />}
        <p>{props.name}</p>
      </li>
    </Link>
  );
};

export default Tab;
