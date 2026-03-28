import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "../../api/axiosClient";
import type { Id } from "../../types/Id";
import type { ISO8601String } from "../../types/date";

interface ReissueTaskParams {
  id: Id;
  requestData: {
    due_date: ISO8601String | null;
  };
}

const reissueTask = async ({ id, requestData }: ReissueTaskParams) => {
  const response = await axiosClient.post(
    `/user-tasks/${id}/reissue/`,
    requestData,
  );
  return response.data;
};

const useReissueTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: reissueTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

export default useReissueTask;
