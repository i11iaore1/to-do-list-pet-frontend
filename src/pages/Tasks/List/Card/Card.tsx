import clsx from "clsx";
import EditIcon from "../../../../components/icons/EditIcon";
import TrashIcon from "../../../../components/icons/TrashIcon";
import Button from "../../../../components/Button/Button";
import type { TaskInfo } from "../../../../types/Task";

import s from "./Card.module.css";
import { capitalizeFirst } from "../../../../utils/capitalize";

export interface CardInfo extends Pick<
  TaskInfo,
  "pk" | "description" | "due_date"
> {
  status: "issued" | "closed" | "expired";
}

const Card = (props: CardInfo) => {
  const toggleCompletionState = () => {
    console.log(`${props.pk} completion state toggled`);
  };

  return (
    <div
      className={clsx(s["card-container"], {
        [s["no-deadline"]]: props.due_date === null,
      })}
    >
      <Button onClick={toggleCompletionState} className={s["checkbox"]}>
        {props.status === "closed" && "✓"}
      </Button>
      <div className={s["description"]}>{props.description}</div>
      {props.due_date !== null && (
        <div className={s["deadline"]}>{props.due_date.toDateString()}</div>
      )}
      <div className={clsx(s["status"], s[props.status])}>
        {capitalizeFirst(props.status)}
      </div>
      <div className={clsx(s["edit"], s["button"])}>
        <EditIcon />
      </div>
      <div className={clsx(s["delete"], s["button"])}>
        <TrashIcon />
      </div>
    </div>
  );
};

export default Card;
