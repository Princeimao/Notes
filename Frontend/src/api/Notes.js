import { axiosInstance } from "./axiosInstance";

export const createNotes = async (values) => {
  const response = await axiosInstance.post("/api/todo/createNote", values);
  return response.data;
};

export const getNotes = async () => {
  const response = await axiosInstance.get("/api/todo/getNote");
  console.log(response.data.user.todos);
  return response.data.user.todos;
};
