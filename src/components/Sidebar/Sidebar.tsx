import Logo from "./Logo/Logo";
import TabList from "./TabList/TabList";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

import s from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={s["sidebar"]}>
      <Logo />
      <TabList />
      <ThemeSwitcher />
    </aside>
  );
};

export default Sidebar;
