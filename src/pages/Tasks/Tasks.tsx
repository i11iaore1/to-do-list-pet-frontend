import { useState } from "react";

import SidebarLayout from "../../layouts/SidebarLayout/SidebarLayout";
import Filters from "./Filters/Filters";
import Panel from "./Panel/Panel";
import List from "./List/List";
import s from "./Tasks.module.css";

const Tasks = () => {
  return (
    <SidebarLayout>
      <div className={s["tab-grid"]}>
        <Filters />
        <Panel />
        <List />
      </div>
    </SidebarLayout>
  );
};

export default Tasks;
