import StatusSection from "./FilterSection/StatusSection/StatusSection";
import DeadlineSection from "./FilterSection/DeadlineSection/DeadlineSection";
import ResetButton from "./ResetButton/ResetButton";

import s from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={s["filters-container"]}>
      <label className={s["label"]}>Filters</label>
      <StatusSection />
      <DeadlineSection />
      <ResetButton />
    </div>
  );
};

export default Filters;
