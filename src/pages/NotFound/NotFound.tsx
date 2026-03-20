import NotFoundIcon from "../../components/icons/NotFoundIcon";

import s from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={s["not-found-container"]}>
      <NotFoundIcon className={s["svg"]} />
      <p className={s["description"]}>No such page</p>
    </div>
  );
};

export default NotFound;
