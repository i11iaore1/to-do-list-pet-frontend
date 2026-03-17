import { Route, Routes } from "react-router-dom";
import type { ComponentType } from "react";
import Tasks from "./Tasks/Tasks";
import History from "./History/History";
import NotFound from "./NotFound/NotFound";

const PAGE_ID_LIST = ["tasks", "history", "not-found"] as const;
export type PageId = (typeof PAGE_ID_LIST)[number];

interface PageInfo {
  path: string;
  element: ComponentType;
}

export const PAGES: Record<PageId, PageInfo> = {
  tasks: {
    path: "/tasks",
    element: Tasks,
  },
  history: {
    path: "/history",
    element: History,
  },
  "not-found": {
    path: "*",
    element: NotFound,
  },
};

export const Pages = () => {
  return (
    <Routes>
      {Object.entries(PAGES).map(([pageId, pageInfo]) => (
        <Route
          path={pageInfo.path}
          element={<pageInfo.element />}
          key={pageId}
        />
      ))}
    </Routes>
  );
};
