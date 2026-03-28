import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "../../api/axiosClient";
import type { Id } from "../../types/Id";
import type { ISO8601String } from "../../types/date";

interface EditTaskParams {
  id: Id;
  requestData: {
    description: string;
    due_date: ISO8601String | null;
  };
}

const editTask = async ({ id, requestData }: EditTaskParams) => {
  const response = await axiosClient.patch(`/user-tasks/${id}/`, requestData);
  return response.data;
};

const useEditTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

export default useEditTask;
