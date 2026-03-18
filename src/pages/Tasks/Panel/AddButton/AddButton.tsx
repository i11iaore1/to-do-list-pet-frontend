import Button from "../../../../components/Button/Button";
import s from "./AddButton.module.css";

const AddButton = () => {
  const createTask = () => {
    console.log("CREATE TASK PRESSED");
  };

  return (
    <Button onClick={createTask} className={s["add-button"]}>
      AddButton
    </Button>
  );
};

export default AddButton;
