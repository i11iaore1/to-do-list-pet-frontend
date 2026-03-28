import React, { useMemo } from "react";
import type { TaskCardAction } from "../TaskModal/TaskModal";
import { useTaskList } from "../../../hooks/tasks/useTaskList";
import TaskListItem from "./TaskListItem/TaskListItem";

import s from "./List.module.css";

interface TaskListProps {
  setTaskAction: React.Dispatch<React.SetStateAction<TaskCardAction>>;
}

const TaskList = (props: TaskListProps) => {
  const filters = useMemo(() => ({}), []);
  // TODO передавати фільтри з контексту

  const { data: responseTaskList } = useTaskList(filters);

  return (
    <div className={s["list-container"]}>
      {responseTaskList?.map((responseTaskInfo) => (
        <TaskListItem
          {...responseTaskInfo}
          setTaskAction={props.setTaskAction}
          key={responseTaskInfo.pk}
        />
      ))}
    </div>
  );
};

export default TaskList;
