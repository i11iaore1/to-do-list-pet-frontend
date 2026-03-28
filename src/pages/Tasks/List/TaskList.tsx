import React from "react";
import type { TaskCardAction } from "../TaskModal/TaskModal";
import { useTaskList } from "../../../hooks/tasks/useTaskList";
import TaskListItem from "./TaskListItem/TaskListItem";
import { useTaskFilters } from "../../../contexts/TaskFilterContext/subContexts/TaskFiltersContext";

import s from "./List.module.css";

interface TaskListProps {
  setTaskAction: React.Dispatch<React.SetStateAction<TaskCardAction>>;
}

const TaskList = (props: TaskListProps) => {
  const { filterParams: filters } = useTaskFilters();
  const { data: responseTaskList, error, isPending } = useTaskList(filters);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{String(error)}</div>;
  }

  if (!responseTaskList || responseTaskList.length === 0) {
    return <div>No tasks satisfy current filters</div>;
  }

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
