import { axiosInstance } from "./axiosInstance";

export const createTodo = async ({ title, description, date, list }) => {
  console.log(date);
  const response = await axiosInstance.post("/api/todo/createTodo", {
    title,
    description,
    dueDate: date,
    list,
  });
  return response;
};

export const updateTodo = async (value) => {
  const response = await axiosInstance.put("/api/todo/updateTodo", value);
  return response;
};

export const getTodo = async () => {
  const response = await axiosInstance.get("/api/todo/getTodo");
  console.log(response.data.todo);
  return response.data.todo;
};

export const deleteTodo = async ({ id }) => {
  const response = await axiosInstance.delete(`/api/todo/deleteTodo/${id}`);
  console.log(response.data.todo);
  return response;
};
