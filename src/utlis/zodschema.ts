import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(20, { message: "Password must be at most 20 characters" }),
});

export const registerSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),

  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(20, { message: "Password must be at most 20 characters" }),
});
export const updateProfileSchema = z.object({
  first_name: z
    .string({ message: "Only string" })
    .min(6, { message: "Name Must be 3 or more characters long" })
    .max(12, { message: "Name Must be 12 or more characters long" }),
  last_name: z
    .string({ message: "Only string" })
    .min(3, { message: "Name Must be 3 or more characters long" })
    .max(20, { message: "Name Must be 20 or more characters long" }),

  title: z
    .string({ message: "Only string" })
    .min(3, { message: "Name Must be 3 or more characters long" })
    .max(20, { message: "Name Must be 20 or more characters long" }),

  email: z.string().email({ message: "Please enter a valid email address." }),

  description: z
    .string({ message: "Only string" })
    .min(20, { message: "Name Must be 20 or more characters long" })
    .max(100, { message: "Name Must be 100 or more characters long" }),
});

export type Loginschemtype = z.infer<typeof loginSchema>;
export type Registerschemtype = z.infer<typeof registerSchema>;
export type UpdateProfileSchemaType = z.infer<typeof updateProfileSchema>;
