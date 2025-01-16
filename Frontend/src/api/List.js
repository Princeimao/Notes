import { axiosInstance } from "./axiosInstance";

export const createList = async (value) => {
  console.log(value);
  const response = await axiosInstance.post("/api/list/createList", {
    list: value.title,
    color: value.color,
  });
  return response;
};

export const getList = async () => {
  const response = await axiosInstance.get("/api/list/getList");
  console.log(response.data.list);
  return response.data.list || [];
};
