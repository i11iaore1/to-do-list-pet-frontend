import { Route, Routes } from "react-router-dom";
import type { ComponentType } from "react";
import Tasks from "./Tasks/Tasks";
import NotFound from "./NotFound/NotFound";
import Home from "./Home/Home";
import Registration from "./Registration/Registration";
import Login from "./Login/Login";
import Profile from "./Profile/Profile";
import type { PageRestriction } from "../components/PageRestrictor";
import PageRestrictor from "../components/PageRestrictor";

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
  restriction?: PageRestriction;
}

export const PAGES: Record<PageId, PageInfo> = {
  home: {
    path: "/",
    component: Home,
  },
  registration: {
    path: "/registration",
    component: Registration,
    restriction: "not authorized",
  },
  login: {
    path: "/login",
    component: Login,
    restriction: "not authorized",
  },
  profile: {
    path: "/profile",
    component: Profile,
    restriction: "authorized",
  },
  tasks: {
    path: "/tasks",
    component: Tasks,
    restriction: "authorized",
  },
  "not-found": {
    path: "*",
    component: NotFound,
  },
};

export const Pages = () => {
  return (
    <Routes>
      {Object.entries(PAGES).map(([pageId, pageInfo]) => {
        const element = pageInfo.restriction ? (
          <PageRestrictor restriction={pageInfo.restriction}>
            <pageInfo.component />
          </PageRestrictor>
        ) : (
          <pageInfo.component />
        );
        return <Route path={pageInfo.path} element={element} key={pageId} />;
      })}
    </Routes>
  );
};
