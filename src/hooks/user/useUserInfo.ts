import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "../../api/axiosClient";
import { queryKeys } from "../../api/queryKeys";
import { authStorageService } from "../../services/authService";

const fetchUserInfo = async () => {
  const response = await axiosClient.get("/users/me/");
  return response.data;
};

export const useUserInfo = () => {
  const haveToken = !!authStorageService.getToken();

  return useQuery({
    queryKey: queryKeys.user.me,
    queryFn: fetchUserInfo,
    retry: false,
    staleTime: Infinity,
    enabled: haveToken,
  });
};
