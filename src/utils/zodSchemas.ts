import { z } from "zod";

export const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: "Password should be at least 6 characters long" }),
});

export const userRegisterSchmea = z.object({
  first_name: z
    .string({ message: "Only string" })
    .min(3, { message: "Name Must be 3 or more characters long" })
    .max(20, { message: "Name Must be 20 or more characters long" }),
  last_name: z.string({ message: "Only string" }).min(3).max(20),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, { message: "Password should be at least 6 characters long" }).max(20),
});

export const postSchema = z.object({
  caption: z.string(),
  postImage: z.instanceof(File),
});
