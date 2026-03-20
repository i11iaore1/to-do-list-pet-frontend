import type { TaskInfo } from "../../../types/Task";
import Card, { type CardInfo } from "./Card/Card";

import s from "./List.module.css";

const taskInfoList: TaskInfo[] = [
  {
    pk: 1,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    is_closed: true,
    is_current: true,
    due_date: new Date(),
  },
  {
    pk: 2,
    description: "Task 2",
    is_closed: true,
    is_current: false,
    due_date: new Date(),
  },
  {
    pk: 3,
    description: "Task 3",
    is_closed: false,
    is_current: true,
    due_date: null,
  },
  {
    pk: 4,
    description: "Task 4",
    is_closed: false,
    is_current: false,
    due_date: new Date(),
  },
];

const List = () => {
  return (
    <div className={s["list-container"]}>
      {taskInfoList.map((taskInfo) => {
        const cardInfo: CardInfo = {
          pk: taskInfo.pk,
          description: taskInfo.description,
          due_date: taskInfo.due_date,
          status: taskInfo.is_closed
            ? "closed"
            : taskInfo.is_current
              ? "issued"
              : "expired",
        };
        return <Card {...cardInfo} key={taskInfo.pk} />;
      })}
    </div>
  );
};

export default List;
