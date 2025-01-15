import { axiosInstance } from "./axiosInstance";

export const createTodo = async ({ title, description, date, list }) => {
  const response = axiosInstance.post("/api/todo/createTodo", {
    title,
    description,
    date,
    list,
  });
  return response;
};

export const updateTodo = async (value) => {
  const response = axiosInstance.put("/api/todo/updateTodo", value);
  return response;
};

export const getTodo = async () => {
  const response = axiosInstance.get("/api/todo/updateTodo");
  console.log(response);
  return response;
};
