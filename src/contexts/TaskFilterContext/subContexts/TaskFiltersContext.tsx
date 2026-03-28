import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_DEADLINE_TYPE,
  type DeadlineFilterContextValue,
} from "./DeadlineFilterContext";
import {
  DEFAULT_STATUS,
  type StatusChoice,
  type StatusFilterContextValue,
} from "./StatusFilterContext";
import { TODAY_DATE } from "../../../utils/date";

type StatusQueryParams =
  | { closed: true }
  | { closed: false; current: boolean }
  | Record<string, never>;

const STATUS_MAP: Record<StatusChoice, StatusQueryParams> = {
  issued: { closed: false, current: true },
  closed: { closed: true },
  expired: { closed: false, current: false },
  all: {},
};

type DeadlineQueryParams =
  | { due_date: string }
  | { no_due_date: true }
  | { due_date_after: string; due_date_before: string }
  | Record<string, never>;

type FilterParams = StatusQueryParams & DeadlineQueryParams;

interface TaskFiltersContextValue {
  filterParams: FilterParams;
  resetFilters: () => void;
}

const TaskFiltersContext = createContext<TaskFiltersContextValue | null>(null);

interface TaskFiltersProviderProps
  extends DeadlineFilterContextValue, StatusFilterContextValue {
  children: React.ReactNode;
}

export const TaskFiltersProvider = (props: TaskFiltersProviderProps) => {
  const [filters, setFilters] = useState({
    status: {} as StatusQueryParams,
    deadline: {} as DeadlineQueryParams,
  });

  const filterParams = useMemo(
    () => ({ ...filters.status, ...filters.deadline }) as FilterParams,
    [filters],
  );

  useEffect(() => {
    const statusParams: StatusQueryParams = STATUS_MAP[props.status];
    const { deadlineType, dateValue, dateRange } = props;

    setFilters((prev) => {
      let deadlineParams: DeadlineQueryParams;

      switch (deadlineType) {
        case "today":
          deadlineParams = { due_date: TODAY_DATE };
          break;
        case "null":
          deadlineParams = { no_due_date: true };
          break;
        case "date":
          deadlineParams = dateValue
            ? { due_date: dateValue.toString() }
            : prev.deadline;
          break;
        case "range":
          deadlineParams = dateRange
            ? {
                due_date_after: dateRange.start.toString(),
                due_date_before: dateRange.end.toString(),
              }
            : prev.deadline;
          break;
        case "all":
          deadlineParams = {};
          break;
        default:
          deadlineParams = {};
          break;
      }

      return { status: statusParams, deadline: deadlineParams };
    });
  }, [props.status, props.deadlineType, props.dateValue, props.dateRange]);

  const resetFilters = useCallback(() => {
    props.setStatus(DEFAULT_STATUS);
    props.setDeadlineType(DEFAULT_DEADLINE_TYPE);
    props.setDateValue(null);
    props.setDateRange(null);
  }, []);

  return (
    <TaskFiltersContext.Provider value={{ filterParams, resetFilters }}>
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
