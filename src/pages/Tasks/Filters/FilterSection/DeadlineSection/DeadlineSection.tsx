import FilterSection from "../FilterSection";
import ChipGroup from "../../../../../components/ChipGroup/ChipGroup";
import type { ChipInfo } from "../../../../../components/ChipGroup/Chip/Chip";
import { DateInput } from "../../../../../components/inputs/dateInputs/DateInput/DateInput";
import { DateRangeInput } from "../../../../../components/inputs/dateInputs/DateRangeInput/DateRangeInput";
import {
  useDeadlineFilter,
  type DeadlineTypeChoice,
} from "../../../../../contexts/TaskFilterContext/subContexts/DeadlineFilterContext";

import { today, getLocalTimeZone } from "@internationalized/date";
import { useMemo } from "react";

const DeadlineFilterChipList: ChipInfo<DeadlineTypeChoice>[] = [
  {
    chipId: "all",
    title: "All",
  },
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
];

const DeadlineSection = () => {
  const {
    deadlineType,
    setDeadlineType,
    dateValue,
    setDateValue,
    dateRange,
    setDateRange,
  } = useDeadlineFilter();

  const todayDateValue = useMemo(() => today(getLocalTimeZone()), []);

  return (
    <FilterSection title="Deadline">
      <ChipGroup
        chipList={DeadlineFilterChipList}
        currentChipId={deadlineType}
        setCurrentChipId={setDeadlineType}
      />
      {deadlineType === "date" && (
        <DateInput
          minValue={todayDateValue}
          value={dateValue}
          onChange={(value) => {
            setDateValue(value);
          }}
        />
      )}
      {deadlineType === "range" && (
        <DateRangeInput
          minValue={todayDateValue}
          value={dateRange}
          onChange={(value) => {
            setDateRange(value);
          }}
        />
      )}
    </FilterSection>
  );
};

export default DeadlineSection;
