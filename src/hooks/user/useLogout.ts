import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "../../api/axiosClient";
import { authStorageService } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const logout = async () => {
  if (!!authStorageService.getToken()) {
    const response = await axiosClient.post("/logout/");
    return response.data;
  }
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logout,
    onSettled: () => {
      authStorageService.clearToken();
      queryClient.clear();
      navigate("/login", { replace: true });
    },
  });
};
