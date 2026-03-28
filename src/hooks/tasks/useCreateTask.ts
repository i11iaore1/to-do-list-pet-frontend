import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "../../api/axiosClient";
import type { ISO8601String } from "../../types/date";

const createTask = async (requestData: {
  description: string;
  due_date: ISO8601String | null;
}) => {
  const response = await axiosClient.post("/user-tasks/", requestData);
  return response.data;
};

const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

export default useCreateTask;
