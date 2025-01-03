import { z } from "zod";

export const todoSchemaValidation = z.object({
  title: z.string().min(1, "title cannot be empty"),
  description: z.string()
});
