import type { ComponentType } from "react";
import type { PageId } from "../../../../pages/Pages";
import {
  HomeTabIcon,
  ProfileTabIcon,
  TasksTabIcon,
} from "../../../icons/tabIcons";
import LockIcon from "../../../icons/LockIcon";
import { PenIcon } from "../../../icons/PenIcon";

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
    pageId: "login",
    name: "Login",
    icon: LockIcon,
  },
  {
    pageId: "registration",
    name: "Registration",
    icon: PenIcon,
  },
  {
    pageId: "profile",
    name: "Profile",
    icon: ProfileTabIcon,
  },
  {
    pageId: "tasks",
    name: "Tasks",
    icon: TasksTabIcon,
  },
];
