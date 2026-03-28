import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "../../api/axiosClient";
import type { Id } from "../../types/Id";

interface CloseTaskParams {
  id: Id;
}

const closeTask = async ({ id }: CloseTaskParams) => {
  const response = await axiosClient.post(`/user-tasks/${id}/close/`);
  return response.data;
};

const useCloseTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: closeTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

export default useCloseTask;
