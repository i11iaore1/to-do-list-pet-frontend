import LogoIcon from "../icons/LogoIcon";
import TabList from "./TabList/TabList";

import s from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={s["sidebar"]}>
      <LogoIcon className={s["logo"]} />
      <TabList />
    </aside>
  );
};

export default Sidebar;
