import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "../../api/axiosClient";
import { queryKeys } from "../../api/queryKeys";
import { authStorageService } from "../../services/authService";

const register = async (requestData: {
  email: string;
  nickname: string;
  password: string;
}) => {
  const response = await axiosClient.post("/register/", requestData);
  return response.data;
};

export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      authStorageService.setToken(data.access_token);
      queryClient.setQueryData(queryKeys.user.me, data.user);
    },
  });
};
