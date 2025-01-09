import { useMutation } from "@tanstack/react-query";
import { loginUser, logoutUser, registerUser } from "../api/Auth";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (user) => registerUser(user),
  });
};

export const useLoginUser = () => {
  return useMutation({
    mutationFn: (value) => loginUser(value),
  });
};

export const useLogoutUser = () => {
  return useMutation({
    mutationFn: () => logoutUser(),
  });
};
