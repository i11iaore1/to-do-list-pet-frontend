import Button from "../../../../components/Button/Button";
import { useTaskFilters } from "../../../../contexts/TaskFilterContext/subContexts/TaskFiltersContext";

import s from "./ResetButton.module.css";

const ResetButton = () => {
  const { resetFilters } = useTaskFilters();

  return (
    <Button onClick={resetFilters} className={s["reset-button"]}>
      Reset filters
    </Button>
  );
};

export default ResetButton;
