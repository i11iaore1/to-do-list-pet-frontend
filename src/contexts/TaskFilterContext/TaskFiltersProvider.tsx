import { useMemo, useState } from "react";
import type { DateRange, DateValue } from "react-aria-components";
import {
  DeadlineFilterProvider,
  type DeadlineTypeChoice,
  type DeadlineFilterContextValue,
  DEFAULT_DEADLINE_TYPE,
} from "./subContexts/DeadlineFilterContext";
import {
  DEFAULT_STATUS,
  StatusFilterProvider,
  type StatusChoice,
  type StatusFilterContextValue,
} from "./subContexts/StatusFilterContext";
import { TaskFiltersProvider } from "./subContexts/TaskFiltersContext";

// просто батьківський компонент із усіма визначеними станами
export const TaskFilterStateManager = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [status, setStatus] = useState<StatusChoice>(DEFAULT_STATUS);
  const [deadlineType, setDeadlineType] = useState<DeadlineTypeChoice>(
    DEFAULT_DEADLINE_TYPE,
  );
  const [dateValue, setDateValue] = useState<DateValue | null>(null);
  const [dateRange, setDateRange] = useState<DateRange | null>(null);

  const statusContextValue: StatusFilterContextValue = useMemo(
    () => ({
      status,
      setStatus,
    }),
    [status],
  );

  const deadlineContextValue: DeadlineFilterContextValue = useMemo(
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
    <StatusFilterProvider contextValue={statusContextValue}>
      <DeadlineFilterProvider contextValue={deadlineContextValue}>
        <TaskFiltersProvider {...statusContextValue} {...deadlineContextValue}>
          {children}
        </TaskFiltersProvider>
      </DeadlineFilterProvider>
    </StatusFilterProvider>
  );
};
