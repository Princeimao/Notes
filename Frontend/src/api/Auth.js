import { axiosInstance } from "./axiosInstance";

export const registerUser = async (value) => {
  const response = await axiosInstance.post("/api/user/auth/register", value);
  return response.data;
};

export const loginUser = async (value) => {
  const response = await axiosInstance.post("/api/user/auth/login", value);
  return response.data;
};

export const logoutUser = async () => {
  const response = await axiosInstance.get("/api/user/auth/logout");
  return response.data;
};
