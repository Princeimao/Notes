import { z } from "zod";

export const noteSchemaValidation = z.object({
  title: z.string().min(1, "title cannot be empty"),
  description: z.string(),
});
