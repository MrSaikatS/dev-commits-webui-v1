import { z } from "zod";

export const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const userRegisterSchmea = z.object({
  first_name: z
    .string({ message: "Only string" })
    .min(10, { message: "Name Must be 10 or more characters long" })
    .max(20, { message: "Name Must be 20 or more characters long" }),
  last_name: z.string({ message: "Only string" }).min(10).max(20),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(10).max(20),
});

export const postSchema = z.object({
  caption: z.string(),
});
