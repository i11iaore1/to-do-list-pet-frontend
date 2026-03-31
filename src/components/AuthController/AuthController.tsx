import React, { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../../services/authService";

const AuthController = ({ children }: { children: React.ReactNode }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === ACCESS_TOKEN_KEY) {
        if (event.newValue === null) {
          queryClient.clear();
          navigate("/login", { replace: true });
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, [queryClient, navigate]);

  return <>{children}</>;
};

export default AuthController;
