import FilterSection from "../FilterSection";
import ChipGroup from "../../../../../components/ChipGroup/ChipGroup";
import type { ChipInfo } from "../../../../../components/ChipGroup/Chip/Chip";
import { DateInput } from "../../../../../components/inputs/dateInputs/DateInput/DateInput";
import { DateRangeInput } from "../../../../../components/inputs/dateInputs/DateRangeInput/DateRangeInput";
import {
  useDeadlineFilter,
  type DeadlineTypeChoice,
} from "../../../../../contexts/TaskFilterContext/subContexts/DeadlineFilterContext";

const DeadlineFilterChipList: ChipInfo<DeadlineTypeChoice>[] = [
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

const DeadlineSection = () => {
  const {
    deadlineType,
    setDeadlineType,
    dateValue,
    setDateValue,
    dateRange,
    setDateRange,
  } = useDeadlineFilter();

  return (
    <FilterSection title="Deadline">
      <ChipGroup
        chipList={DeadlineFilterChipList}
        currentChipId={deadlineType}
        setCurrentChipId={setDeadlineType}
      />
      {deadlineType === "date" && (
        <DateInput
          value={dateValue}
          onChange={(value) => {
            setDateValue(value);
          }}
        />
      )}
      {deadlineType === "range" && (
        <DateRangeInput
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
