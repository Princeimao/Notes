import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createList, getList } from "../api/List";

export const useCreateList = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (value) => createList(value),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["GET_LIST"],
      });
    },
  });
};

export const useGetList = () => {
  return useQuery({
    queryKey: ["GET_LIST"],
    queryFn: getList,
  });
};
