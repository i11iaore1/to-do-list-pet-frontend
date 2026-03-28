import { useLocation } from "react-router-dom";
import { useUserInfo } from "../../../../hooks/user/useUserInfo";
import { PAGES } from "../../../../pages/Pages";
import { TABS } from "./tabs";
import Tab from "./Tab/Tab";

import s from "./TabList.module.css";

const TabList = () => {
  const location = useLocation();
  const { data: userinfo } = useUserInfo();

  return (
    <ul className={s["tablist"]}>
      {TABS.map((tabInfo) => {
        const pageRestriction = PAGES[tabInfo.pageId].restriction;
        if (pageRestriction) {
          if (
            (!userinfo && pageRestriction === "authorized") ||
            (!!userinfo && pageRestriction === "not authorized")
          ) {
            return;
          }
        }

        const path = PAGES[tabInfo.pageId].path;
        return (
          <Tab
            path={path}
            name={tabInfo.name}
            icon={tabInfo.icon}
            isCurrent={location.pathname === path}
            key={tabInfo.pageId}
          />
        );
      })}
    </ul>
  );
};

export default TabList;
