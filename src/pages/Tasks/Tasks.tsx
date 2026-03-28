import { useCallback, useState } from "react";
import TaskModal, { type TaskCardAction } from "./TaskModal/TaskModal";
import Filters from "./Filters/Filters";
import Panel from "./Panel/Panel";
import TaskList from "./List/TaskList";

import s from "./Tasks.module.css";

const Tasks = () => {
  const [taskAction, setTaskAction] = useState<TaskCardAction>(null);

  const onCloseModal = useCallback(() => {
    setTaskAction(null);
  }, []);

  const onCreate = useCallback(() => {
    setTaskAction({ type: "create" });
  }, []);

  return (
    <div className={s["tab-grid"]}>
      <TaskModal action={taskAction} onClose={onCloseModal} />
      <Filters />
      <Panel onCreate={onCreate} />
      <TaskList setTaskAction={setTaskAction} />
    </div>
  );
};

export default Tasks;
