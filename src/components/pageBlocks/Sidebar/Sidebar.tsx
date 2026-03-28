import LogoIcon from "../../icons/LogoIcon";
import TabList from "./TabList/TabList";

import s from "./Sidebar.module.css";

// TODO прибрати логаут та рефреш
import { useLogout } from "../../../hooks/user/useLogout";
import { refreshToken } from "../../../api/axiosClient";

const Sidebar = () => {
  const { mutate } = useLogout();

  const onClick = () => {
    mutate();
  };

  return (
    <aside className={s["sidebar"]}>
      <LogoIcon className={s["logo"]} />
      <TabList />
      <button onClick={onClick}>LOGOUT</button>
      <button onClick={refreshToken}>refresh</button>
    </aside>
  );
};

export default Sidebar;
