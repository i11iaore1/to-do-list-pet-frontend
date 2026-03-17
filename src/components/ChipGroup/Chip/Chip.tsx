import s from "./Chip.module.css";

export interface ChipInfo<T> {
  chipId: T;
  title: string;
}

interface ChipProps<T> extends ChipInfo<T> {
  isCurrent: boolean;
  onClick: () => void;
}

export const Chip = <T extends string>(props: ChipProps<T>) => {
  return (
    <div
      className={`${s["chip"]} ${props.isCurrent ? s["current"] : ""}`}
      onClick={props.onClick}
    >
      {props.title}
    </div>
  );
};
