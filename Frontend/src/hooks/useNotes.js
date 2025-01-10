import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createNotes, getNotes } from "../api/Notes";

export const useCreateNotes = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values) => createNotes(values),
    onSuccess: () => {
      console.log();
      queryClient.invalidateQueries({
        queryKey: ["GET_RECENT_NOTES"],
      });
    },
  });
};

export const useGetNotes = () => {
  return useQuery({
    queryKey: ["GET_RECENT_NOTES"],
    queryFn: getNotes,
  });
};
