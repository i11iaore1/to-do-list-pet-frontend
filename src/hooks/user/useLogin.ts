import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "../../api/axiosClient";
import { queryKeys } from "../../api/queryKeys";
import { authStorageService } from "../../services/authService";

const login = async (requestData: { email: string; password: string }) => {
  const response = await axiosClient.post("/login/", requestData);
  return response.data;
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      authStorageService.setToken(data.access_token);
      queryClient.setQueryData(queryKeys.user.me, data.user);
    },
  });
};
