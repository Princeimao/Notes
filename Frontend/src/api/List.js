import { axiosInstance } from "./axiosInstance";

export const createList = async (value) => {
  const response = await axiosInstance.post("/api/list/createList", value);
  return response;
};

export const getList = async () => {
  const response = await axiosInstance.get("/api/list/getList");
  console.log(response.data.list);
  return response.data.list || [];
};
