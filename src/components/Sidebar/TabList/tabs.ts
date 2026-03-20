import type { ComponentType } from "react";
import {
  HomeTabIcon,
  HistoryTabIcon,
  TasksTabIcon,
} from "../../icons/tabIcons";
import type { PageId } from "../../../pages/Pages";

type TabInfo = {
  pageId: PageId;
  name: string;
  icon: ComponentType;
};

export const TABS: TabInfo[] = [
  {
    pageId: "home",
    name: "Home",
    icon: HomeTabIcon,
  },
  {
    pageId: "tasks",
    name: "Tasks",
    icon: TasksTabIcon,
  },
];
