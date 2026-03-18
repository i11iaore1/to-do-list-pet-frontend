import Search from "./Search/Search";
import AddButton from "./AddButton/AddButton";
import s from "./Panel.module.css";

const Panel = () => {
  return (
    <div className={s["panel-container"]}>
      <Search />
      <AddButton />
    </div>
  );
};

export default Panel;
