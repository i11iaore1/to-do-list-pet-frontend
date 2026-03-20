import Filters from "./Filters/Filters";
import Panel from "./Panel/Panel";
import List from "./List/List";
import s from "./Tasks.module.css";

const Tasks = () => {
  return (
    <div className={s["tab-grid"]}>
      <Filters />
      <Panel />
      <List />
    </div>
  );
};

export default Tasks;
