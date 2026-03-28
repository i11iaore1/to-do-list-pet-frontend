import Main from "../../components/pageBlocks/Main/Main";
import Sidebar from "../../components/pageBlocks/Sidebar/Sidebar";

import s from "./SidebarLayout.module.css";

const SidebarLayout = ({ children }: { children: React.ReactNode }) => (
  <div className={s["sidebar-layout-grid"]}>
    <Sidebar />
    <Main>{children}</Main>
  </div>
);

export default SidebarLayout;
