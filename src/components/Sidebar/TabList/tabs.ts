import type { ComponentType } from "react";
import { TasksTabIcon, HistoryTabIcon } from "../../icons/tabIcons";
import type { PageId } from "../../../pages/Pages";

type TabInfo = {
  pageId: PageId;
  name: string;
  icon: ComponentType;
};

export const TABS: TabInfo[] = [
  {
    pageId: "tasks",
    name: "Tasks",
    icon: TasksTabIcon,
  },
  {
    pageId: "history",
    name: "History",
    icon: HistoryTabIcon,
  },
];
