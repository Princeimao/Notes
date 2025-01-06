import { axiosInstance } from "./axiosInstance";

export const registerUser = async (value) => {
  try {
    const response = await axiosInstance.post("/api/user/auth/register", value);
    return response.data;
  } catch (error) {
    console.error("Error occurred while registering user:", error);
    return error;
  }
};
