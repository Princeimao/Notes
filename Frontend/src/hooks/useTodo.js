import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTodo, getTodo } from "../api/Todo";

export const useCreateList = () => {
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

export const useGetList = () => {
  return useQuery({
    queryKey: ["GET_TODO"],
    queryFn: getTodo,
  });
};
