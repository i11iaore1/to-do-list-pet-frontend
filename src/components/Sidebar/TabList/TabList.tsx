import { useLocation } from "react-router-dom";
import { PAGES } from "../../../pages/Pages";
import { TABS } from "./tabs";
import Tab from "./Tab/Tab";

import s from "./TabList.module.css";

const TabList = () => {
  const location = useLocation();

  return (
    <ul className={s["tablist"]}>
      {TABS.map((tabInfo) => {
        const path = PAGES[tabInfo.pageId].path;
        return (
          <Tab
            path={path}
            name={tabInfo.name}
            {...(tabInfo.icon && { icon: tabInfo.icon })}
            isCurrent={location.pathname === path}
            key={tabInfo.pageId}
          />
        );
      })}
    </ul>
  );
};

export default TabList;
