import FullLogoIcon from "../../icons/FullLogoIcon";
import TabList from "./TabList/TabList";

import s from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={s["sidebar"]}>
      <FullLogoIcon className={s["logo"]} />
      <TabList />
    </aside>
  );
};

export default Sidebar;
