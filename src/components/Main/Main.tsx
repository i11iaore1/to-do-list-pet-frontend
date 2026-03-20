import ThemeSwitcher from "../Sidebar/ThemeSwitcher/ThemeSwitcher";
import s from "./Main.module.css";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={s["main"]}>
      {children}
      <ThemeSwitcher />
    </main>
  );
};

export default Main;
