import { createContext, useContext } from "react";
import type { DateRange, DateValue } from "react-aria-components";

const DEADLINE_TYPE_CHOICES = [
  "all",
  "today",
  "date",
  "range",
  "null",
] as const;
export type DeadlineTypeChoice = (typeof DEADLINE_TYPE_CHOICES)[number];
export const DEFAULT_DEADLINE_TYPE: DeadlineTypeChoice = "all";

export interface DeadlineFilterContextValue {
  deadlineType: DeadlineTypeChoice;
  setDeadlineType: React.Dispatch<React.SetStateAction<DeadlineTypeChoice>>;
  dateValue: DateValue | null;
  setDateValue: React.Dispatch<React.SetStateAction<DateValue | null>>;
  dateRange: DateRange | null;
  setDateRange: React.Dispatch<React.SetStateAction<DateRange | null>>;
}

const DeadlineFilterContext = createContext<DeadlineFilterContextValue | null>(
  null,
);

interface DeadlineFilterProviderProps {
  children: React.ReactNode;
  contextValue: DeadlineFilterContextValue;
}

export const DeadlineFilterProvider = (props: DeadlineFilterProviderProps) => {
  return (
    <DeadlineFilterContext.Provider value={props.contextValue}>
      {props.children}
    </DeadlineFilterContext.Provider>
  );
};

export const useDeadlineFilter = () => {
  const context = useContext(DeadlineFilterContext);
  if (!context)
    throw new Error(
      "useDeadlineFilter must be used within a DeadlineFilterProvider",
    );
  return context;
};
