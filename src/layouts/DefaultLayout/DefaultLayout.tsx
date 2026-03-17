import Main from "../../components/Main/Main";

import s from "./DefaultLayout.module.css";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => (
  <div className={s["default-layout-grid"]}>
    <Main>{children}</Main>
  </div>
);

export default DefaultLayout;
