import { TaskDeadlineFilterProvider } from "./TaskDeadlineFilterContext";
import { TaskStatusFilterProvider } from "./TaskStatusFilterContext";

export const TaskFiltersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <TaskStatusFilterProvider>
      <TaskDeadlineFilterProvider>{children}</TaskDeadlineFilterProvider>
    </TaskStatusFilterProvider>
  );
};
