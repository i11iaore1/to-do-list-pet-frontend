import React, { useCallback, useMemo } from "react";
import type { TaskCardAction } from "../TaskModal/TaskModal";
import { usePaginatedTaskList } from "../../../hooks/tasks/useTaskList";
import ListEnd from "./ListEnd/ListEnd";
import TaskListItem from "./TaskListItem/TaskListItem";
import { useTaskFilters } from "../../../contexts/TaskFilterContext/subContexts/TaskFiltersContext";
import Loader from "../../../components/Loader/Loader";
import Error from "../../../components/Error/Error";

import s from "./List.module.css";
import OnScreenMessage from "../../../components/OnScreenMessage/OnScreenMessage";

interface TaskListProps {
  setTaskAction: React.Dispatch<React.SetStateAction<TaskCardAction>>;
}

const TaskList = (props: TaskListProps) => {
  const { filterParams } = useTaskFilters();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    usePaginatedTaskList(filterParams);

  const listEndTriggerCondition = useMemo(
    () => hasNextPage && !isFetchingNextPage,
    [hasNextPage, isFetchingNextPage],
  );

  const handleListEndTrigger = useCallback(() => {
    if (listEndTriggerCondition) {
      fetchNextPage();
    }
  }, [listEndTriggerCondition, fetchNextPage]);

  if (status === "pending") {
    return <Loader />;
  }

  if (status === "error") {
    return <Error />;
  }

  if (data.pages[0].count === 0) {
    // No records in response
    return <OnScreenMessage>Nothing found.</OnScreenMessage>;
  }

  return (
    <div className={s["list-container"]}>
      {data.pages.map((page) => (
        <React.Fragment key={page.results[0].pk}>
          {page.results.map((responseTaskInfo) => (
            <TaskListItem
              {...responseTaskInfo}
              setTaskAction={props.setTaskAction}
              key={responseTaskInfo.pk}
            />
          ))}
        </React.Fragment>
      ))}
      <ListEnd onTrigger={handleListEndTrigger}>
        {isFetchingNextPage && <Loader />}
      </ListEnd>
    </div>
  );
};

export default TaskList;
