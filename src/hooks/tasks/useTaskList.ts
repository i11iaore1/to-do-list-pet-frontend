import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../../api/axiosClient";
import { queryKeys } from "../../api/queryKeys";
import { useUserInfo } from "../user/useUserInfo";
import type { TaskResponseInfo } from "../../types/task";

const fetchTaskList = async (filters: object): Promise<TaskResponseInfo[]> => {
  const response = await axiosClient.get("/user-tasks/", { params: filters });
  return response.data.results;
};

export const useTaskList = (filters: object) => {
  const { data: user } = useUserInfo();

  return useQuery({
    queryKey: queryKeys.tasks.list(filters),
    queryFn: () => fetchTaskList(filters),
    enabled: !!user,
  });
};
