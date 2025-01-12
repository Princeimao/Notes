import { z } from "zod";

export const listSchemaValidation = z.object({
  list: z.string().min(1, "list name cannot be empty"),
  color: z.string().optional(),
});
