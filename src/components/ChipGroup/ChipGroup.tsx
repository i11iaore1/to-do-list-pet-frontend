import { useCallback } from "react";
import { Chip, type ChipInfo } from "./Chip/Chip";

import s from "./ChipGroup.module.css";

interface ChipGroupProps<T> {
  chipList: ChipInfo<T>[];
  currentChipId: T;
  setCurrentChipId: React.Dispatch<React.SetStateAction<T>>;
}

const ChipGroup = <T extends string>(props: ChipGroupProps<T>) => {
  const setCurrentChipId = useCallback((chipId: T) => {
    props.setCurrentChipId(chipId);
  }, []);

  return (
    <div className={s["chip-group"]}>
      {props.chipList.map((chipInfo) => (
        <Chip
          chipId={chipInfo.chipId}
          title={chipInfo.title}
          isCurrent={chipInfo.chipId === props.currentChipId}
          onClick={() => {
            setCurrentChipId(chipInfo.chipId);
          }}
          key={chipInfo.chipId}
        />
      ))}
    </div>
  );
};

export default ChipGroup;
