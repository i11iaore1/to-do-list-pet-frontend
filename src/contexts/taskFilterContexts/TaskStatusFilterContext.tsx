import { createContext, useContext, useMemo, useState } from "react";

const STATUS_CHOICES = ["all", "issued", "closed"] as const;
export type StatusChoice = (typeof STATUS_CHOICES)[number];

const DEFAULT_STATUS: StatusChoice = "all";

interface TaskStatusFilterContextValue {
  status: StatusChoice;
  setStatus: React.Dispatch<React.SetStateAction<StatusChoice>>;
}

const TaskStatusFilterContext =
  createContext<TaskStatusFilterContextValue | null>(null);

export const TaskStatusFilterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [status, setStatus] = useState<StatusChoice>(DEFAULT_STATUS);

  const contextValue: TaskStatusFilterContextValue = useMemo(
    () => ({
      status,
      setStatus,
    }),
    [status],
  );

  return (
    <TaskStatusFilterContext.Provider value={contextValue}>
      {children}
    </TaskStatusFilterContext.Provider>
  );
};

export const useTaskStatusFilter = () => {
  const context = useContext(TaskStatusFilterContext);
  if (!context)
    throw new Error(
      "useTaskStatusFilter must be used within a TaskStatusFilterProvider",
    );
  return context;
};
