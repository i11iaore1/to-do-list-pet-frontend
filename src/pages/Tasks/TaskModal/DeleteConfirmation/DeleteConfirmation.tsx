import Button from "../../../../components/Button/Button";
import useDeleteTask from "../../../../hooks/tasks/useDeleteTask";
import type { CardInfo } from "../../List/Card/Card";

import s from "./DeleteConfirmation.module.css";

interface DeleteConfirmationProps {
  taskData: CardInfo;
  afterSubmit: () => void;
}

const DeleteConfirmation = (props: DeleteConfirmationProps) => {
  const { mutate } = useDeleteTask();

  const onConfirm = () => {
    mutate({ id: props.taskData.id });
    props.afterSubmit();
  };

  return (
    <div className={s["container"]}>
      <p className={s["label"]}>Deletion</p>
      <p className={s["description"]}>{props.taskData.description}</p>
      <p className={s["deadline"]}>
        {props.taskData.deadline === null
          ? "No deadline"
          : props.taskData.deadline.toDateString()}
      </p>
      <Button onClick={onConfirm}>Confirm</Button>
    </div>
  );
};

export default DeleteConfirmation;
