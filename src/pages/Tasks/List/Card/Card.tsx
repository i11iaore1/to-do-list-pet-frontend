import { STATIC_PEN_ICON } from "../../../../components/icons/PenIcon";
import { STATIC_TRASH_ICON } from "../../../../components/icons/TrashIcon";
import Button from "../../../../components/Button/Button";
import type { TaskInfo } from "../../../../types/task";
import { capitalizeFirst } from "../../../../utils/capitalize";
import clsx from "clsx";

import s from "./Card.module.css";

export interface CardInfo extends Pick<
  TaskInfo,
  "id" | "description" | "deadline"
> {
  status: "issued" | "closed" | "expired";
}

interface CardProps {
  info: CardInfo;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const Card = (props: CardProps) => {
  return (
    <div
      className={clsx(s["card-container"], {
        [s["no-deadline"]]: props.info.deadline === null,
      })}
    >
      <Button onClick={props.onToggle} className={s["checkbox"]}>
        {props.info.status === "closed" && "✓"}
      </Button>
      <div className={s["description"]}>{props.info.description}</div>
      {props.info.deadline !== null && (
        <div className={s["deadline"]}>
          {props.info.deadline.toDateString()}
        </div>
      )}
      <div className={clsx(s["status"], s[props.info.status])}>
        {capitalizeFirst(props.info.status)}
      </div>
      {props.info.status === "issued" && (
        <>
          <div onClick={props.onEdit} className={clsx(s["edit"], s["button"])}>
            {STATIC_PEN_ICON}
          </div>
          <div
            onClick={props.onDelete}
            className={clsx(s["delete"], s["button"])}
          >
            {STATIC_TRASH_ICON}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
