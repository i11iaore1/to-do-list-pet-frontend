import { createContext, useCallback, useContext, useMemo } from "react";
import {
  DEFAULT_DEADLINE_TYPE,
  type DeadlineFilterContextValue,
  type DeadlineTypeChoice,
} from "./DeadlineFilterContext";
import {
  DEFAULT_STATUS,
  type StatusChoice,
  type StatusFilterContextValue,
} from "./StatusFilterContext";
import type { DateRange, DateValue } from "react-aria-components";

interface StatusFilter {
  value: StatusChoice;
}

interface DeadlineFilter {
  type: DeadlineTypeChoice;
  value: DateValue | DateRange | null;
}

interface Filters {
  status: StatusFilter;
  deadline: DeadlineFilter;
}

interface TaskFiltersContextValue {
  filters: Filters;
  resetFilters: () => void;
}

const TaskFiltersContext = createContext<TaskFiltersContextValue | null>(null);

interface TaskFiltersProviderProps
  extends DeadlineFilterContextValue, StatusFilterContextValue {
  children: React.ReactNode;
}

export const TaskFiltersProvider = (props: TaskFiltersProviderProps) => {
  const statusFilter: StatusFilter = useMemo(
    () => ({
      value: props.status,
    }),
    [props.status],
  );

  const deadlineFilter: DeadlineFilter = useMemo(
    () => ({
      type: props.deadlineType,
      value:
        props.deadlineType === "date"
          ? props.dateValue
          : props.deadlineType === "range"
            ? props.dateRange
            : null,
    }),
    [props.deadlineType, props.dateValue, props.dateRange],
  );

  const filters: Filters = useMemo(
    () => ({
      status: statusFilter,
      deadline: deadlineFilter,
    }),
    [statusFilter, deadlineFilter],
  );

  const resetFilters = useCallback(() => {
    props.setStatus(DEFAULT_STATUS);
    props.setDeadlineType(DEFAULT_DEADLINE_TYPE);
    props.setDateValue(null);
    props.setDateRange(null);
  }, []);

  return (
    <TaskFiltersContext.Provider value={{ filters, resetFilters }}>
      {props.children}
    </TaskFiltersContext.Provider>
  );
};

export const useTaskFilters = () => {
  const context = useContext(TaskFiltersContext);
  if (!context)
    throw new Error("useTaskFilters must be used within a TaskFiltersProvider");
  return context;
};
