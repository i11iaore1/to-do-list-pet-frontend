import FilterSection from "../FilterSection";
import ChipGroup from "../../../../../components/ChipGroup/ChipGroup";
import type { ChipInfo } from "../../../../../components/ChipGroup/Chip/Chip";
import { DateInput } from "../../../../../components/inputs/dateInputs/DateInput/DateInput";
import { DateRangeInput } from "../../../../../components/inputs/dateInputs/DateRangeInput/DateRangeInput";
import {
  useDeadlineFilter,
  type DeadlineTypeChoice,
} from "../../../../../contexts/TaskFilterContext/subContexts/DeadlineFilterContext";
import { useCallback } from "react";
import type { DateRange, DateValue } from "react-aria-components";
import React from "react";

const DeadlineFilterChipList: readonly ChipInfo<DeadlineTypeChoice>[] = [
  {
    chipId: "today",
    title: "Today",
  },
  {
    chipId: "date",
    title: "Date",
  },
  {
    chipId: "range",
    title: "Range",
  },
  {
    chipId: "null",
    title: "No deadline",
  },
  {
    chipId: "all",
    title: "All",
  },
];

// rerenders with tasks page if not memoized
// has heavy date inputs
const DeadlineSection = React.memo(() => {
  const {
    deadlineType,
    setDeadlineType,
    dateValue,
    setDateValue,
    dateRange,
    setDateRange,
  } = useDeadlineFilter();

  const handleDateValueChange = useCallback((value: DateValue | null) => {
    setDateValue(value);
  }, []);

  const handleDateRangeChange = useCallback((value: DateRange | null) => {
    setDateRange(value);
  }, []);

  return (
    <FilterSection title="Deadline">
      <ChipGroup
        chipList={DeadlineFilterChipList}
        currentChipId={deadlineType}
        setCurrentChipId={setDeadlineType}
      />
      {deadlineType === "date" && (
        <DateInput value={dateValue} onChange={handleDateValueChange} />
      )}
      {deadlineType === "range" && (
        <DateRangeInput value={dateRange} onChange={handleDateRangeChange} />
      )}
    </FilterSection>
  );
});

export default DeadlineSection;
