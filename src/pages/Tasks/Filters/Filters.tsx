import StatusSection from "./FilterSection/StatusSection/StatusSection";
import DeadlineSection from "./FilterSection/DeadlineSection/DeadlineSection";

import s from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={s["filters-container"]}>
      <StatusSection />
      <DeadlineSection />
    </div>
  );
};

export default Filters;
