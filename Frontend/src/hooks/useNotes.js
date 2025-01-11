import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createNotes, deleteNotes, getNotes, updateNotes } from "../api/Notes";

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

export const useUpdateNotes = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ title, description, id }) =>
      updateNotes({ title, description, id }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["GET_RECENT_NOTES"],
      });
    },
  });
};

export const useDeleteNotes = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id }) => {
      deleteNotes({ id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["GET_RECENT_NOTES"],
      });
    },
  });
};
