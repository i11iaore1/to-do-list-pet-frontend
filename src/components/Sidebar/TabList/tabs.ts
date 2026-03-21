import type { ComponentType } from "react";
import {
  HomeTabIcon,
  ProfileTabIcon,
  TasksTabIcon,
} from "../../icons/tabIcons";
import type { PageId } from "../../../pages/Pages";

const TAB_RENDER_CONDITIONS = ["authorized", "not authorized"] as const;

type TabRenderCondition = (typeof TAB_RENDER_CONDITIONS)[number];

type TabInfo = {
  pageId: PageId;
  renderCondition: TabRenderCondition | null;
  name: string;
  icon?: ComponentType;
};

export const TABS: TabInfo[] = [
  {
    pageId: "home",
    renderCondition: null,
    name: "Home",
    icon: HomeTabIcon,
  },
  {
    pageId: "registration",
    renderCondition: "not authorized",
    name: "Registration",
  },
  {
    pageId: "login",
    renderCondition: "not authorized",
    name: "Login",
  },
  {
    pageId: "profile",
    renderCondition: "authorized",
    name: "Profile",
    icon: ProfileTabIcon,
  },
  {
    pageId: "tasks",
    renderCondition: "authorized",
    name: "Tasks",
    icon: TasksTabIcon,
  },
];
