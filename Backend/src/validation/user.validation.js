import { z } from "zod";

export const registerSchemaValidation = z.object({
  name: z.string().min(3, "Name should be atleast more than 3 character"),
  email: z.string().email("Please provide us a valid email address"),
  password: z.string().min(8, "Password should be atleast 8 character long"),
});

export const loginSchemaValidaion = z.object({
  email: z.string().email("Please provide us a valid email address"),
  password: z.string().min(8, "Password should be atleast 8 character long"),
});
