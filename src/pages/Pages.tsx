import { Route, Routes } from "react-router-dom";
import type { ComponentType } from "react";
import Tasks from "./Tasks/Tasks";
import NotFound from "./NotFound/NotFound";
import Home from "./Home/Home";
import Registration from "./Registration/Registration";
import Login from "./Login/Login";
import Profile from "./Profile/Profile";

const PAGE_ID_LIST = [
  "home",
  "registration",
  "login",
  "profile",
  "tasks",
  "not-found",
] as const;
export type PageId = (typeof PAGE_ID_LIST)[number];

interface PageInfo {
  path: string;
  component: ComponentType;
}

export const PAGES: Record<PageId, PageInfo> = {
  home: {
    path: "/",
    component: Home,
  },
  registration: {
    path: "/registration",
    component: Registration,
  },
  login: {
    path: "/login",
    component: Login,
  },
  profile: {
    path: "/profile",
    component: Profile,
  },
  tasks: {
    path: "/tasks",
    component: Tasks,
  },
  "not-found": {
    path: "*",
    component: NotFound,
  },
};

export const Pages = () => {
  return (
    <Routes>
      {Object.entries(PAGES).map(([pageId, pageInfo]) => (
        <Route
          path={pageInfo.path}
          element={<pageInfo.component />}
          key={pageId}
        />
      ))}
    </Routes>
  );
};
