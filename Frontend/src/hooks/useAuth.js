import { useMutation, useQueries } from "@tanstack/react-query";
import { registerUser } from "../api/Auth";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (user) => registerUser(user),
    onError: (error) => {
      console.log("registertion failed: ", error);
    },
    onSuccess: (data) => {
      console.log("user successfully created: ", data);
    },
  });
};
