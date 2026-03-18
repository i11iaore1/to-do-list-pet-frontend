import StatusSection from "./FilterSection/StatusSection/StatusSection";
import DeadlineSection from "./FilterSection/DeadlineSection/DeadlineSection";
import ResetButton from "./ResetButton/ResetButton";

import s from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={s["filters-container"]}>
      <StatusSection />
      <DeadlineSection />
      <ResetButton />
    </div>
  );
};

export default Filters;
