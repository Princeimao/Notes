import { z } from "zod";

export const todoSchemaValidation = z.object({
  title: z.string().min(1, "title cannot be empty"),
  description: z.optional(z.string()),
  dueDate: z.string().date().optional(),
  list: z.string().optional(),
});

export const subtodoSchemaValidation = z.object({
  title: z.string().min(1, "title cannot be empty"),
  todoId: z.string(),
});
