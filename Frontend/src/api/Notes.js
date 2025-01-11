import { axiosInstance } from "./axiosInstance";

export const createNotes = async (values) => {
  const response = await axiosInstance.post("/api/note/createNote", values);
  return response.data;
};

export const getNotes = async () => {
  const response = await axiosInstance.get("/api/note/getNote");
  console.log(response.data.user.notes);
  return response.data.user.notes || [];
};

export const updateNotes = async ({ title, description, id }) => {
  const response = await axiosInstance.put(`/api/note/updateNote/${id}`, {
    title,
    description,
  });
  return response.data.user.notes;
};

export const deleteNotes = async ({ id }) => {
  const response = await axiosInstance.delete(`/api/note/deleteNote/${id}`);
  console.log(response);
  return response;
};
