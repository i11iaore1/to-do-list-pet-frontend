import Button from "../../../components/Button/Button";
import Search from "./Search/Search";

import s from "./Panel.module.css";

interface PanelProps {
  onCreate: () => void;
}

const Panel = (props: PanelProps) => {
  return (
    <div className={s["panel-container"]}>
      <Search />
      <Button onClick={props.onCreate} className={s["add-button"]}>
        Create
      </Button>
    </div>
  );
};

export default Panel;
