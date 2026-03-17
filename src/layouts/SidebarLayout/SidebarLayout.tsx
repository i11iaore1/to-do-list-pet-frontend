import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../../components/Main/Main";

import s from "./SidebarLayout.module.css";

const SidebarLayout = ({ children }: { children: React.ReactNode }) => (
  <div className={s["sidebar-layout-grid"]}>
    <Sidebar />
    <Main>{children}</Main>
  </div>
);

export default SidebarLayout;
