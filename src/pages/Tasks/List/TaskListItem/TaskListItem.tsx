import React from "react";
import { useCallback, useMemo } from "react";
import type { Id } from "../../../../types/Id";
import useCloseTask from "../../../../hooks/tasks/useCloseTask";
import type { TaskResponseInfo } from "../../../../types/task";
import type { TaskCardAction } from "../../TaskModal/TaskModal";
import type { CardInfo } from "../Card/Card";
import Card from "../Card/Card";
import { ISOOrNullToDateOrNull } from "../../../../utils/date";

interface TaskListItemProps extends TaskResponseInfo {
  setTaskAction: React.Dispatch<React.SetStateAction<TaskCardAction>>;
}

// every list item rerenders on change if not memoized
const TaskListItem = React.memo(
  ({ setTaskAction, ...taskResponseInfo }: TaskListItemProps) => {
    const { mutate } = useCloseTask();

    const onClose = (taskInfoId: Id) => {
      mutate({ id: taskInfoId });
    };

    const taskStatus = useMemo(() => {
      if (taskResponseInfo.is_closed) return "closed";
      return taskResponseInfo.is_current ? "issued" : "expired";
    }, [taskResponseInfo.is_closed, taskResponseInfo.is_current]);

    const cardInfo: CardInfo = useMemo(
      () => ({
        id: taskResponseInfo.pk,
        description: taskResponseInfo.description,
        deadline: ISOOrNullToDateOrNull(taskResponseInfo.due_date),
        status: taskStatus,
      }),
      [
        taskResponseInfo.pk,
        taskResponseInfo.description,
        taskResponseInfo.due_date,
        taskStatus,
      ],
    );

    const handleToggle = useCallback(() => {
      if (taskStatus === "issued") {
        onClose(taskResponseInfo.pk);
      } else {
        setTaskAction({ type: "reissue", card: cardInfo });
      }
    }, [taskStatus, taskResponseInfo]);

    const handleEdit = useCallback(() => {
      setTaskAction({
        type: "edit",
        card: cardInfo,
      });
    }, [taskResponseInfo]);

    const handleDelete = useCallback(
      () =>
        setTaskAction({
          type: "delete",
          card: cardInfo,
        }),
      [taskResponseInfo],
    );

    return (
      <Card
        info={cardInfo}
        onToggle={handleToggle}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    );
  },
);

export default TaskListItem;
