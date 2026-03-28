import type { TaskInfo, TaskResponseInfo } from "../types/task";
import { ISOOrNullToDateOrNull } from "./date";

export const ResponseToTaskInfo = (
  taskResponseInfo: TaskResponseInfo,
): TaskInfo => {
  return {
    id: taskResponseInfo.pk,
    description: taskResponseInfo.description,
    is_closed: taskResponseInfo.is_closed,
    is_current: taskResponseInfo.is_current,
    deadline: ISOOrNullToDateOrNull(taskResponseInfo.due_date),
  };
};
