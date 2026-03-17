import { createContext, useContext, useMemo, useState } from "react";
import type { DateRange, DateValue } from "react-aria-components";

const DEADLINE_TYPE_CHOICES = [
  "all",
  "today",
  "date",
  "range",
  "null",
] as const;
export type DeadlineTypeChoice = (typeof DEADLINE_TYPE_CHOICES)[number];

const DEFAULT_DEADLINE_CHOICE: DeadlineTypeChoice = "all";

interface TaskDeadlineFilterContextValue {
  deadlineType: DeadlineTypeChoice;
  setDeadlineType: React.Dispatch<React.SetStateAction<DeadlineTypeChoice>>;
  dateValue: DateValue | null;
  setDateValue: React.Dispatch<React.SetStateAction<DateValue | null>>;
  dateRange: DateRange | null;
  setDateRange: React.Dispatch<React.SetStateAction<DateRange | null>>;
}

const TaskDeadlineFilterContext =
  createContext<TaskDeadlineFilterContextValue | null>(null);

export const TaskDeadlineFilterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [deadlineType, setDeadlineType] = useState<DeadlineTypeChoice>(
    DEFAULT_DEADLINE_CHOICE,
  );
  const [dateValue, setDateValue] = useState<DateValue | null>(null);
  const [dateRange, setDateRange] = useState<DateRange | null>(null);

  const contextValue: TaskDeadlineFilterContextValue = useMemo(
    () => ({
      deadlineType,
      setDeadlineType,
      dateValue,
      setDateValue,
      dateRange,
      setDateRange,
    }),
    [deadlineType, dateValue, dateRange],
  );

  return (
    <TaskDeadlineFilterContext.Provider value={contextValue}>
      {children}
    </TaskDeadlineFilterContext.Provider>
  );
};

export const useTaskDeadlineFilter = () => {
  const context = useContext(TaskDeadlineFilterContext);
  if (!context)
    throw new Error(
      "useTaskDeadlineFilter must be used within a TaskDeadlineFilterProvider",
    );
  return context;
};
