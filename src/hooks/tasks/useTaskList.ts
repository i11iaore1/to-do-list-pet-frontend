import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { axiosClient } from "../../api/axiosClient";
import { queryKeys } from "../../api/queryKeys";
import { useUserInfo } from "../user/useUserInfo";
import type { TaskResponseInfo } from "../../types/task";
import { DATA_PAGE_SIZE } from "../../config/config";

interface TaskListResponseIfo {
  count: number;
  current: number;
  next: number | null;
  prev: number | null;
  total_pages: number;
  results: TaskResponseInfo[];
}

const fetchTaskList = async (filters: object): Promise<TaskListResponseIfo> => {
  const params = {
    ...filters,
    // page_size: DATA_PAGE_SIZE
  };
  const response = await axiosClient.get("/user-tasks/", { params: params });
  return response.data;
};

export const useTaskList = (filters: object) => {
  const { data: user } = useUserInfo();

  return useQuery({
    queryKey: queryKeys.tasks.list(filters),
    queryFn: () => fetchTaskList(filters),
    enabled: !!user,
  });
};

const fetchPaginatedTaskList = async (
  filters: object,
  pageParam: number,
): Promise<TaskListResponseIfo> => {
  const params = {
    ...filters,
    page_size: DATA_PAGE_SIZE,
    page: pageParam,
  };
  const response = await axiosClient.get("/user-tasks/", { params: params });
  return response.data;
};

export const usePaginatedTaskList = (filters: object) => {
  const { data: user } = useUserInfo();

  return useInfiniteQuery({
    queryKey: queryKeys.tasks.list(filters),
    queryFn: ({ pageParam = 1 }) => fetchPaginatedTaskList(filters, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next ?? undefined,
    enabled: !!user,
  });
};
