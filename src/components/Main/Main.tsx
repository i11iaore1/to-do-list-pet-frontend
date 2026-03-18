import s from "./Main.module.css";

const Main = ({ children }: { children: React.ReactNode }) => {
  return <main className={s["main"]}>{children}</main>;
};

export default Main;
