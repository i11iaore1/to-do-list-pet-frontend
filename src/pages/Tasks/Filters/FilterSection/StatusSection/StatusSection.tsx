import type { ChipInfo } from "../../../../../components/ChipGroup/Chip/Chip";
import ChipGroup from "../../../../../components/ChipGroup/ChipGroup";
import {
  useStatusFilter,
  type StatusChoice,
} from "../../../../../contexts/TaskFilterContext/subContexts/StatusFilterContext";
import FilterSection from "../FilterSection";

const StatusChipList: ChipInfo<StatusChoice>[] = [
  {
    chipId: "all",
    title: "All",
  },
  {
    chipId: "issued",
    title: "Issued",
  },
  {
    chipId: "closed",
    title: "Closed",
  },
];

const StatusSection = () => {
  const { status, setStatus } = useStatusFilter();

  return (
    <FilterSection title="Status">
      <ChipGroup
        chipList={StatusChipList}
        currentChipId={status}
        setCurrentChipId={setStatus}
      />
    </FilterSection>
  );
};

export default StatusSection;
