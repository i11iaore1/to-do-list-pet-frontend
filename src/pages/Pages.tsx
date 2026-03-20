import { Route, Routes } from "react-router-dom";
import type { ComponentType } from "react";
import Tasks from "./Tasks/Tasks";
import NotFound from "./NotFound/NotFound";
import Home from "./Home/Home";

const PAGE_ID_LIST = ["home", "tasks", "not-found"] as const;
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
