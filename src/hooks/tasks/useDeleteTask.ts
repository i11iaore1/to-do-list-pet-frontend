import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "../../api/axiosClient";
import type { Id } from "../../types/Id";

interface DeleteTaskParams {
  id: Id;
}

const deleteTask = async ({ id }: DeleteTaskParams) => {
  const response = await axiosClient.delete(`/user-tasks/${id}/`);
  return response.data;
};

const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

export default useDeleteTask;
