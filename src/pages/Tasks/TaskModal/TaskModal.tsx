import Overlay from "../../../components/Overlay/Overlay";
import type { CardInfo } from "../List/Card/Card";
import CreateForm from "./CreateForm/CreateForm";
import DeleteConfirmation from "./DeleteConfirmation/DeleteConfirmation";
import EditForm from "./EditForm/EditForm";
import ReissueForm from "./ReissueForm/ReissueForm";

import s from "./TaskModal.module.css";

export type TaskCardAction =
  | { type: "create" }
  | { type: "edit"; card: CardInfo }
  | { type: "reissue"; card: CardInfo }
  | { type: "delete"; card: CardInfo }
  | null;

interface TaskModalProps {
  action: TaskCardAction;
  onClose: () => void;
}

const TaskModal = (props: TaskModalProps) => {
  if (!props.action) return null;

  return (
    <Overlay onClose={props.onClose} className={s["modal"]}>
      {props.action.type === "create" ? (
        <CreateForm afterSubmit={props.onClose} />
      ) : props.action.type === "edit" ? (
        <EditForm
          initialTaskData={props.action.card}
          afterSubmit={props.onClose}
        />
      ) : props.action.type === "reissue" ? (
        <ReissueForm
          initialTaskData={props.action.card}
          afterSubmit={props.onClose}
        />
      ) : (
        props.action.type === "delete" && (
          <DeleteConfirmation
            taskData={props.action.card}
            afterSubmit={props.onClose}
          />
        )
      )}
    </Overlay>
  );
};

export default TaskModal;
