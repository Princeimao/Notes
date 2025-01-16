import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTodo, deleteTodo, getTodo } from "../api/Todo";

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (value) => createTodo(value),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["GET_TODO"],
      });
    },
  });
};

export const useGetTodo = () => {
  return useQuery({
    queryKey: ["GET_TODO"],
    queryFn: getTodo,
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id }) => deleteTodo({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["GET_TODO"],
      });
    },
  });
};
