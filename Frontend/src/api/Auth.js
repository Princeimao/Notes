import { axiosInstance } from "./axiosInstance";

export const registerUser = async (value) => {
  try {
    const response = await axiosInstance.post("/api/user/auth/register", value);
    return response;
  } catch (error) {
    console.log("something went wrong while creating user", error);
  }
};
