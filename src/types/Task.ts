import type { ISO8601String } from "./date";
import type { Id } from "./Id";

export interface TaskResponseInfo {
  pk: Id;
  description: string;
  is_closed: boolean;
  is_current: boolean;
  due_date: ISO8601String | null;
  created_at: ISO8601String;
  updated_at: ISO8601String;
}

export interface TaskInfo extends Pick<
  TaskResponseInfo,
  "description" | "is_closed" | "is_current"
> {
  id: Id;
  deadline: Date | null;
}

export interface UserTaskResponseInfo extends TaskResponseInfo {
  user_id: Id;
}
